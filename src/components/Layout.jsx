import React from "react";
import Navbar from "./Navbar";
import Tabs from "./Tabs";
import Specializations from "./Specializations";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddOrEdit from "./AddOrEdit";

const Layout = ({ children }) => {
  return (
    <section className="page__section">
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
    </section>
  );
};

export default Layout;
