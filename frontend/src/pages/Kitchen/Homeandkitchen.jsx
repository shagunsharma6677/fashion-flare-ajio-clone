import { Image } from '@chakra-ui/react'
import React from 'react'
import { useMediaQuery } from '@chakra-ui/react'
import Navbar from '../../component/Navbar/Navbar';
import MobileNav from '../../component/Navbar/MobileNav';
// import Navbar from '../Navbar/Navbar';
// import MobileNav from '../Navbar/MobileNav';
const Homeandkitchen = () => {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  return (
    <>
    {isLargerThan800 ? <Navbar /> : <MobileNav />}
   <Image width={{base:"200px",md:"300px",lg:"500px"}} margin="auto" src="https://i.ibb.co/Y02VKys/work-work-in-progress.gif" alt="" />
   
    </>

  )
}

export default Homeandkitchen