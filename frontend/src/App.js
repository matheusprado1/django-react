import { Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Categories from "./components/Categories";
import AllProducts from "./components/AllProducts";
import ProductDetail from "./components/ProductDetail";
import CategoryProducts from "./components/CategoryProducts";
import Checkout from "./components/Checkout";
import Register from "./components/Customer/Register";
import Login from "./components/Customer/Login";
import Dashboard from "./components/Customer/Dashboard";
import Orders from "./components/Customer/Orders";
import OrderSuccess from "./components/OrderSuccess";
import OrderFailure from "./components/OrderFailure";
import ChangePassword from "./components/Customer/ChangePassword";
import Profile from "./components/Customer/Profile";
import WishList from "./components/Customer/WishList";
import AddressList from "./components/Customer/AddressList";
import AddAddress from "./components/Customer/AddAddress";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<AllProducts />} />
        <Route exact path="/categories" element={<Categories />} />
        <Route exact path="/category/:category_slug/:category_id" element={<CategoryProducts />} />
        <Route exact path="/product/:product_slug/:product_id" element={<ProductDetail />} />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route exact path="/customer/register" element={<Register />} />
        <Route exact path="/customer/login" element={<Login />} />
        <Route exact path="/customer/dashboard" element={<Dashboard />} />
        <Route exact path="/customer/orders" element={<Orders />} />
        <Route exact path="/order/success" element={<OrderSuccess />} />
        <Route exact path="/order/failure" element={<OrderFailure />} />
        <Route exact path="/customer/wishlist" element={<WishList />} />
        <Route exact path="/customer/profile" element={<Profile />} />
        <Route exact path="/customer/change-password" element={<ChangePassword />} />
        <Route exact path="/customer/addresses" element={<AddressList />} />
        <Route exact path="/customer/add-address" element={<AddAddress />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
