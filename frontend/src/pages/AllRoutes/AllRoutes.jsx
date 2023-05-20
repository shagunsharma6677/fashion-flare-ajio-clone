import React from "react";
import Home from "../Home/Home";
import { Route, Routes } from "react-router-dom";
import Womens from "../Womens/Womens";
import Mens from "../Mens/Mens";
import Kids from "../Kids/Kids";
import SingleProduct from "../SingleProduct/SingleProduct";
import CartPage from "../CartPage/CartPage";
import Wishlist from "../Wishlist/Wishlist";
import PaymentsPage from "../../component/PaymentModel/PaymentsPage";
import Signup from "../login_signup/Signup";
import Login from "../login_signup/Login";
import Dashboard from "../Admin/AdminPages/Dashboard";
import Store from "../Admin/AdminPages/Store";
import AddProducts from "../Admin/AdminPages/AddProducts";
import Homeandkitchen from "../Kitchen/Homeandkitchen";
import PrivateRoute from "./PrivateRoute";
import AdminPage from "../AdminPage/AdminPage";
import StorePage from "../AdminPage/StorePage";

const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/women" element={<Womens />} />
                <Route path="/men" element={<Mens />} />
                <Route path="/kid" element={<Kids />} />
                <Route path="/kitchen" element={<Homeandkitchen />} />
                <Route path="/:category/:id" element={<SingleProduct />} />
                <Route path="/cart" element={<PrivateRoute><CartPage /></PrivateRoute>} />
                <Route path="/wishlist" element={<PrivateRoute><Wishlist /></PrivateRoute>  } />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                {/* <Route path="/dashboard" element={<Dashboard />}></Route> */}
                <Route path="/Dashboard" element={<AdminPage />}></Route>
                <Route path="/Store" element={<StorePage />}></Route>
                <Route path="/addProducts" element={<AddProducts />}></Route>
                {/* <Route path='/addProduct' element={<AddProducts />}></Route> */}
                {/* <Route path="/payment" element={<PaymentsPage />} /> */}
                {/* <Route path="/homeandkitchen" element={<Homeandkitchen />} /> */}
            </Routes>
        </div>
    );
};

export default AllRoutes;
