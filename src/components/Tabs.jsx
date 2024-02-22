import React, { useState } from "react";
import TabButton from "./TabButton";
import user from "../assets/user.png";
import search from "../assets/search.png";
import arrow from "../assets/Arrow.png";
import { Link } from "react-router-dom";

const Tabs = () => {
  const [clikced, setClikced] = useState(7);
  return (
    <div className="tabs">
      <div className="tabs__buttons">
        <div className="tabs__leftDiv">
          <TabButton
            numberOfTab={1}
            clikcedState={{ clikced, setClikced }}
            tabName={"Lessons"}
          />
          <TabButton
            numberOfTab={2}
            clikcedState={{ clikced, setClikced }}
            tabName={"Timetable"}
          />
          <TabButton
            numberOfTab={3}
            clikcedState={{ clikced, setClikced }}
            tabName={"Add Course"}
          />
          <TabButton
            numberOfTab={4}
            clikcedState={{ clikced, setClikced }}
            tabName={"Add Group"}
          />
          <TabButton
            numberOfTab={5}
            clikcedState={{ clikced, setClikced }}
            tabName={"Specialization"}
          />
          <TabButton
            numberOfTab={6}
            clikcedState={{ clikced, setClikced }}
            tabName={"Leads"}
          />
          <TabButton
            numberOfTab={7}
            clikcedState={{ clikced, setClikced }}
            tabName={"HRM"}
          />
        </div>
        <button className="tabs__userBtn">
          <img src={user} alt="user icon" />
          <p>USER</p>
        </button>
      </div>
      <div className="tabs__search">
        <div className="tabs__search__input">
          <img src={search} className="search__icon" alt="search icon" />
          <input type="text" placeholder="Search..." />
          <img src={arrow} className="arrow__icon" alt="arrow icon" />
        </div>
        <div className="tabs__search__buttons">
          <Link to={"/addOrEdit"} className="add_Specialization">
            + add Specialization
          </Link>
          <button className="four__divs__btn">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </button>
          <button className="two__divs__btn">
            <div></div>
            <div></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
