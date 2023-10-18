import Navbar from "./components/Navbar";
// import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Experience from "./components/Experience";
import Project from "./components/Project";

const App = () => {
  return (
    <>
      <Navbar />

      <div>
        <About />
      </div>

      <div>
        <div className={`h-0.5 w-full bg-dimWhite mt-20 mb-5`} />
        <Experience />
      </div>

      <div>
        <div className={`h-0.5 w-full bg-dimWhite mt-20 mb-5`} />
        <Project />
      </div>

      {/* <Routes>
        <Route path="/about" Component={About} />
        <Route path="/experience" Component={Experience} />
        <Route path="/project" Component={Project} />
      </Routes> */}
    </>
  );
};

export default App;
