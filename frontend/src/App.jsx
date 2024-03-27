import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <ToastContainer />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/cart" exact element={<Cart />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
