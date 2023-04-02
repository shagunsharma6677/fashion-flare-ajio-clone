import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Box, Text, Flex, Heading } from '@chakra-ui/react';

const AdminPage = () => {
  return (
    <Box style={{backgroundImage: `url("https://media.istockphoto.com/id/494350434/vector/thin-shopping-retail-line-white-seamless-pattern.jpg?s=612x612&w=0&k=20&c=XZ5G1qrghaNlovv4kw5ZtHKPYYETR-LDqRAGafDs5LA=")` }}>
      <Flex direction="column" align="center" justify="center" h="100vh">
        <Box mb={6}>
          <Heading as="h1" size="3xl" textAlign="center" mb={3}>Welcome to Admin Dashboard</Heading>
          <Text textAlign="center" fontSize="xl" color="gray.500">Manage your FashionFlair store easily.</Text>
        </Box>
        <Stack direction={{ base: 'column', md: 'row' }} spacing={4} align="center">
          <Link to="/orders">
            <Button size="lg" colorScheme="green">Manage Orders</Button>
          </Link>
          <Link to="/customers">
            <Button size="lg" colorScheme="purple">Manage Customers</Button>
          </Link>
          <Link to="/products">
            <Button size="lg" colorScheme="pink">Manage Products</Button>
          </Link>
        </Stack>
      </Flex>
    </Box>
  );
};

export default AdminPage;
