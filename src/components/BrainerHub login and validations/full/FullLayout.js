import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "../Cart";
import Dashboard from "../Dashboard";

const FullLayout = ({ setLogged }) => {
  return (
    <>
      <Routes>
        <Route path="dashboard" element={<Dashboard setLogged={setLogged} />} />
        {/* <Route path="cart" element={<Cart setLogged={setLogged} />} /> */}
      </Routes>
    </>
  );
};

export default FullLayout;
