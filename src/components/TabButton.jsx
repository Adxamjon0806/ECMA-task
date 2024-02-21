import React from "react";
import x from "../assets/x.png";

const TabButton = ({ tabName, clikcedState, numberOfTab }) => {
  const { clikced, setClikced } = clikcedState;
  return (
    <button
      className={`leftDiv__btn ${
        clikced === numberOfTab ? "leftDiv__btn__light" : ""
      } ${clikced - numberOfTab === 1 ? "light_1" : ""}`}
      onClick={() => setClikced(numberOfTab)}
    >
      <p>{tabName}</p>
      <img src={x} alt="x" />
    </button>
  );
};

export default TabButton;
