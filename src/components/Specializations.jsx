import React, { useState } from "react";
import { useCourses } from "../context/coursesContext";
import dots_menu from "../assets/dots-menu.png";
import { useNavigate } from "react-router-dom";

const Specializations = () => {
  const { courses, setAction } = useCourses();
  const [selectedCourse, setSelectedCourse] = useState(false);
  const navigate = useNavigate();

  const objOfSelected = selectedCourse
    ? courses.filter((_, i) => i === selectedCourse - 1)[0]
    : {};

  function action(course) {
    setAction(course);
    navigate("/addOrEdit");
  }

  return (
    <section className="specializations">
      <div className="left_div">
        <div className="title_div specializations__list">
          <div className="list__index__spec">
            <p className="index">#</p>
            <p className="spec">Specialization</p>
          </div>
          <div className="list__infos">
            <p className="info">Info</p>
            <p className="status">Status</p>
            <p className="action">Action</p>
          </div>
        </div>
        <div className="itemsOfSpecializations">
          {courses.map((course, i) => (
            <div
              className="title_div specializations__list item"
              onClick={() => setSelectedCourse(i + 1)}
              key={i}
            >
              <div className="list__index__spec">
                <p className="index">{i + 1}</p>
                <p className="spec">{course.Specialization}</p>
              </div>
              <div className="list__infos list__infos__item">
                <p className={`info ${course.Info ? "degree" : "noDegree"}`}>
                  {course.Info ? "DEGREE" : "NO DEGREE"}
                </p>
                <button
                  className={`${course.Status ? "active" : "inActive"} btn`}
                >
                  {course.Status ? "ACTIVE" : "IN ACTIVE"}
                </button>
                <button
                  className="action_btn btn"
                  onClick={() => action(course)}
                >
                  <img src={dots_menu} alt="dots_menu" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="right_div">
        {selectedCourse ? (
          <>
            <div className="title_div">{objOfSelected.Specialization}</div>
            {objOfSelected.modules.map((module) => (
              <div className="title_div module_div" key={module}>
                {module.name}
              </div>
            ))}
          </>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default Specializations;
