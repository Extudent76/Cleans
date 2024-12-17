// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Lending from "./Lending";
import Register from "./Register";
import ForgotPassword from "./ForgotPassword";
import ServicesPage from "./ServicesPage";
import CartPage from "./CartPage";
import UserPage from "./UserPage2";
import { Header } from "./Header";

const App: React.FC = () => {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Lending />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/service" element={<ServicesPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/user" element={<UserPage />} />
      </Routes>
    </Router>
  );
};

export default App;
