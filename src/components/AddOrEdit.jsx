import React, { useState } from "react";

const AddOrEdit = () => {
  const [modulesAdd, setModulesAdd] = useState([]);
  const [isDegree, setIsDegree] = useState(false);
  const [isActice, setIsActive] = useState(false);
  return (
    <>
      <section className="specializations add_sec">
        <div className="right_div addOrEdit left">
          <label htmlFor="">Specialization</label>
          <input type="text" />
          <label htmlFor="">Description</label>
          <input type="text" className="desc_input" />
          <hr />
        </div>
        <div className="left_div addOrEdit right">
          <div className="right_modules">Java Development</div>
          <div className="right_modules">Flutter</div>
          <div className="right_modules"></div>
          <div className="right_modules"></div>
          <div className="right_modules"></div>
          <div className="right_modules"></div>
          <div className="right_modules"></div>
          <div className="right_modules"></div>
          <div className="right_modules"></div>
          <div className="right_modules"></div>
          <div className="right_modules"></div>
          <div className="right_modules"></div>
          <div className="right_modules"></div>
          <div className="right_modules"></div>
          <div className="right_modules"></div>
          <div className="right_modules"></div>
          <div className="right_modules"></div>
          <div className="right_modules"></div>
          <div className="right_modules"></div>
          <div className="right_modules"></div>
          <div className="right_modules"></div>
        </div>
      </section>
      <hr />
      <div className="addOrEdit__Chekkers">
        <button className="btn" onClick={() => setIsDegree(!isDegree)}>
          <input
            type="checkbox"
            value={isDegree}
            onChange={() => setIsDegree(!isDegree)}
          />
        </button>
        <button className="btn" onClick={() => setIsActive(!isActice)}>
          <input
            type="checkbox"
            value={isActice}
            onChange={() => setIsActive(!isActice)}
          />
        </button>
        <button className="btn"></button>
        <button className="btn"></button>
      </div>
    </>
  );
};

export default AddOrEdit;
