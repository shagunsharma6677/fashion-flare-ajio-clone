import React from 'react'
import Home from '../Home/Home'
import { Route, Routes } from 'react-router-dom'
import Womens from '../Womens/Womens'
import Mens from '../Mens/Mens'
import Kids from '../Kids/Kids'
import SingleProduct from '../SingleProduct/SingleProduct'
import CartPage from '../CartPage/CartPage'
import Wishlist from '../Wishlist/Wishlist'
import PaymentsPage from '../../component/PaymentModel/PaymentsPage'

const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/women" element={<Womens />} />
                <Route path="/men" element={<Mens />} />
                <Route path="/kid" element={<Kids />} />
                <Route path="/:category/:id" element={<SingleProduct />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/wishlist" element={<Wishlist />} />
                {/* <Route path='/signup' element={<Signup />} /> */}
                {/* <Route path='/login' element={<Login />} /> */}
                {/* <Route path='/dashboard' element={<Dashboard />}></Route> */}
                {/* <Route path='/store' element={<Store />}></Route> */}
                {/* <Route path='/addProduct' element={<AddProducts />}></Route> */}

               
                {/* <Route path="/payment" element={<PaymentsPage />} /> */}
                {/* <Route path="/homeandkitchen" element={<Homeandkitchen />} /> */}
            </Routes>
        </div>
    )
}

export default AllRoutes