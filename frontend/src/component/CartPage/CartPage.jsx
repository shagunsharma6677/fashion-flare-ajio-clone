import axios from 'axios'
import React, { useState, useEffect, useRef } from 'react'
import { Box, Button, Checkbox, CheckboxGroup, Fade, Flex, Image, Stack, Text } from '@chakra-ui/react';
import CartBox from "../CartBox/CartBox"

import { Input, useDisclosure } from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Paymentmodal from './Payments';
import { useDispatch } from "react-redux"
import { getCartData } from '../../redux/action';
const CartPage = () => {
    const [cart, setcart] = useState([])
    const [count, setCount] = useState(1)
    const dispatch = useDispatch()
    const ref = useRef()
    const navigate = useNavigate()
    const { isOpen, onToggle } = useDisclosure()

    const getcartdata = () => {
        axios.get("https://magnificent-bass-suit.cyclic.app/cart")
            .then(res => {
                setcart(res.data)
                dispatch(getCartData(res.data))

                const total = cart.reduce((a1, a2) => {
                    return Number(a1.price) + Number(a2.price)
                })
                ref.current = total
            })
    }
    const handleclick = () => {
        navigate("/")
    }
    useEffect(() => {
        getcartdata()
    }, [cart]);

    console.log(cart)
    return (
        <>
            {cart.length === 0 ?
                <Box textAlign={"center"}>
                    <div>
                        <img src="https://assets.ajio.com/cms/AJIO/WEB/28032021-D-cartpagebanner-relianceones.jpg" alt="" />
                        <h1 style={{ padding: "20px", color: "rgb(88, 88, 88)", fontFamily: "SourceSansProSemiBold", fontWeight: "400" }}>Your Shopping Bag is Empty!!</h1>
                    </div>

                    <Button onClick={handleclick} bg={"rgb(213,162,73)"} padding="10px" color="white">Continue Shopping</Button>
                    <Box margin="auto" padding={"40px"} >
                        <hr />
                        <Flex padding={"30px"} justifyContent={"space-around"} color="rgb(213,162,73)">
                            <Flex>
                                <Image width={"40px"} padding="5px" src='https://penncommunitybank.imgix.net/wp-content/uploads/2019/11/security-icon.png?auto=compress&fit=crop' />
                                <Text padding={"10px"}>SECURE PAYMENTS</Text>
                            </Flex>
                            <Flex>
                                <Image width={"40px"} padding="5px" src='https://static.thenounproject.com/png/2724368-200.png' />
                                <Text padding={"10px"}>CASH ON DELIVERY</Text>
                            </Flex>
                            <Flex>
                                <Image width={"40px"} padding="5px" src='https://cdn-icons-png.flaticon.com/512/1883/1883880.png' />
                                <Text padding={"10px"}>ASSURED QUALITY</Text>
                            </Flex>
                            <Flex>
                                <Image width={"40px"} padding="5px" src='https://static.thenounproject.com/png/1015317-200.png' />
                                <Text padding={"10px"}>EASY RETURNS</Text>
                            </Flex>
                        </Flex>

                        <hr style={{ fontSize: "10px" }} />
                    </Box>


                    <Flex padding={"20px"} justifyContent="space-around" backgroundColor="rgb(250,250,250)" marginTop="20px">
                        <Box justifyContent={"center"} alignItems="center" >
                            <img width="60px" src="https://cdn-icons-png.flaticon.com/512/182/182308.png" alt="" />
                            <Text>Easy Returns</Text>
                        </Box>
                        <Box justifyContent={"center"} alignItems="center" >
                            <img width="60px" src="https://thumbs.dreamstime.com/b/empathy-vector-icon-black-silhouette-flat-illustration-isolated-white-background-204899514.jpg" alt="" />
                            <Text >100% Hand Picked</Text>
                        </Box>
                        <Box justifyContent={"center"} alignItems="center" >
                            <img width="60px" src="https://d1pt6w2mt2xqso.cloudfront.net/AcuCustom/Sitename/DAM/044/FSEweek-icon-tick.png" alt="" />
                            <Text> Assured Quality</Text>
                        </Box>
                    </Flex>
                </Box> :
                <Box>
                    <Flex width={"80%"} margin="auto" gap={"20px"}>
                        <Box width={"70%"} margin={"auto"} marginTop={"30px"}>
                            <Text fon textAlign={"left"}>My Bag({cart.length}item)</Text>
                            <Box style={{ textAlign: "center" }}>
                                {cart.map((item, index) =>
                                    <CartBox item={item} setCount={setCount} count={count} key={index} />)}
                            </Box>
                        </Box>
                        <Box width={"30%"} border="1px solid rgb(238,238,238)" bg={"rgb(250,250,250)"} padding="10px" marginTop={"30px"}>
                            <Box padding={"5px"} margin={"5px"} >

                                <Text fontFamily={"Lora"} fontWeight="700" textAlign={"left"} color="rgb(51, 51, 51)">Order Details</Text>
                                <Flex padding={"5px"} justifyContent={"space-between"} color="rgb(51, 51, 51)">
                                    <Text >Bag total</Text>
                                    <Text>{ref.current}</Text>
                                </Flex>
                                <Flex padding={"5px"} justifyContent={"space-between"} color="rgb(51, 51, 51)">
                                    <Text>bag discount</Text>
                                    <Text>{ref.current >= 1000 ? "30%" : "10%"}</Text>

                                </Flex>
                                <Flex>


                                </Flex>
                                <Flex padding={"5px"} justifyContent={"space-between"} color="rgb(51, 51, 51)" >
                                    <Text>Delivery </Text>
                                    <Text>{ref.current >= 1000 ? "Free delivery" : "Rs 99"}</Text>
                                </Flex>
                                <Flex padding={"5px"} justifyContent={"space-between"} fontWeight="600" color="rgb(51, 51, 51)" >
                                    <Text>Order total</Text>
                                    <Text>{ref.current >= 1000 ? ref.current : ref.current + 99}</Text>
                                </Flex>
                                <Paymentmodal total={ref.current}/>
                             {/* <Link to={"/payment"}>
                               <Button bg={"rgb(213,162,73)"} width="100%" padding={"15px"} color="white"> Proceed To ship</Button>
                        
                             </Link>    */}
                                </Box>

                            <Box marginTop={"50px"}>
                                <Text>Apply Coupon</Text>
                                <Flex gap={"10px"} padding="10px">
                                    <Input border={"grey"} width={"90%"} placeholder='Enter Coupon Code' />
                                    <Button>Apply</Button>
                                </Flex>
                                <Box bg={"white"} textAlign="left" overflow={"scroll"} height="500px" padding={"10px"} border="1px dashed black">
                                    <Text textAlign={"left"}>Applicable Coupons</Text>
                                    <CheckboxGroup colorScheme='green' defaultValue={""}>
                                        <Stack spacing={[1, 5]} direction={['row', 'column']}>
                                            <hr />
                                            <Checkbox value='FREEDEL'>
                                                <Box>
                                                    <Text fontSize={"13px"}>Savings : ₹1.00</Text>
                                                    <Text fontSize={"16px"}>FREEDEL</Text>
                                                    <Text fontSize={"10px"}>Free Shipping For Limited Period.</Text>
                                                </Box>
                                            </Checkbox>
                                            <hr />

                                        </Stack>
                                    </CheckboxGroup>
                                    <CheckboxGroup colorScheme='green' defaultValue={""}>
                                        <Stack spacing={[1, 5]} direction={['row', 'column']}>
                                            <hr />
                                            <Checkbox value='FREESHIP'>
                                                <Box>
                                                    <Text fontSize={"13px"}>Savings : ₹1.00</Text>
                                                    <Text fontSize={"16px"}>FREESHIP</Text>
                                                    <Text fontSize={"10px"}>Shipping on us for Your First Purchase.</Text>
                                                </Box>
                                            </Checkbox>
                                            <hr />

                                        </Stack>
                                    </CheckboxGroup>
                                    <CheckboxGroup colorScheme='green' defaultValue={""}>
                                        <Stack spacing={[1, 5]} direction={['row', 'column']}>
                                            <hr />
                                            <Checkbox value='!100'>
                                                <Box>
                                                    <Text fontSize={"13px"}>Savings : ₹100.00</Text>
                                                    <Text fontSize={"16px"}>!100</Text>
                                                    <Text fontSize={"10px"}>Get 100Rs off</Text>
                                                </Box>
                                            </Checkbox>
                                            <hr />

                                        </Stack>
                                    </CheckboxGroup>
                                    <CheckboxGroup colorScheme='green' defaultValue={""}>
                                        <Stack spacing={[1, 5]} direction={['row', 'column']}>
                                            <hr />
                                            <Checkbox value='AJIOONE'>
                                                <Box>
                                                    <Text fontSize={"13px"}>Savings : 50%</Text>
                                                    <Text fontSize={"16px"}>AJIOONE</Text>
                                                    <Text fontSize={"10px"}>Buy 1 And Get One Free</Text>
                                                </Box>
                                            </Checkbox>
                                            <hr />

                                        </Stack>
                                    </CheckboxGroup>
                                    <CheckboxGroup colorScheme='green' defaultValue={""}>
                                        <Stack spacing={[1, 5]} direction={['row', 'column']}>
                                            <hr />
                                            <Checkbox value='SHOPNOW'>
                                                <Box>
                                                    <Text fontSize={"13px"}>Savings : ₹1500</Text>
                                                    <Text fontSize={"16px"}>SHOPNOW</Text>
                                                    <Text fontSize={"10px"}>Get 1500 Off On Order Above 5000</Text>
                                                </Box>
                                            </Checkbox>
                                            <hr />

                                        </Stack>
                                    </CheckboxGroup>
                                    <CheckboxGroup colorScheme='green' defaultValue={""}>
                                        <Stack spacing={[1, 5]} direction={['row', 'column']}>
                                            <hr />
                                            <Checkbox value='BIGSAVINS'>
                                                <Box>
                                                    {/* <Text fontSize={"13px"}></Text> */}
                                                    <Text fontSize={"16px"}>BIGSAVINS</Text>
                                                    <Text fontSize={"10px"}>Best Value For You</Text>
                                                </Box>
                                            </Checkbox>
                                            <hr />

                                        </Stack>
                                    </CheckboxGroup>

                                </Box>

                            </Box>
                            <Box textAlign={"left"} marginTop="50px" padding={"5px"}>
                                <Text color={"rgb(32, 32, 32)"} fontSize="14px" fontWeight={"700"}>Return/Refund policy</Text>
                                <Text color={"grey"}>In case of return, we ensure quick refunds. Full amount will be refunded excluding Convenience Fee</Text>
                                <Text color={"rgb(38, 140, 185)"} fontWeight="700">Retun Policy</Text>
                            </Box>
                        </Box>


                    </Flex>

                    <Box margin="auto" padding={"40px"} >
                        <hr />
                        <Flex padding={"30px"} justifyContent={"space-around"} color="rgb(213,162,73)">
                            <Flex>
                                <Image width={"40px"} padding="5px" src='https://penncommunitybank.imgix.net/wp-content/uploads/2019/11/security-icon.png?auto=compress&fit=crop' />
                                <Text padding={"10px"}>SECURE PAYMENTS</Text>
                            </Flex>
                            <Flex>
                                <Image width={"40px"} padding="5px" src='https://static.thenounproject.com/png/2724368-200.png' />
                                <Text padding={"10px"}>CASH ON DELIVERY</Text>
                            </Flex>
                            <Flex>
                                <Image width={"40px"} padding="5px" src='https://cdn-icons-png.flaticon.com/512/1883/1883880.png' />
                                <Text padding={"10px"}>ASSURED QUALITY</Text>
                            </Flex>
                            <Flex>
                                <Image width={"40px"} padding="5px" src='https://static.thenounproject.com/png/1015317-200.png' />
                                <Text padding={"10px"}>EASY RETURNS</Text>
                            </Flex>
                        </Flex>

                        <hr style={{ fontSize: "10px" }} />
                    </Box>


                    <Flex justifyContent="space-around" backgroundColor="rgb(250,250,250)" marginTop="20px">
                        <div style={{}}>
                            <img width="60px" src="https://cdn-icons-png.flaticon.com/512/182/182308.png" alt="" />
                            <h2>Easy Returns</h2>
                        </div>
                        <div style={{}}>
                            <img width="60px" src="https://thumbs.dreamstime.com/b/empathy-vector-icon-black-silhouette-flat-illustration-isolated-white-background-204899514.jpg" alt="" />
                            <h2>!100% Hand Picked</h2>
                        </div>
                        <div style={{}}>
                            <img width="60px" src="https://d1pt6w2mt2xqso.cloudfront.net/AcuCustom/Sitename/DAM/044/FSEweek-icon-tick.png" alt="" />
                            <h2> Assured Quality</h2>
                        </div>
                    </Flex>
                    <hr />
                </Box>}


        </>
    )
}

export default CartPage