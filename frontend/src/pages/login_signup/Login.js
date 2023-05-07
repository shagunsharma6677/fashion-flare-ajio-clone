import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { SidebarContext } from "../context/SidebarContextProvider";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { useMediaQuery } from "@chakra-ui/react";
import Navbar from "../../component/Navbar/Navbar";
import MobileNav from "../../component/Navbar/MobileNav";
export default function SimpleCard() {
  // const { login, setLogin } = useContext(SidebarContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const toast = useToast();
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

  let admin = {
    email: "admin@gmail.com",
    password: "12345",
  };
  const handleLogin = () => {
    if (email && password) {
      axios
        .post(`https://witty-foal-undershirt.cyclic.app/auth/login`, {
          email: email,
          password: password,
        })
        .then((res) => {
          console.log(res.config);
          if (res.data.token) {
            localStorage.setItem("login",true)
            if (res.config.data === "{\"email\":\"admin@gmail.com\",\"password\":\"12345\"}") {
              toast({
                title: `Admin Login Successfull`,
                position: "top",
                status: "success",
                duration: 2000,
                isClosable: true,
              });
              navigate("/dashboard");
            } else {
              toast({
                title: `Login Success`,
                position: "top",
                status: "success",
                duration: 2000,
                isClosable: true,
              });
              navigate("/");
            }
          } else {
            toast({
              title: `Wrong credentials`,
              position: "top",
              status: "success",
              duration: 2000,
              isClosable: true,
            });
          }
        })
        .catch((err) => {
          toast({
            title: `Something Went Wrong`,
            position: "top",
            status: "error",
            duration: 2000,
            isClosable: true,
          });
        });
    } else {
      toast({
        title: `Something Went Wrong`,
        position: "top",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
    setEmail("");
    setPassword("");
  };

  return (
    <>
      {isLargerThan800 ? <Navbar /> : <MobileNav />}
      <Flex
        style={{
          backgroundImage: `url("https://media.istockphoto.com/id/494350434/vector/thin-shopping-retail-line-white-seamless-pattern.jpg?s=612x612&w=0&k=20&c=XZ5G1qrghaNlovv4kw5ZtHKPYYETR-LDqRAGafDs5LA=")`,
        }}
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={6}>
              <Stack align={"center"}>
                <Heading fontSize={"4xl"}>Welcome to Fashion Flair</Heading>
                <Text fontSize={"lg"} color={"gray.600"}>
                  to enjoy all <Link color={"blue.400"}>features</Link> ✌️
                </Text>
              </Stack>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Link color={"blue.400"}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={"yellow.400"}
                  color={"white"}
                  _hover={{
                    bg: "yellow.500",
                  }}
                  onClick={handleLogin}
                >
                  Log In
                </Button>
                <Link to="/signup">New User? Signup</Link>
                {error && <p>{error}</p>}
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
}
