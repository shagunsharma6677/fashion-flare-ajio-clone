import React from "react";
import "./Card.css";
import { Link, useNavigate } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import ReactStars from "react-rating-stars-component";

export const Card = ({
  _id,
  src,
  brand,
  title,
  category,
  rating,
  orginalPrice,
  discountPrice,
  discount,
  offer,
}) => {
  const navigate = useNavigate();
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

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
              <div>
                {discountPrice.includes("₹")
                  ? discountPrice
                  : `₹${discountPrice}`}{" "}
                <span style={{ textDecoration: "line-through" }}>
                  {orginalPrice.includes("₹")
                    ? orginalPrice
                    : `₹${orginalPrice}`}{" "}
                </span>{" "}
              </div>
              <div>
                Get it at {offer} {discount}
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={24}
                  value={Number(rating)}
                  activeColor="#ffd700"
                />
              </div>
            </div>
          </div>
        </div>
      </Box>
    </Link>
  );
};
