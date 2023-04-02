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
import { SidebarContext } from "../context/SidebarContextProvider";
import { useToast } from "@chakra-ui/react";

export default function SimpleCard() {
  const { login, setLogin } = useContext(SidebarContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const toast = useToast();

  const handleLogin = () => {
    let user = JSON.parse(localStorage.getItem("user"));
    if (username === "admin" && password === "123456") {
      // alert(" Admin Login succesfull");
      toast({
        title: `Admin Login Successfull`,
        position: "top",
        isClosable: true,
      });
      navigate("/admin");
    } else if (username === user.username && password === user.password) {
      localStorage.setItem("loginValue", JSON.stringify(login));
      toast({
        title: `User Login Successfull`,
        position: "top",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      navigate("/");
      setLogin(true);
    } else {
      setError("Invalid username or password");
    }
  };

  return (
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
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
  );
}
