import { createContext, useContext, useReducer, useState } from "react";

const coursesContext = createContext();

function reducer(state, action) {}

const initialState = [
  {
    Specialization: "Foundation",
    Info: true,
    Status: true,
    modules: ["Foundation", "Frontend", "Python Backend", "C#"],
  },
  {
    Specialization: "Foundation",
    Info: true,
    Status: true,
    modules: ["Foundation", "Frontend", "Java Backend", "Python Backend"],
  },
  {
    Specialization: "Foundation",
    Info: true,
    Status: true,
    modules: ["Foundation", "Frontend", "Java Backend", "Python Backend", "C#"],
  },
  {
    Specialization: "Foundation",
    Info: true,
    Status: true,
    modules: ["Foundation", "Frontend", "Java Backend"],
  },
];

const modules = [
  { id: 1, name: "Java Development", isActive: false },
  { id: 2, name: "Flutter", isActive: true },
  { id: 3, name: "iOS Development", isActive: true },
  { id: 4, name: "Database", isActive: true },
  { id: 5, name: "Java Backend", isActive: true },
  { id: 6, name: "Android", isActive: false },
  { id: 7, name: "Jango", isActive: true },
  { id: 8, name: "Python Development", isActive: false },
  { id: 9, name: ".NET", isActive: true },
  { id: 10, name: "C#", isActive: false },
  { id: 11, name: "Frontend Development", isActive: true },
  { id: 12, name: "Foundation", isActive: false },
  { id: 13, name: "Jango", isActive: true },
  { id: 14, name: "Python Development", isActive: false },
  { id: 15, name: ".NET", isActive: true },
];

const CoursesProvider = ({ children }) => {
  const [courses, dispatchCourses] = useReducer(reducer, initialState);
  const [modulesAdd, setModulesAdd] = useState([]);

  return (
    <coursesContext.Provider
      value={{ courses, dispatchCourses, modules, modulesAdd, setModulesAdd }}
    >
      {children}
    </coursesContext.Provider>
  );
};

function useCourses() {
  return useContext(coursesContext);
}

export { CoursesProvider, useCourses };
