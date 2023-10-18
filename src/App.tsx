import About from "./components/About";
import Experience from "./components/Experience";
import Navbar from "./components/Navbar";
import Project from "./components/Project";

function App() {
  return (
    <div>
      <Navbar />

      <div>
        <About />
      </div>

      <div>
        <Experience />
      </div>

      <div>
        <Project />
      </div>
    </div>
  );
}

export default App;
