import React from "react";
import Navbar from "./Navbar";
import Tabs from "./Tabs";

const Layout = ({ children }) => {
  return (
    <section className="page__section">
      <Navbar />
      <section className="table__section">
        <Tabs />
      </section>
    </section>
  );
};

export default Layout;
