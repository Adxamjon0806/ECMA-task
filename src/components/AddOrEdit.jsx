import React, { useState } from "react";
import { useCourses } from "../context/coursesContext";
import RightModules from "./RightModules";
import filled from "../assets/Filled.png";
import dots_6 from "../assets/dots_6.png";
import trash_delete from "../assets/trash-delete-bin-2.png";
import { useNavigate } from "react-router-dom";

const AddOrEdit = () => {
  const { modules, courses, setCourses, action, setAction } = useCourses();
  const [isDegree, setIsDegree] = useState(action.Info ? action.Info : false);
  const [isActive, setIsActive] = useState(
    action.Status ? action.Status : false
  );
  const [modulesAdd, setModulesAdd] = useState(
    action.modules ? action.modules : []
  );
  const [specialization, setSpecialization] = useState(
    action.Specialization ? action.Specialization : ""
  );
  const [description, setDescription] = useState(
    action.description ? action.description : ""
  );
  const navigate = useNavigate();
  console.log(action);

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
    setAction(false);
    navigate("/");
  }

  function save() {
    const course = {
      id: courses.length + 1,
      Specialization: specialization,
      Info: isDegree,
      Status: isActive,
      description,
      modules: modulesAdd,
    };
    if (action) {
      const editedArray = courses;
      course.id = action.id;
      for (let i = 0; i < courses.length; i++) {
        const element = courses[i];
        if (element.id === course.id) {
          editedArray[i] = course;
        }
      }
      setCourses(editedArray);
      clearAll();
      setAction(false);
      navigate("/");
    } else {
      setCourses((prew) => [...prew, course]);
      clearAll();
      navigate("/");
    }
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
            return (
              <RightModules
                key={course.id}
                course={course}
                isIn={isIn}
                modulesAdd={modulesAdd}
                setModulesAdd={setModulesAdd}
              />
            );
          })}
        </div>
      </section>
      <hr />
      <div className="addOrEdit__Chekkers">
        <button className="btn btn_checker">
          {isDegree ? (
            <input
              type="checkbox"
              value={isDegree}
              onChange={() => setIsDegree(!isDegree)}
              checked
            />
          ) : (
            <input
              type="checkbox"
              value={isDegree}
              onChange={() => setIsDegree(!isDegree)}
            />
          )}
          <p className="check_p">{!isDegree && "No"} Degree</p>
          <img src={filled} alt="filled icon" />
        </button>
        <button className="btn btn_checker">
          {isActive ? (
            <input
              type="checkbox"
              value={isActive}
              onChange={() => setIsActive(!isActive)}
              checked
            />
          ) : (
            <input
              type="checkbox"
              value={isActive}
              onChange={() => setIsActive(!isActive)}
            />
          )}
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
