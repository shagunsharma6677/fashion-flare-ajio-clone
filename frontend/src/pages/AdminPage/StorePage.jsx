import React, { useEffect, useState } from "react";
import Sidebar from "./SidebarComp";
import "../Mens/Mens.css";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Divider,
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
  const getAdminData = async () => {
    const allProduct = await axios.get("http://localhost:4000/product");
    // console.log("alladminProd", allProduct.data);
    setStore(allProduct.data);
  };

  useEffect(() => {
    getAdminData();
  }, []);
  console.log("store", store);

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
                          style={{ display: "flex",gap:"10px",justifyContent:"center",marginTop:"15px" }}
                        >
                          <Button colorScheme="green">Edit</Button>
                          <Button colorScheme="red">Delete</Button>
                          {/* <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={24}
                            value={Number(rating)}
                            activeColor="#ffd700"
                          /> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </Box>
              );
            })
          ) : (
            <Loader />
          )}
        </Box>
      </Box>
    </Sidebar>
  );
};

export default StorePage;
