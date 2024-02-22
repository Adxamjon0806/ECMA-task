import Layout from "./components/Layout";
import { CoursesProvider } from "./context/coursesContext";

function App() {
  return (
    <CoursesProvider>
      <Layout />
    </CoursesProvider>
  );
}

export default App;
