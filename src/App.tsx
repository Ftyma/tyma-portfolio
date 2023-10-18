import Navbar from "./components/Navbar";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Experience from "./components/Experience";
import Project from "./components/Project";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/about" Component={About} />
        <Route path="/experience" Component={Experience} />
        <Route path="/projects" Component={Project} />
      </Routes>
    </Router>
  );
}

export default App;
