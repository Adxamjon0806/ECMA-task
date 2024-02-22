import { createContext, useContext, useReducer } from "react";

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

const CoursesProvider = ({ children }) => {
  const [courses, dispatchCourses] = useReducer(reducer, initialState);
  return (
    <coursesContext.Provider value={{ courses, dispatchCourses }}>
      {children}
    </coursesContext.Provider>
  );
};

function useCourses() {
  return useContext(coursesContext);
}

export { CoursesProvider, useCourses };
