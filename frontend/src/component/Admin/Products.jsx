import React, { useEffect, useState } from 'react'
import {
    Box,
    Heading,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Button,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Select,
    Flex,
  } from "@chakra-ui/react";
import axios from 'axios';


const Products = () => {
  const [data,setData] =useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState({
    brand: '',
    price: '',
    nameCls: '',
    src: '',
  });
  const [selectedProduct, setSelectedProduct] = useState(null);
  const productsPerPage = 10;
  const totalPages = data.length > 0 ? Math.ceil(data.length / productsPerPage) : 0;

// ------POST REQUEST-----------//
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formDataObject = Object.fromEntries(new FormData(event.target));
    const json = {
    brand: formData.brand,
    price: formData.price,
    nameCls: formData.nameCls,
    src: formData.src,
  };
  
    try {
      if (selectedProduct) {
        const response = await axios.patch(
          `https://magnificent-bass-suit.cyclic.app/mens${selectedProduct.id}`,
          json
        );
        const updatedProduct = response.data;
        setData((prevData) =>
          prevData.map((product) => (product.id === updatedProduct.id ? updatedProduct : product))
        );
      } else {
        const response = await axios.post('https://magnificent-bass-suit.cyclic.app/mens', formDataObject);
        const newProduct = response.data;
        setData((prevData) => [...prevData, newProduct]);
      }
      setFormData({
        brand: '',
        price: '',
        nameCls: '',
        src: '',
      });
      setSelectedProduct(null);
    } catch (error) {
      console.log(error);
    }
  };
  // ----------DELETE REQUEST------------//
  const handleDelete = async (productId) => {
    try {
      const response = await axios.delete(`https://magnificent-bass-suit.cyclic.app/mens/${productId}`);
      console.log(response.data);
      const updatedData = data.filter((product) => product.id !== productId);
      setData(updatedData);
    } catch (error) {
      console.log(error);
    }
  };
  // ---------------GET REQUEST--------------//
  const getData=async()=>{
   let res=await axios.get("https://magnificent-bass-suit.cyclic.app/mens")
  setData(res.data)
  }

useEffect(()=>{
  getData()
},[data])


// --------------PAGINATION-------------------//
const handlePageClick = (pageNumber) => {
  if (pageNumber > 0 && pageNumber <= totalPages) {
    setCurrentPage(pageNumber);
  }
};
const handleEditClick = (product) => {
  setFormData({
    brand: product.brand,
    price: product.price,
    nameCls: product.nameCls,
    src: product.src,
  });
  setSelectedProduct(product);
};

  const renderProducts = () => {
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const currentProducts = data.slice(startIndex, endIndex);

    return currentProducts.map((product) => (
      <Tr key={product.id}>
        <Td>{product.brand}</Td>
        <Td>
          <img width={80} src={product.src} alt="" />
        </Td>
        <Td>{product.nameCls}</Td>
        <Td>{product.price}</Td>
        <Td>
          <Button colorScheme="yellow" mr={2} onClick={() =>handleEditClick(product)}>
            Edit
          </Button>
          <Button colorScheme="red"  onClick={() => handleDelete(product.id)}>Delete</Button>
        </Td>
      </Tr>
    ));
  };
  const renderPageNumbers = () => {
  
    return (
      <>
        <Button onClick={() => handlePageClick(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </Button>
        <Button onClick={() => handlePageClick(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </Button>
      </>
    );
  };
  return (
    <div style={{marginTop:"100px",textAlign:"center"}}>
         <Flex direction="row" mt={8} alignItems="flex-start">
    <Box p={4} flex="1">

      <Box p={4}>
      <Heading as="h2" size="lg" mb={4}>
        Add New Product
      </Heading>

      <Box
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p={4}
        boxShadow="md"
        width={400}
      >
        <form onSubmit={handleSubmit}>
          <FormControl mt={4}>
            <FormLabel>Title</FormLabel>
            <Input type="text" name="brand" defaultValue={selectedProduct? selectedProduct.brand : formData.brand} onChange={handleInputChange} />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Price</FormLabel>
            <Input type="number" name="price" defaultValue={selectedProduct? selectedProduct.price :formData.price} onChange={handleInputChange} />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Category</FormLabel>
            <Select placeholder="Select an option">
        <option value="option1">mens</option>
        <option value="option2">womens</option>
        <option value="option3">kids</option>
      </Select>
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Description</FormLabel>
            <Textarea name="nameCls" defaultValue={selectedProduct? selectedProduct.nameCls :formData.nameCls} onChange={handleInputChange} />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Image URL</FormLabel>
            <Input type="text" name="src" defaultValue={selectedProduct? selectedProduct.src :formData.src} onChange={handleInputChange} />
          </FormControl>

          <Button type="submit" colorScheme="blue" mt={4}>
            Submit
          </Button>
        </form>
      </Box>
    </Box>
    </Box>
       
       <Box>
       <Box p={4}>
      <Heading as="h2" size="lg" mb={4}>
        Product List
      </Heading>
      </Box>
       <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Image</Th>
            <Th>Description</Th>
            <Th>Price</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>{renderProducts()}</Tbody>
      </Table>
      <Box mt={4}>
        {renderPageNumbers()}
      </Box>
      </Box>
    </Flex>
    </div>
  )
}

export default Products
