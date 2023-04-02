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
  Button,
} from "@chakra-ui/react";


const Orders = () => {

  return (
    <div style={{ backgroundImage: `url("https://media.istockphoto.com/id/494350434/vector/thin-shopping-retail-line-white-seamless-pattern.jpg?s=612x612&w=0&k=20&c=XZ5G1qrghaNlovv4kw5ZtHKPYYETR-LDqRAGafDs5LA=")`, padding: "100px" }}>


      <Box style={{ marginTop: "100px", textAlign: "center", backgroundColor: "white",border:"1px solid black" }}>
        <Heading as="h2" size="lg" mb={4}>
          Order Details
        </Heading>
        <Table style={{borderLeft:"none",borderRight:"none"}} >
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Description</Th>
              <Th>Image</Th>
              <Th>Price</Th>
              <Th>Quantity</Th>
              <Th>Payment</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>KG frendz</Td>
              <Td>Full Sleeves Slim Fit Shirt</Td>
              <Td><img width={60} src="https://assets.ajio.com/medias/sys_master/root/20230102/R0me/63b30ae3aeb269659c1e4f01/dennislingo_premium_attire_pink_full_sleeves_slim_fit_classic_shirt.jpg" alt="" /></Td>
              <Td>₹874</Td>
              <Td>2</Td>
              <Td>
                <Button colorScheme={"green"}>Successfull</Button>
              </Td>
            </Tr>
            <Tr>
              <Td>rio girls</Td>
              <Td>Floral Embroidered Flared</Td>
              <Td><img width={60} src="https://assets.ajio.com/medias/sys_master/root/20220906/xKbl/631764b8f997dd1f8de77ff5/rio_girls_green_polka-dot_print_pleated_culottes.jpg" alt="" /></Td>
              <Td>₹1247</Td>
              <Td>1</Td>
              <Td>
                <Button colorScheme={"green"}>Successfull</Button>
              </Td>
            </Tr>
            <Tr>
              <Td>Nike</Td>
              <Td>COURT VISION Lace-Up Sneakers</Td>
              <Td><img width={80} src="https://assets.ajio.com/medias/sys_master/root/20210824/wvPO/6123f1a0aeb269a2687a9e41/nike_white_court_vision_lace-up_sneakers.jpg" alt="" /></Td>
              <Td>₹2359</Td>
              <Td>1</Td>
              <Td>
                <Button colorScheme={"orange"}>Pending</Button>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </div>
  )
}

export default Orders