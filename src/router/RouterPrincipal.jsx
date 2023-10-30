import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "../views/HomeScreen";

const RouterPrincipal = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
    </Routes>
  );
};

export default RouterPrincipal;
