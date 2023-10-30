import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "../views/HomeScreen";
import AboutScreen from "../views/AboutScreen";
const RouterPrimary = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/about" element={<AboutScreen />} />
    </Routes>
  );
};

export default RouterPrimary;
