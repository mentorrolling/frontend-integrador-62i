import React from "react";
import { Routes, Route } from "react-router-dom";

import HomeScreen from "../views/HomeScreen";
import AdminScreen from "../views/AdminScreen";

const RouterPrincipal = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/admin" element={<AdminScreen />} />
    </Routes>
  );
};

export default RouterPrincipal;
