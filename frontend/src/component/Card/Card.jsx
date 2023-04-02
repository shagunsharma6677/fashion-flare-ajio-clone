import React from "react";
import "./Card.css";
import { Link, useNavigate } from "react-router-dom";

export const Card = ({
  _id,
  src,
  brand,
  title,
  category,
  originalPrice,
  discountPrice,
  offer,
}) => {
  return (
    <Link to={`/${category}/${_id}`}>
      <div className="card-cont">
        <div className="img-div">
          <img src={src} alt="" />
        </div>
        <div className="card-content-wrap">
          <div className="card-content">
            <div>{brand}</div>
            <div>{title}</div>
            <div> {originalPrice}</div>
            <div>Offer price {offer} </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
