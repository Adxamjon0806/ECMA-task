import React, { useState } from "react";
import { useCourses } from "../context/coursesContext";
import RightModules from "./RightModules";
import { Link } from "react-router-dom";
import filled from "../assets/Filled.png";
import dots_6 from "../assets/dots_6.png";
import trash_delete from "../assets/trash-delete-bin-2.png";

const AddOrEdit = () => {
  const { modules } = useCourses();
  const [modulesAdd, setModulesAdd] = useState([]);
  const [isDegree, setIsDegree] = useState(false);
  const [isActive, setIsActive] = useState(false);

  function deleteItem(module) {
    const findIndex = modulesAdd.indexOf(module);
    console.log(findIndex);
    modulesAdd.splice(findIndex, 1);
    setModulesAdd([...modulesAdd]);
  }

  console.log(modulesAdd);

  return (
    <>
      <section className="specializations add_sec">
        <div className="right_div addOrEdit left">
          <label htmlFor="">Specialization</label>
          <input type="text" />
          <label htmlFor="">Description</label>
          <input type="text" className="desc_input" />
          <hr />
          <div className="modules_list">
            {modulesAdd.map((module) => (
              <div className="addOrEdit_modules">
                <div className="modules_dot_module">
                  <img src={dots_6} alt="6 dots" />
                  <p>{module}</p>
                </div>
                <button className="btn" onClick={() => deleteItem()}>
                  <img src={trash_delete} alt="delte icon" />
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="left_div addOrEdit right">
          {modules.map((course, i) => (
            <RightModules
              key={i}
              course={course}
              modulesAdd={modulesAdd}
              setModulesAdd={setModulesAdd}
            />
          ))}
        </div>
      </section>
      <hr />
      <div className="addOrEdit__Chekkers">
        <button className="btn btn_checker">
          <input
            type="checkbox"
            value={isDegree}
            onChange={() => setIsDegree(!isDegree)}
          />
          <p className="check_p">{isDegree && "No"} Degree</p>
          <img src={filled} alt="filled icon" />
        </button>
        <button className="btn btn_checker">
          <input
            type="checkbox"
            value={isActive}
            onChange={() => setIsActive(!isActive)}
          />
          <p className="check_p">Active</p>
          <img src={filled} alt="filled icon" />
        </button>
        <Link to={"/"} className="btn btn_cancel">
          Cancel
        </Link>
        <button className="btn btn_save">Save</button>
      </div>
    </>
  );
};

export default AddOrEdit;
