
  import React, { useState } from "react";
  import AdminSidebar from "../AdminComps/Sidebar";
import { Box,FormControl, FormLabel, Input, Button,Select, Alert, AlertIcon  } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { postProductData } from "../../../redux/Products/action";

  function AddProducts() {
    const dispatch = useDispatch();
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
      rating: ""
    });
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setProduct((prevProduct) => ({
        ...prevProduct,
        [name]: value
      }));
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      dispatch(postProductData(product));
      setProduct({
        src: "",
        brand: "",
        category: "",
        title: "",
        discountPrice: "",
        originalPrice: "",
        discount: "",
        offer: "",
        genre: [],
        rating: ""
      });
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    };
    const handleCloseAlert = () => {
      setShowAlert(false);
    };

    return (
      <AdminSidebar heading={"AddProducts"}>
          <Box w="800px" mx="auto" p={6} boxShadow="lg" rounded="md">
        <form onSubmit={handleSubmit} >
      <FormControl id="src" isRequired>
        <FormLabel>Product Image URL</FormLabel>
        <Input type="url" name="src" value={product.src} onChange={handleInputChange} />
      </FormControl>
      <FormControl id="brand" isRequired>
        <FormLabel>Brand</FormLabel>
        <Input type="text" name="brand" value={product.brand} onChange={handleInputChange} />
      </FormControl>
      <FormControl id="category" isRequired>
      <FormLabel>Category</FormLabel>
      <Select name="category" value={product.category} onChange={handleInputChange}>
        <option value="men">Men</option>
        <option value="women">Women</option>
        <option value="kid">Kid</option>
      </Select>
      </FormControl>
      <FormControl id="title" isRequired>
        <FormLabel>Product Title</FormLabel>
        <Input type="text" name="title" value={product.title} onChange={handleInputChange} />
      </FormControl>
      <FormControl id="discountPrice" isRequired>
        <FormLabel>Discount Price</FormLabel>
        <Input type="text" name="discountPrice" value={product.discountPrice} onChange={handleInputChange} />
      </FormControl>
      <FormControl id="originalPrice" isRequired>
        <FormLabel>Original Price</FormLabel>
        <Input type="text" name="originalPrice" value={product.originalPrice} onChange={handleInputChange} />
      </FormControl>
      <FormControl id="discount" isRequired>
        <FormLabel>Discount</FormLabel>
        <Input type="text" name="discount" value={product.discount} onChange={handleInputChange} />
      </FormControl>
      <FormControl id="offer" isRequired>
        <FormLabel>Offer</FormLabel>
        <Input type="text" name="offer" value={product.offer} onChange={handleInputChange} />
      </FormControl>
      <FormControl id="genre" isRequired>
        <FormLabel>Genre</FormLabel>
        <Input type="text" name="genre" value={product.genre} onChange={handleInputChange} />
      </FormControl>
      <FormControl id="rating" isRequired>
        <FormLabel>Rating</FormLabel>
        <Input type="text" name="rating" value={product.rating} onChange={handleInputChange} />
      </FormControl>
      <Button type="submit" mt={4} colorScheme="teal">
        Submit
      </Button>
      {showAlert && (
  <div style={{ position: 'fixed', top: 0, left: '50%', transform: 'translateX(-50%)' }}>
    <Alert status="success" mt={4}>
      <AlertIcon />
      Product added successfully!
    </Alert>
  </div>
)}
    </form>
    </Box>
      </AdminSidebar>
    );
  }
  
  export default AddProducts;