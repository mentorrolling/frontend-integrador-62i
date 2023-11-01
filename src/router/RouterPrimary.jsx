import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "../views/HomeScreen";
import AboutScreen from "../views/AboutScreen";
import ErrorScreen from "../views/ErrorScreen";
import AdminScreen from "../views/AdminScreen";
const RouterPrimary = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/about" element={<AboutScreen />} />
      <Route path="/admin" element={<AdminScreen />} />
      <Route path="*" element={<ErrorScreen />} />
    </Routes>
  );
};

export default RouterPrimary;
