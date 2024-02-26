import React from "react";
import { useCourses } from "../context/coursesContext";

const RightModules = ({ course, isIn }) => {
  const { modulesAdd, setModulesAdd } = useCourses();

  function clickModule() {
    if (!isIn) {
      setModulesAdd((prew) => [...prew, course]);
    } else {
      const filteredArr = modulesAdd.filter((el) => el.id !== course.id);
      setModulesAdd(filteredArr);
    }
  }

  return (
    <div className={`right_modules ${isIn && "right_modules_clicked"}`}>
      {course.name.length > 15
        ? `${course.name.substring(0, 14)}...`
        : course.name}
      <p className={`isActive_p ${!course.isActive && "isActive_p_false"}`}>
        {course.isActive ? "ACTIVE" : "INACTIVE"}
      </p>
      <button
        className={`right_modules_btn ${isIn && "right_modules_btn_clicked"}`}
        onClick={clickModule}
      >
        <p className={`modules_btn_p ${isIn && "modules_btn_p_rotated"}`}>+</p>
      </button>
    </div>
  );
};

export default RightModules;
