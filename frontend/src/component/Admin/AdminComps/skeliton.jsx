import { Box, Image, Text, Icon, Skeleton } from "@chakra-ui/react";
import React from "react";
import { Link} from "react-router-dom";
import { MdDelete } from "react-icons/md";
function AdminProductCardSkeleton({
  _id,
  linkCategory,
  category,
  brand,
  price,
  handleDelete,
}) {
  //Todo: To go to edit product page, _id is needed along with category , so i called 'linkCategory' and "category" as a prop here, linkCategory is the server path and category is just to get the reference of particular category so that i can filter accoridingly in edit product page

  const handleDeleteClick = (_id, linkCategory) => {
    handleDelete(_id, linkCategory);
    // console.log("hi", _id, linkCategory);
  };
  return (
    <Skeleton
      _hover={{ padding: "4px" }}
      boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px;"}
      cursor={"pointer"}
    >
      <Link to={`/store/${category}-${_id}`}>
        <Box>
          <Image
            src={
              "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/16407468/2021/12/28/fce7ca1e-01ec-4c12-a90f-c7b75abda0e01640669480687-Difference-of-Opinion-Men-Tshirts-4021640669480120-1.jpg"
            }
          />
        </Box>
      </Link>
      <Box textAlign={"left"} pl={{ lg: "5px" }}>
        <Text fontWeight={700}>{brand}</Text>
        <Text>{""}...</Text>
        <Box
          border={"1px solid re"}
          display={"flex"}
          gap={"12px"}
          alignItems={"center"}
        >
          <Text>Rs. {price}</Text>
          <Text fontSize={"12px"} textDecoration={"line-through"}>
            Rs.{price}
          </Text>
          <Text fontSize={"12px"} color={"green"}>
            {" "}
            ({price}%)
          </Text>
          <Icon
            as={MdDelete}
            onClick={() => handleDeleteClick(_id, linkCategory)}
          />
        </Box>
      </Box>
    </Skeleton>
  );
}

export default AdminProductCardSkeleton;
