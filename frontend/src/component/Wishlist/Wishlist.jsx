import React from 'react'
import { useSelector } from "react-redux"
import Card from "../Mens/Card"
import "./Wishlist.css"

const Wishlist = () => {
    // const dispatch = useDispatch()
    const wishlist = useSelector(store => store.wishlist)
    return (
        <div>
            <div style={{ margin: "auto", fontSize: "32px", fontWeight: "600", textAlign: "center", marginBotton: "20px" }}>My Wishlist</div>
            <div className='wishlist_cart' style={{ padding:"15px", marginLeft:"0px", width: "1200px", margin: "auto" }}>
                {wishlist?.map((item) => {
                    return <Card {...item} />
                })}
            </div>
        </div>
    )
}

export default Wishlist