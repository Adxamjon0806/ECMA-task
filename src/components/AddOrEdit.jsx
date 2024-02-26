import React, { useState } from "react";
import { useCourses } from "../context/coursesContext";
import RightModules from "./RightModules";
import { Link } from "react-router-dom";
import filled from "../assets/Filled.png";
import dots_6 from "../assets/dots_6.png";
import trash_delete from "../assets/trash-delete-bin-2.png";

const AddOrEdit = () => {
  const { modules, modulesAdd, setModulesAdd } = useCourses();
  const [isDegree, setIsDegree] = useState(false);
  const [isActive, setIsActive] = useState(false);

  function deleteItem(module) {
    const filteredArr = modulesAdd.filter((el) => el.id !== module.id);
    setModulesAdd(filteredArr);
  }

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
              <div key={module} className="addOrEdit_modules">
                <div className="modules_dot_module">
                  <img src={dots_6} alt="6 dots" />
                  <p>{module.name}</p>
                </div>
                <button className="btn" onClick={() => deleteItem(module)}>
                  <img src={trash_delete} alt="delte icon" />
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="left_div addOrEdit right">
          {modules.map((course) => {
            const filtered = modulesAdd.filter((el) => el.id === course.id);
            const isIn = filtered.length === 1 ? true : false;
            return <RightModules key={course.id} course={course} isIn={isIn} />;
          })}
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
