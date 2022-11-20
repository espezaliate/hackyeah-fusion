import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Questionnaire from "../pages/Questionaire";
import CompanyTable from "../pages/Table";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/">
        <Route>
          <Route index path="/" element={<Home />} />
          <Route path="/table" element={<CompanyTable />} />
          <Route path="/questionnaire" element={<Questionnaire />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default Router;
