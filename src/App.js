import React, { Children, useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Dashboard from "./components/BrainerHub login and validations/Dashboard";
import Login from "./components/BrainerHub login and validations/Login";
import Header from "./components/BrainerHub login and validations/Header";
import BlankLayout from "./components/BrainerHub login and validations/blank/BlankLayout";
import FullLayout from "./components/BrainerHub login and validations/full/FullLayout";
import PageNotFound from "./components/BrainerHub login and validations/pageNotFound/PageNotFound";

const ProtectedRoute = ({ children, isLogged }) => {
  return isLogged ? children : <Navigate to="/" />;
};

const App = () => {
  const [isLogged, setLogged] = React.useState(false);
  return (
    <>
      <Routes>
        <Route path="/*" element={<BlankLayout setLogged={setLogged} />} />
        <Route
          path="/secured/*"
          element={
            <ProtectedRoute isLogged={isLogged}>
              <FullLayout  />
            </ProtectedRoute>
          }
        />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;
