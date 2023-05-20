import React, { useState } from "react";
import Sidebar from "./SidebarComp";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Select,
  Alert,
  AlertIcon,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import axios from "axios";
import { useToast } from "@chakra-ui/react";

const AddProductsPage = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [product, setProduct] = useState({
    src: "",
    brand: "",
    category: "men",
    title: "",
    discountPrice: "",
    originalPrice: "",
    discount: "",
    offer: "",
    genre: [],
    rating: "",
  });
  const toast = useToast();
  const addProduct = async (payload) => {
    try {
      const response = await axios.post(
        `http://localhost:4000/product/add`,
        payload
      );
      console.log(response.data);
      toast({
        title: `Product Added Succesfully`,
        position: "top",
        isClosable: true,
        status: "success",
      });
    } catch (err) {
      console.log(err);
      toast({
        title: `Something went Wrong`,
        position: "top",
        isClosable: true,
        status: "error",
      });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      (product.src && product.brand && product.category,
      product.title,
      product.discountPrice,
      product.originalPrice,
      product.discount,
      product.offer,
      product.genre,
      product.rating)
    ) {
      addProduct(product);
    }else{
        toast({
            title: `Something went Wrong`,
            position: "top",
            isClosable: true,
            status: "error",
          });
    }
  };

  return (
    <div>
      <Sidebar>
        <Box border={"1px solid re"}>
          <Box>
            <Breadcrumb
              spacing="8px"
              separator={<ChevronRightIcon color="gray.500" />}
            >
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Admin</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <BreadcrumbLink href="#">Add Product</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </Box>
        </Box>
        <Box bg={"white"}>
          <Heading marginBottom={"20px"} textAlign={"center"}>
            Add Product Page
          </Heading>
          <Box
            w="500px"
            mx="auto"
            border={"1px solid black"}
            p={6}
            boxShadow="lg"
            rounded="md"
          >
            <form onSubmit={handleSubmit}>
              <FormControl id="src" isRequired>
                <FormLabel>Product Image URL</FormLabel>
                <Input
                  type="url"
                  name="src"
                  value={product.src}
                  onChange={(e) =>
                    setProduct({ ...product, src: e.target.value })
                  }
                />
              </FormControl>
              <FormControl id="brand" isRequired>
                <FormLabel>Brand</FormLabel>
                <Input
                  type="text"
                  name="brand"
                  value={product.brand}
                  onChange={(e) =>
                    setProduct({ ...product, brand: e.target.value })
                  }
                />
              </FormControl>
              <FormControl id="category" isRequired>
                <FormLabel>Category</FormLabel>
                <Select
                  name="category"
                  value={product.category}
                  onChange={(e) =>
                    setProduct({ ...product, category: e.target.value })
                  }
                >
                  <option value="men">Men</option>
                  <option value="women">Women</option>
                  <option value="kid">Kid</option>
                </Select>
              </FormControl>
              <FormControl id="title" isRequired>
                <FormLabel>Product Title</FormLabel>
                <Input
                  type="text"
                  name="title"
                  value={product.title}
                  onChange={(e) =>
                    setProduct({ ...product, title: e.target.value })
                  }
                />
              </FormControl>
              <FormControl id="discountPrice" isRequired>
                <FormLabel>Discount Price</FormLabel>
                <Input
                  type="text"
                  name="discountPrice"
                  value={product.discountPrice}
                  onChange={(e) =>
                    setProduct({ ...product, discountPrice: e.target.value })
                  }
                />
              </FormControl>
              <FormControl id="originalPrice" isRequired>
                <FormLabel>Original Price</FormLabel>
                <Input
                  type="text"
                  name="originalPrice"
                  value={product.originalPrice}
                  onChange={(e) =>
                    setProduct({ ...product, originalPrice: e.target.value })
                  }
                />
              </FormControl>
              <FormControl id="discount" isRequired>
                <FormLabel>Discount</FormLabel>
                <Input
                  type="text"
                  name="discount"
                  value={product.discount}
                  onChange={(e) =>
                    setProduct({ ...product, discount: e.target.value })
                  }
                />
              </FormControl>
              <FormControl id="offer" isRequired>
                <FormLabel>Offer</FormLabel>
                <Input
                  type="text"
                  name="offer"
                  value={product.offer}
                  onChange={(e) =>
                    setProduct({ ...product, offer: e.target.value })
                  }
                />
              </FormControl>
              <FormControl id="genre" isRequired>
                <FormLabel>Genre</FormLabel>
                <Input
                  type="text"
                  name="genre"
                  value={product.genre}
                  onChange={(e) =>
                    setProduct({
                      ...product,
                      genre: [...product.genre, e.target.value],
                    })
                  }
                />
              </FormControl>
              <FormControl id="rating" isRequired>
                <FormLabel>Rating</FormLabel>
                <Input
                  type="text"
                  name="rating"
                  value={product.rating}
                  onChange={(e) =>
                    setProduct({ ...product, rating: e.target.value })
                  }
                />
              </FormControl>
              <Button type="submit" mt={4} colorScheme="teal">
                Submit
              </Button>
            </form>
          </Box>
        </Box>
      </Sidebar>
    </div>
  );
};

export default AddProductsPage;
