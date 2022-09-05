import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "../screens/HomeScreen";

export default function routes() {
  return (
    <div>
      <Routes>
        <Route path="/hello" element={<HomeScreen />} />
      </Routes>
    </div>
  );
}
