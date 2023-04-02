// import React from 'react'
// import "./Card.css"
// import { useNavigate } from 'react-router-dom'

// const Card = ({ id, src, brand, nameCls, price, discount, offer }) => {
//     const navigate = useNavigate()

//     const product = { id, src, brand, nameCls, price, discount, offer }
    

//     const handleDetail = () => {
//         navigate("/siglecard")
//         localStorage.setItem("ProductsDetails", JSON.stringify(product))

//     }
//     return (
//         <div onClick={handleDetail} className='card-cont'>
//             <div className='img-div'>
//                 <img src={src} alt="" />
//             </div>
//             <div className='card-content-wrap'>
//                 <div className="card-content">
//                     <div>{brand}</div>
//                     <div>{nameCls}</div>
//                     <div> {price}</div>
//                     <div>Offer price {offer} </div>
//                 </div>

//             </div>

//         </div>
//     )
// }

// export default Card