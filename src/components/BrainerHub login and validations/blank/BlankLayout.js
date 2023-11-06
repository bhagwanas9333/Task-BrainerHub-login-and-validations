import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home";
import Login from "../Login";
import About from "../About";
import Header from "../Header";
import Menus from "../Menus";
import Cart from "../Cart";

const BlankLayout = ({ setLogged }) => {
  return (
    <>
      <Header setLogged={setLogged} />
      <Routes>
        <Route  path="" element={<Home />} />
        <Route path="menus" element={<Menus />} />
        <Route path="login" element={<Login setLogged={setLogged} />} />
        <Route path="cart" element={<Cart />} />

        <Route path="about" element={<About />} />
      </Routes>
    </>
  );
};

export default BlankLayout;
