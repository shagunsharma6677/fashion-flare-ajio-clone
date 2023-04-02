import React from 'react'
import "./Card.css"
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom"

const Card = ({ _id, src, brand, title,category, originalPrice, discountPrice, offer }) => {
 

    const product = { _id, src, brand, title,category, originalPrice, discountPrice, offer }


  

    return (
        <Link to={`/${_id}`}>
            <div className='card-cont'>
                <div className='img-div'>
                    <img src={src} alt="" />
                </div>
                <div className='card-content-wrap'>
                    <div className="card-content">
                        <div>{brand}</div>
                        <div>{title}</div>
                        <div> {originalPrice}</div>
                        <div>Offer price {offer}</div>
                    </div>

                </div>

            </div>
        </Link>

    )
}

export default Card