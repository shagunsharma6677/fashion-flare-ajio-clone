import React from 'react'
import {
  Box,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import "./customers.css"

const Customers = () => {
  return (
    <div style={{ backgroundImage: `url("https://media.istockphoto.com/id/494350434/vector/thin-shopping-retail-line-white-seamless-pattern.jpg?s=612x612&w=0&k=20&c=XZ5G1qrghaNlovv4kw5ZtHKPYYETR-LDqRAGafDs5LA=")`, padding: "170px" }}>
      <Box style={{backgroundColor: "white", textAlign: "center", border: "1px solid black" }}>
        <Heading as="h2" size="lg" mb={4}>
          Customer Details
        </Heading>
        <Table style={{ borderLeft: "none", borderRight: "none" }}  >
          <Thead>
            <Tr>
              <Th>First-Name</Th>
              <Th>Last-Name</Th>
              <Th>E-mail</Th>
              <Th>Mobile</Th>
              <Th>Password</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>admin</Td>
              <Td>FashoinFlair</Td>
              <Td>admin@fashoinflair.com</Td>
              <Td>6362547890</Td>
              <Td>123456</Td>
            </Tr>
            <Tr>
              <Td>Shashank</Td>
              <Td>Bijapur</Td>
              <Td>shashankcbijapur24@gmail.com</Td>
              <Td>7483157274</Td>
              <Td>12345</Td>
            </Tr>
            <Tr>
              <Td>Ajay</Td>
              <Td>Dev</Td>
              <Td>devajay@gmail.com</Td>
              <Td>8105118043</Td>
              <Td>98456</Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>

    </div>
  )
}

export default Customers