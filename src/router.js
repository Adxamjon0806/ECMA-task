import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Specializations from "./components/Specializations";
import AddOrEdit from "./components/AddOrEdit";
import Tabs from "./components/Tabs";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <section className="table__section">
        <Tabs />
        <Routes>
          <Route path="/" element={<Specializations />} />
          <Route path="/addOrEdit" element={<AddOrEdit />} />
        </Routes>
      </section>
    </BrowserRouter>
  );
};

export default Router;
