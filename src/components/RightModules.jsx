import React, { useState } from "react";

const RightModules = ({ course, setModulesAdd, modulesAdd }) => {
  let watchClick;
  if (course.name in modulesAdd) {
    watchClick = true;
  } else {
    watchClick = false;
  }
  const [clicked, setCliced] = useState(watchClick);

  function clickModule() {
    setCliced(!clicked);
    if (!clicked) {
      setModulesAdd((prew) => [...prew, course.name]);
    } else {
      const findIndex = modulesAdd.indexOf(course.name);
      modulesAdd.splice(findIndex, 1);
      setModulesAdd([...modulesAdd]);
    }
  }

  return (
    <div className={`right_modules ${clicked && "right_modules_clicked"}`}>
      {course.name.length > 15
        ? `${course.name.substring(0, 14)}...`
        : course.name}
      <p
        className={`isActive_p ${
          course.isActive === "INACTIVE" && "isActive_p_false"
        }`}
      >
        {course.isActive}
      </p>
      <button
        className={`right_modules_btn ${
          clicked && "right_modules_btn_clicked"
        }`}
        onClick={clickModule}
      >
        <p className={`modules_btn_p ${clicked && "modules_btn_p_rotated"}`}>
          +
        </p>
      </button>
    </div>
  );
};

export default RightModules;
