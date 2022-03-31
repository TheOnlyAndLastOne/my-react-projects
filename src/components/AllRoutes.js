import React from "react";
import {Route, Routes } from "react-router-dom";
import App from "../App";
import GlobalPage from "./GlobalPage";
import PageOne from "./page1/PageOne";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<GlobalPage />} />
        <Route path="/pageOne" element={<PageOne />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
