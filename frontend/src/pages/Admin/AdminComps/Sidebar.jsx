import React from "react";
// import logo from "../../Images/fashion_flare.png"
// import Admin from "../../Images/Admin.png"
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Spacer,
  Image,
  Button,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiBell,
  FiChevronDown,
} from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

const LinkItems = [
  { name: "Dashboard", icon: FiHome, to: "/dashboard" },
  { name: "Store", icon: FiTrendingUp, to: "/store" },
  { name: "AddProducts", icon: FiCompass, to: "/addproducts" },
 
];


export default function AdminSidebar({ children, heading }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const headings = heading;
  return (
    <Box position="fixed" top="0" left="0" right="0" bg={useColorModeValue("gray.100", "gray.900")}>
      <Flex>
        <SidebarContent
          onClose={() => onClose}
          display={{ base: "none", md: "block" }}
        />
        <Drawer
          autoFocus={false}
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size="full"
        >
          <DrawerContent>
            <SidebarContent onClose={onClose} />
          </DrawerContent>
        </Drawer>
      </Flex>
      {/* mobilenav */}
      <MobileNav heading={headings} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4" overflowY="auto" height="calc(100vh - 4rem)">
        {children}
      </Box>
    </Box>
  );
}


const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="100vh"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Link to="/dashboard">
          <Box>
            <Image src={""} />
          </Box>
        </Link>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} to={link.to} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};


const NavItem = ({ icon, to, children, ...rest }) => {
  return (
    <Link
      to={to}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "#ec066e",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

const MobileNav = ({ onOpen, heading, ...rest }) => {
  let username = localStorage.getItem("adminusername")
  let useremail = localStorage.getItem("adminnuseremail")
  const navigate = useNavigate()
  const handlesignout = () => {
    navigate("/")
    localStorage.clear()

  }
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="10"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >


      <HStack
        border={"1px solid re"}
        w={"100%"}
        spacing={{ base: "0", md: "6" }}
      >
        <Text Text ml={"5px"}>
          {heading}
        </Text>
        <Spacer />
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<FiBell />}
        />
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                {/* <Avatar
                  size={"sm"}
                  src={Admin}
                /> */}
                <Text border={"1px solid red"} bg={"aliceblue"} padding="5px" borderRadius={"100%"}> {username?username[0].toUpperCase():null}{username?username[1].toUpperCase():null}</Text>
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="sm">{username}</Text>
                  <Text fontSize="xs" color="gray.600">
                    {useremail}
                  </Text>
                </VStack>
                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue("white", "gray.900")}
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Billing</MenuItem>
              <MenuDivider />
              <MenuItem>
                <Button onClick={handlesignout}>Sign out</Button>
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};