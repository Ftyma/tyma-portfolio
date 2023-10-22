import Navbar from "./components/Navbar";
// import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Experience from "./components/Experience";
import Project from "./components/Project";
import "./App.css";
import Home from "./components/Home";

const App = () => {
  return (
    <>
      <div className="bg-lightBlue pb-40 wrapper">
        <Navbar />
        <header>
          <img src="src/assets/blue-moon.png" className="background" />

          <div className="pt-40">
            <Home />
          </div>
        </header>

        <div className={`h-0.5 w-full bg-dimWhite mt-20 mb-5`} />
        <div className="">
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
