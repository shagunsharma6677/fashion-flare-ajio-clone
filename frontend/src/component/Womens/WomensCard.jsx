import React from 'react'
import { useNavigate } from 'react-router-dom';
import './WomensCard.css'


const CardPage = ({ product, index }) => {
    const navigate = useNavigate()
    const handledata = () => {
        // console.log(product)
        navigate("/siglecard")
        localStorage.setItem("ProductsDetails", JSON.stringify(product))
    }
    return (
        <>

            <div className="women-card" onClick={handledata} style={{ textAlign: "center" }} key={index}>
                <img width={300} src={product.src} alt={product.brand} />
                <h5 style={{ color: "rgb(177, 153, 117)" }}>{product.brand}</h5>
                <h5 >{product.nameCls}</h5>
                <p style={{ padding: "10px", margin: "10px" }}>₹{product.price}
                    <span style={{ margin: "5px" }}>
                        ₹{product.orginalprice}
                    </span>
                    <span style={{ margin: "5px" }}>
                        ({product.discount} %Off)
                    </span>
                </p>
                <h5 style={{ color: "rgb(58,182,73)" }}>Offer Price ₹{product.offerpricess}</h5>
            </div>
        </>
    )
}

export default CardPage