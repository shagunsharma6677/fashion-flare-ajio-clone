import { Box, Button, Text } from '@chakra-ui/react'
import axios from 'axios'
import React from 'react'
// import { useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom'

import { useMediaQuery } from '@chakra-ui/react'
import Navbar from '../../component/Navbar/Navbar'
import MobileNav from '../../component/Navbar/MobileNav'
const Wishlist = () => {
    // const dispatch = useDispatch()
    // const wishlist = useSelector(store => store.wishlist)
    // const Products = useSelector((store) => store.ProductReducer.Wishlist);
    // https://magnificent-bass-suit.cyclic.app/wishlist
    const [wishlist, setwishlist] = React.useState([])
    const [data, setdata] = React.useState([])
    const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

    const navigate = useNavigate()

    const getdata = () => {
        axios.get("http://localhost:4000/wishlist")
            .then(((res) => setwishlist(res.data)))
    }
    const handledelete = (id) => {
        axios.delete(`http://localhost:4000/wishlist/delete/${id}`)
            .then((res) => setdata(res.data))

    }
    const handltenavigate = () => {
        navigate("/")
    }
    React.useEffect(() => {
        getdata()
    });
    return (
        <>
            {isLargerThan800 ? <Navbar /> : <MobileNav />}

            <Box textAlign={"center"} margin="2% 0% 0% 0%" fontSize={"42px"} fontFamily="Lora" fontWeight={600} >My Wishlist</Box>
            {wishlist.length === 0 ? <Box textAlign={"center"} margin="5% 5%" justifyContent="center" >
                
                <Text mt="10px" >Your Wishlist is empty!!</Text>
                <Text mt="10px" >ADD A FEW PRODUCTS AND THEN EXPLORE THE COOLEST WAY TO SHOP CLOTHES ONLINE!</Text>

                <Button mt="10px" bg="rgb(213,162,73)" onClick={handltenavigate} colorScheme="none" color="white">Continue Shopping</Button>

            </Box> : <Box className="women-right" width={"70%"} margin="auto">
            
                <Box className="women-content"
                    style={{
                        display: "grid",
                        gap: "15px",
                        justifyContent: "space-around",
                        margin: "20px",
                    }}
                    gridTemplateColumns={{
                        sm: "repeat(1, 1fr)",
                        md: "repeat(2, 1fr) ",
                        lg: "repeat(3, 1fr) ",
                    }}
                >
                    {wishlist.map((item) => (

                        <Box key={item._id} >
                            <div className="card-cont">
                                <div className="img-div">
                                    <img src={item.src} alt={item.brand} />
                                </div>
                                <div className="card-content-wrap">
                                    <div className="card-content">
                                        <div>{item.brand}</div>
                                        <div>{item.title}</div>
                                        <div>{item.discountPrice} <span style={{ textDecoration: "line-through" }}>{item.orginalPrice} </span> </div>
                                        <div>Get it at {item.offer} {item.discount}</div>
                                        <Box display="flex" gap="20px" >
                                            <Button colorScheme="green">Add to bag</Button>
                                            <Button onClick={()=>handledelete(item._id)} colorScheme="red">Delete</Button>
                                        </Box>
                                    </div>
                                </div>
                            </div>
                        </Box>
                    ))}

                </Box>
            </Box>}

        </>
    )
}

export default Wishlist