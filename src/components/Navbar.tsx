import { Link } from "react-router-dom";

let navList = [
  { title: "About", url: "/about" },
  { title: "Project", url: "/project" },
  { title: "Experience", url: "/experience" },
];
const Navbar = () => {
  return (
    <div>
      <nav className="w-full flex py-5 text-white text-lg font-comfortaa justify-end ">
        <ul>
          {navList.map((list, i) => (
            <Link to={list.url} key={i} className="mx-3">
              {list.title}
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
