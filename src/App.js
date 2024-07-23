import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Headphones from "./Pages/Headphones/Headphones";
import Earphones from "./Pages/Earphones/Earphones";
import Speakers from "./Pages/Speakers/Speakers";
import Display from "./Components/Display";
import Footer from "./Components/Footer";
import CheckoutPage from "./Pages/Checkout/checkout";
import { useDispatch } from "react-redux";
import { addItem, clearCart } from "./Redux/CartSlice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearCart());

    const dataaaString = localStorage.getItem("cart_data");

    if (dataaaString) {
      const dataaa = JSON.parse(dataaaString);
      dataaa.forEach((value) => {
        dispatch(addItem(value));
      });
    }
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:type" element={<Display />} />
        <Route path="/headphones/:id" element={<Headphones />} />
        <Route path="/speakers/:id" element={<Speakers />} />
        <Route path="/earphones/:id" element={<Earphones />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
