import React from "react";
import "./Card.css";
import { Link, useNavigate } from "react-router-dom";
import { Box } from "@chakra-ui/react";

export const Card = ({ _id, src, brand, title, category, orginalPrice, discountPrice, discount, offer, }) => {
  const navigate = useNavigate()

  return (
    <Link to={`./${_id}`}>
      <Box>
        <div className="card-cont">
          <div className="img-div">
            <img src={src} alt={brand} />
          </div>
          <div className="card-content-wrap">
            <div className="card-content">
              <div>{brand}</div>
              <div>{title}</div>
              <div>{discountPrice.includes("₹") ? discountPrice : `₹${discountPrice}`} <span style={{ textDecoration: "line-through" }}>{orginalPrice.includes("₹") ? orginalPrice : `₹${orginalPrice}`} </span> </div>
              <div>Get it at {offer} {discount}</div>
            </div>
          </div>
        </div>
      </Box>
    </Link>
  );
};
