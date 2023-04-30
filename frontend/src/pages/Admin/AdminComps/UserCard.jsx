import { Td, Tr } from "@chakra-ui/react";
import React from "react";

function UserCard({index,name,email,password,_id,handleDelete}) {
 
    return (
    <Tr>
      <Td>{index+1}</Td>
      <Td>{name}</Td>
      <Td>{email}</Td>
      <Td>{password}</Td>
      <Td cursor={"pointer"} onClick={()=>handleDelete(_id)} >Delete</Td>
    </Tr>
  );
}

export default UserCard;