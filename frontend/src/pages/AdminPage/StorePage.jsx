import React, { useEffect, useState } from "react";
import Sidebar from "./SidebarComp";
import "../Mens/Mens.css";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  // Drawer,
  // DrawerOverlay,
  // DrawerContent,
  // DrawerHeader,
  // DrawerBody,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Divider,
  useDisclosure,
} from "@chakra-ui/react";
import "./store.css";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../../redux/Admin/action";
import axios from "axios";
import { Card } from "../../component/Card/Card";
import { Loader } from "../../component/Loader/Loader";

const StorePage = () => {
  const [store, setStore] = React.useState([]);
  const [editable, setEditable] = React.useState({});
  const getAdminData = async () => {
    const allProduct = await axios.get("http://localhost:4000/product");
    // console.log("alladminProd", allProduct.data);
    setStore(allProduct.data);
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const handleEdit = (payload) => {
    setEditable(payload);
    console.log(payload);
    onOpen();
  };

  const handleSave = async () => {
    try {
      const { _id, payload } = editable;
      const response = await axios.put(
        `http://localhost:4000/product/update/${_id}`,
        editable
      );
      console.log("patch", response.data);
      getAdminData();
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async ({ _id }) => {
    try {
      const response = await axios.delete(
        `http://localhost:4000/product/delete/${_id}`
      );
      console.log("delete", response.data);
      getAdminData();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAdminData()
  }, []);
  // console.log("store", store);

  return (
    <Sidebar heading={"Store"}>
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
              <BreadcrumbLink href="#">Store</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
      </Box>

      <Box border={"1px solid blu"}>
        <Box>
          <Box
            display={{ base: "grid", sm: "flex" }}
            gap="10px"
            justifyContent="space-around"
            padding="10px"
            bg={"white"}
          >
            <div>
              <h6>{"1000"} Items Found</h6>
            </div>

            <div>
              <label htmlFor="sort-select">Page</label>
              <select onChange={""} id="sort-select">
                <option value="">Select Price</option>

                {Array(5)
                  ?.fill()
                  .map((item, index) => (
                    <option value={index + 1}>{index + 1}</option>
                  ))}
              </select>
            </div>
            <div>
              <label htmlFor="sort-select">Sort by Category:</label>
              <select onChange={""} id="sort-select">
                <option value="All">All</option>
                <option value="">Mens</option>
                <option value="discountPrice">Womens</option>
                <option value="rating">Kids</option>
              </select>
            </div>

            <div>
              <label htmlFor="sort-select">Sort by Order:</label>
              <select onChange={""} id="sortOrder-select">
                <option value="">Select Price</option>
                <option value="dsc">Price High to Low</option>
                <option value="asc">Price Low to High</option>
              </select>
            </div>
          </Box>
        </Box>
        <Box
          className="women-content"
          style={{
            display: "grid",
            gap: "15px",
            justifyContent: "space-around",
            padding: "5px",
            border: "1px solid rgb(240,240,240)",
            borderTop: "none",
          }}
          bg={"white"}
          marginTop={"20px"}
          gridTemplateColumns={{
            sm: "repeat(2, 1fr)",
            md: "repeat(2, 1fr) ",
            lg: "repeat(3, 1fr) ",
            xl: "repeat(4, 1fr) ",
          }}
        >
          {store ? (
            store?.map((item) => {
              return (
                <>
                  <Box>
                    <div className="card-cont">
                      <div className="img-div">
                        <img src={item.src} alt={item.brand} />
                      </div>
                      <div className="card-content-wrap">
                        <div className="card-content">
                          <div>{item.brand}</div>
                          <div>{item.title}</div>
                          <div>{item.discountPrice}</div>
                          <div>
                            Get it at {item.offer} {item.discount}
                          </div>
                          <div
                            style={{
                              display: "flex",
                              gap: "10px",
                              justifyContent: "center",
                              marginTop: "15px",
                            }}
                          >
                            <Button
                              onClick={() => handleEdit(item)}
                              colorScheme="green"
                            >
                              Edit
                            </Button>
                            <Button
                              onClick={() => handleDelete(item)}
                              colorScheme="red"
                            >
                              Delete
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Box>
                </>
              );
            })
          ) : (
            <Loader />
          )}
        </Box>

        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />

          <ModalContent>
            <ModalHeader>Edit Product Details</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Title</FormLabel>
                <Input
                  value={editable.title}
                  onChange={(e) =>
                    setEditable({ ...editable, title: e.target.value })
                  }
                />
              </FormControl>
              <FormControl>
                <FormLabel>Brand</FormLabel>
                <Input
                  value={editable.brand}
                  onChange={(e) =>
                    setEditable({ ...editable, brand: e.target.value })
                  }
                />
              </FormControl>
              <FormControl>
                <FormLabel>Image</FormLabel>
                <Input
                  value={editable.src}
                  onChange={(e) =>
                    setEditable({ ...editable, src: e.target.value })
                  }
                />
              </FormControl>
              <FormControl>
                <FormLabel>Price</FormLabel>
                <Input
                  value={editable.discountPrice}
                  onChange={(e) =>
                    setEditable({ ...editable, discountPrice: e.target.value })
                  }
                />
              </FormControl>
              <FormControl>
                <FormLabel>Offer</FormLabel>
                <Input
                  value={editable.offer}
                  onChange={(e) =>
                    setEditable({ ...editable, offer: e.target.value })
                  }
                />
              </FormControl>
              {/* <Button onClick={""}>Update</Button> */}
            </ModalBody>

            <ModalFooter>
              <Button onClick={handleSave} colorScheme="blue" mr={3}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </Sidebar>
  );
};

export default StorePage;
