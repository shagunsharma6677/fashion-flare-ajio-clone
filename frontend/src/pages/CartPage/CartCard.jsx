import React, { useState } from 'react'
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
    Button,
    Box,
    Image,
    Text,
    Select,
} from '@chakra-ui/react'
import axios from 'axios'

const CartCard = ({ item, setCount, count }) => {

    const [size, setsize] = useState("M")
    const [cartitem, setCartitem] = useState([])

    const handleSizeChange = (event) => {
        setsize(event.target.value);
    };

    const deleteitem = (id) => {
        console.log(id)
        axios.delete(`http://localhost:4000/cart/delete/${id}`)
            .then(res => setCartitem(res.data))
    }


    const addtowishlist = (item, id) => {
       
        axios.post("https://magnificent-bass-suit.cyclic.app/wishlist", item)
            .then(r => setCartitem(r.data))

        axios.delete(`https://magnificent-bass-suit.cyclic.app/cart/${id}`)
            .then(res => setCartitem(res.data))
    }
    
    return (
        <>


            <Box padding={"5px"} border="1px solid rgb(250,230,250)" display={{ base: "grid", md: "flex" }} justifyContent= "space-evenly" gap="20px" marginTop="20px">
                <Image src={item.src} width={{ base: "200px", sm: "200px" }} margin={{ base: "auto" }} alt="" />
                <Text>{item.brand}- <span> {item.title}</span> </Text>

                <Popover >
                    <PopoverTrigger>
                        <Button fontSize={"12px"}> Size {item.size} - Qty {count}</Button>
                    </PopoverTrigger>
                    <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>Select Size!</PopoverHeader>
                        <PopoverBody width="100%">
                            <Select width="100px" margin="auto" style={{ border: "1px solid black", marginTop: "10px", padding: "10px" }} value={size} onChange={handleSizeChange}>
                                <option value="" disabled >Select Size</option>
                                <option value="XS">Extra small</option>
                                <option value="S">Small</option>
                                <option value="L">Large</option>
                                <option value="XL">Extra Large</option>
                                <option value="XXL"> XXL</option>
                            </Select>

                        </PopoverBody>
                        <hr />
                        <PopoverHeader>Set Quantity!</PopoverHeader>
                        <PopoverBody>
                            <button width={"10px"} disabled={count === 1} onClick={() => setCount(count - 1)}> - </button>  {count} <button onClick={() => setCount(count + 1)}> + </button></PopoverBody>
                    </PopoverContent>
                </Popover>



                <div style={{ display: "grid", gap: "20px" }}>
                    <div >
                        <h1> Discount  Rs.{item.discount}</h1>

                        <h1>  Rs. {item.discountPrice}  <span style={{ textDecoration: "line-through" }}>{item.orginalPrice}</span> </h1>
                    </div>
                    <div>
                        <div style={{ display: "flex", gap: "20px" }}>
                            <Button onClick={() => deleteitem(item._id)}> Delete</Button>
                            <Button onClick={() => addtowishlist(item, item._id)}> Move To Wishlist</Button></div>
                    </div>

                </div>

            </Box>
        </>
    )
}

export default CartCard