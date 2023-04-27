import React, { useContext } from "react";
import Logo2 from "../Images/fashion_flare.png"
import {
  Flex,
  Box,
  Text,
  Image,
  Button,
} from "@chakra-ui/react";
import MobileItem from "./MobileItem";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillBagCheckFill,BsFillSuitHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { SidebarContext } from "../context/SidebarContextProvider";
const MobileNav = () => {



  const { cartData, setCartData, cartLength, setCartLength, setCategory } =
    useContext(SidebarContext);

  return (
    <div style={{ paddingBottom: "10px" }}>
      <Flex
        padding="10px"
        alignItems={"center"}
        justifyContent="space-around"
        position={"fixed"}
        top="0"
        width="100%"
        zIndex={"999"}
        backgroundColor="#fff"
      >
        <MobileItem
          nameitem={<GiHamburgerMenu />}
          item1={<Link to="/women">
            WOMENS
          </Link>}
          item2={<Link to="/men">
            MENS
          </Link>}
          item3={<Link to="/kid">
            KIDS
          </Link>}
          item4={<Link to="/homeandkitchen">
            HOME & KITCHEN
          </Link>}
          
        />
        <Box>
          <Link to="/">
            <Image
              src={Logo2}
              width="100px"
              margin="auto"
            ></Image>
          </Link>
        </Box>
        <Link to="/login">
          <Button colorScheme="red" size="sm">SignIn</Button>
        </Link>
        <Link to="/cart">

          <Box

            right="20px"
            width={"fit-content"}
            height="1rem"
            display={"flex"}
            alignItems={"center"}
            gap="3"
          >
            <BsFillBagCheckFill style={{ fontSize: "30px" }} />
            <Text as="b" fontSize={"xs"}>
              {cartLength}
            </Text>
          </Box>
        </Link>
        <Link to="/wishlist">

          <Box

            right="20px"
            width={"fit-content"}
            height="1rem"
            display={"flex"}
            alignItems={"center"}
            gap="3"
          >
            <BsFillSuitHeartFill style={{ fontSize: "30px" }} />
            <Text as="b" fontSize={"xs"}>
              
            </Text>
          </Box>
        </Link>
      </Flex>
      {/* <Input
        width="300px"
        marginTop="10px"
        placeholder={`Search by product,prices,and brand`}
      ></Input> */}
    </div>
  );
};

export default MobileNav;