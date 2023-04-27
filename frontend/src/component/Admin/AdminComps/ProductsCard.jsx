import { Box, Image, Text, Icon } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { MdDelete, MdModeEdit } from "react-icons/md";
import BackdropExample from "../AdminPages/EditModal";
function Product_card_store({
  _id,
  linkCategory,
  category,
  brand,
  src,
  title,
  orginalPrice,
  discountPrice,
  handleDelete,
  rating,
  discount,
}) {
  //Todo: To go to edit product page, _id is needed along with category , so i called 'linkCategory' and "category" as a prop here, linkCategory is the server path and category is just to get the reference of particular category so that i can filter accoridingly in edit product page

  const handleDeleteClick = (_id, linkCategory) => {
    handleDelete(_id, linkCategory);
  };
  // console.log("hi", _id, linkCategory);

  return (
    <Box boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px;"} cursor={"pointer"}>
      <Link to={`/store/${category}-${_id}`}>
        <Box>
          <Image _hover={{ padding: "4px" }} src={src} />
        </Box>
      </Link>
      <Box textAlign={"left"} pl={{ lg: "5px" }}>
        <Text fontWeight={700}>{brand}</Text>
        <Text>{title}...</Text>
        <Box
          border={"1px solid re"}
          display={"flex"}
          gap={"12px"}
          alignItems={"center"}
        >
          <Text>Rs. {discountPrice}</Text>
          <Text fontSize={"12px"} textDecoration={"line-through"}>
            Rs.{orginalPrice}
          </Text>
          <Text fontSize={"12px"} color={"green"}>
            {" "}
            ({discount}%)
          </Text>
          <Icon
            as={MdDelete}
            onClick={() => handleDeleteClick(_id, linkCategory)}
          />
          {/* <Icon as={MdModeEdit} onClick={onClick} /> */}
          <BackdropExample
            _id={_id}
            title={title}
            brand={brand}
            desc={discount}
            mrpPrice={orginalPrice}
            SpecialPrice={discountPrice}
            productImages={src}
            productrating={rating}
            productId={_id}
            productDiscount={discount}
            linkCategory={linkCategory}
          />
          {/* onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}
      >
        
      </Icon> */}
        </Box>
      </Box>
    </Box>
  );
}

export default Product_card_store;