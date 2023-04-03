import React, { useState, useEffect } from 'react'
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    Button,
} from '@chakra-ui/react'
import axios from 'axios'

// import { ChevronDownIcon } from '@chakra-ui/icons'


const CartBox = ({ item, setCount,count }) => {
    // const [count, setCount] = useState(1)
    const [size, setsize] = useState("M")
    const [cartitem, setCartitem] = useState([])
    const handleSizeChange = (event) => {
        setsize(event.target.value);
    };
    console.log(cartitem)
    const deleteitem = (id) => {
        // window.location.reload(true);
        console.log(id)
        axios.delete(`https://magnificent-bass-suit.cyclic.app/cart/${id}`)
            // .then(res=>res.json())
            .then(res => setCartitem(res.data))

    }
    const addtowishlist = (item, id) => {
        console.log(item)
        // axios.post("http://localhost:8080/wishlist",item)
        // .then((r) => {
        //    console.log(r.data)
        // })
        axios.post("https://magnificent-bass-suit.cyclic.app/wishlist", item)
            .then(r => setCartitem(r.data))

        axios.delete(`https://magnificent-bass-suit.cyclic.app/cart/${id}`)
            // .then(res=>res.json())
            .then(res => setCartitem(res.data))
    }
    useEffect(() => {
    //    deleteitem()
    }, []);

    return (
        <>


            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
                <div><img src={item.src} width={150} alt="" /> </div>
                <div><h2>{item.brand}- <span> {item.nameCls}</span> </h2></div>
                <div>
                    <Popover>
                        <PopoverTrigger>
                            <Button> Size {size} - Qty {count}</Button>
                        </PopoverTrigger>
                        <PopoverContent>
                            <PopoverArrow />
                            <PopoverCloseButton />
                            <PopoverHeader>Select Size!</PopoverHeader>
                            <PopoverBody>
                                <select style={{ border: "1px solid black", width: "200px", marginTop: "10px", padding: "10px" }} value={size} onChange={handleSizeChange}>
                                    <option value="" disabled selected>Select Size</option>
                                    <option value="XS">Extra small</option>
                                    <option value="S">Small</option>
                                    <option value="L">Large</option>
                                    <option value="XL">Extra Large</option>
                                    <option value="XXL"> XXL</option>
                                </select></PopoverBody>
                            <hr />
                            <PopoverHeader>Set Quantity!</PopoverHeader>
                            <PopoverBody>
                                <button width={"10px"} disabled={count === 1} onClick={() => setCount(count - 1)}> - </button>  {count} <button onClick={() => setCount(count + 1)}> + </button></PopoverBody>
                        </PopoverContent>
                    </Popover>
                </div>


                <div style={{ display: "grid", gap: "50px" }}>
                    <div >
                        <h1> Discount  Rs.{item.offerpricess}</h1>
                        {/* <h1></h1> */}
                        <h1> <p style={{textDecoration:"line-through"}}>Rs. {item.orginalprice}</p>  <span>{item.discount}%Off</span> <span> Rs. {item.price * count}</span></h1>
                    </div>
                    <div>
                        <div style={{ display: "flex", gap: "20px" }}>
                            <Button onClick={() => deleteitem(item.id)}> Delete</Button>
                            <Button onClick={() => addtowishlist(item, item.id)}> Move To Wishlist</Button></div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default CartBox