import Navbar from "./components/Navbar";
// import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Experience from "./components/Experience";
import Project from "./components/Project";
import "./App.css";

const App = () => {
  return (
    <>
      <div className="bg-primary pb-40">
        <Navbar />
        <div className="pt-40">
          <About />
        </div>

        <div className={`h-0.5 w-full bg-dimWhite mt-20 mb-5`} />
        <div className="">
          <Experience />
        </div>

        <div className="">
          <div className={`h-0.5 w-full bg-dimWhite mt-20 mb-5`} />
          <Project />
        </div>

        {/* <Routes>
        <Route path="/about" Component={About} />
        <Route path="/experience" Component={Experience} />
        <Route path="/project" Component={Project} />
      </Routes> */}
      </div>
    </>
  );
};

export default App;
