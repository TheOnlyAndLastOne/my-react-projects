import React from "react";
import { Route, Routes } from "react-router-dom";
import GlobalPage from "./GlobalPage";
import PageOne from "./page1/PageOne";
import PageTwo from "./page2/PageTwo";
import ReduxBase from "./page2/redux/ReduxBase";
import ThreePage from "./page2/threejs/ThreePage";
import FramerBase from "./page2/framer/FramerBase";
import Web3jPage from "./page2/web3js/Web3jPage";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<GlobalPage />} />
        <Route path="pageOne" element={<PageOne />} />
        <Route path="pageTwo" element={<PageTwo />}>
          <Route path="framer" element={<FramerBase />} />
          <Route path="redux" element={<ReduxBase />} />
          <Route path="three" element={<ThreePage />} />
          <Route path="web3j" element={<Web3jPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
