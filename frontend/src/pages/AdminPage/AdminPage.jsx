import React from "react";
import Sidebar from "./SidebarComp";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Image,
  Td,
  Table,
  TableContainer,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

const AdminPage = () => {
  return (
    <>
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
                <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </Box>
        </Box>
        <Box>
          <Box
            mt={"10px"}
            border={"1px solid re"}
            display={"grid"}
            gridTemplateColumns={{
              sm: "repeat(2, 1fr)",
              md: "repeat(2, 1fr) ",
              lg: "repeat(3, 1fr) ",
              xl: "repeat(4, 1fr) ",
            }}
            justifyContent={"space-between"}
            gap={"25px"}
          >
            <Box
              display={"flex"}
              boxShadow={
                "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;"
              }
              bg={"#fff"}
              border={"1px solid gre"}
              borderRadius={"15px"}
              p={"10px"}
            >
              <Box
                border={"1px solid blu"}
                display={"flex"}
                justifyContent={"center"}
                w={"55%"}
                boxSizing="border-box"
                p={"10px"}
              >
                <Image
                  w={"65%"}
                  src="https://www.canadianginsengfarm.com/wp-content/uploads/2018/03/Product-Icon.png"
                />
              </Box>
              <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent="center"
                alignItems={"center"}
              >
                <Text fontSize={"2xl"}>Total Products</Text>
                <Text fontSize={"2xl"}>
                  {/* {mens.length +
                  womens.length +
                  kids.length} */}
                </Text>
              </Box>
            </Box>
            <Box
              // w={"28%"}

              display={"flex"}
              boxShadow={
                "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;"
              }
              bg={"#fff"}
              border={"1px solid gre"}
              borderRadius={"15px"}
              p={"10px"}
            >
              <Box
                border={"1px solid blu"}
                display={"flex"}
                justifyContent={"center"}
                w={"55%"}
                boxSizing="border-box"
              >
                <Image
                  w={"65%"}
                  src="https://tse3.mm.bing.net/th?id=OIP.vimRlYxVLqkgJONW7V1jEgHaHK&pid=Api&P=0"
                />
              </Box>
              <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent="center"
                alignItems={"center"}
              >
                <Text fontSize={"2xl"}>Total Orders</Text>
                <Text fontSize={"2xl"}></Text>
              </Box>
            </Box>
            <Box
              // w={"28%"}

              display={"flex"}
              boxShadow={
                "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;"
              }
              bg={"#fff"}
              border={"1px solid gre"}
              borderRadius={"15px"}
              p={"10px"}
            >
              <Box
                border={"1px solid blu"}
                display={"flex"}
                justifyContent={"center"}
                w={"55%"}
                boxSizing="border-box"
              >
                <Image
                  w={"60%"}
                  src="https://www.citypng.com/public/uploads/preview/profile-user-round-red-icon-symbol-download-png-11639594337tco5j3n0ix.png"
                />
              </Box>
              <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent="center"
                alignItems={"center"}
              >
                <Text fontSize={"2xl"}>Total Users</Text>
                <Text fontSize={"2xl"}>{}</Text>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box>
          <Text my={"10px"} fontSize={"2xl"}>
            Users
          </Text>
        </Box>
        <Box bg={"white"} minH={"55vh"} border={"1px solid re"}>
          <TableContainer>
            <Table variant="striped" colorScheme="pink">
              <Thead>
                <Tr>
                  <Th>Sr. No</Th>
                  <Th>Name</Th>
                  <Th>Email</Th>
                  <Th>Password</Th>
                  <Th>Delete</Th>
                </Tr>
              </Thead>
              <Tbody>
                {/* {Users?.map((item, index) => {
                return (
                  <UserCard
                    key={item._id}
                    {...item}
                    // handleDelete={item._id}
                    handleDelete={handleDelete}
                    index={index}
                  />
                );
              })} */}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Sidebar>
    </>
  );
};

export default AdminPage;
