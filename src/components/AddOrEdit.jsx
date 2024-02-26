import React, { useState } from "react";
import { useCourses } from "../context/coursesContext";
import RightModules from "./RightModules";
import filled from "../assets/Filled.png";
import dots_6 from "../assets/dots_6.png";
import trash_delete from "../assets/trash-delete-bin-2.png";
import { useNavigate } from "react-router-dom";

const AddOrEdit = () => {
  const { modules, modulesAdd, setModulesAdd, setCourses } = useCourses();
  const [isDegree, setIsDegree] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [specialization, setSpecialization] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  function deleteItem(module) {
    const filteredArr = modulesAdd.filter((el) => el.id !== module.id);
    setModulesAdd(filteredArr);
  }

  function clearAll() {
    setSpecialization("");
    setDescription("");
    setModulesAdd([]);
  }

  function cancel() {
    clearAll();
    navigate("/");
  }

  function save() {
    const newCourse = {
      Specialization: specialization,
      Info: isDegree,
      Status: isActive,
      modules: modulesAdd,
    };
    setCourses((prew) => [...prew, newCourse]);
    clearAll();
    navigate("/");
  }

  return (
    <>
      <section className="specializations add_sec">
        <div className="right_div addOrEdit left">
          <label htmlFor="">Specialization</label>
          <input
            type="text"
            value={specialization}
            onChange={(e) => setSpecialization(e.target.value)}
          />
          <label htmlFor="">Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="desc_input"
          />
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
          <div className="clear_all">
            <button className="clear_all_btn" onClick={clearAll}>
              Clear all
            </button>
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
          <p className="check_p">{!isDegree && "No"} Degree</p>
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
        <button className="btn btn_cancel" onClick={cancel}>
          Cancel
        </button>
        <button className="btn btn_save" onClick={save}>
          Save
        </button>
      </div>
    </>
  );
};

export default AddOrEdit;
