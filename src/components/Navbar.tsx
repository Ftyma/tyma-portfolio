//import { Link } from "react-router-dom";

let navList = [
  { title: "About", id: "about" },
  { title: "Project", id: "project" },
  { title: "Experience", id: "experience" },
];
const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 z-10 flex text-white py-4 text-lg font-comfortaa justify-end bg-primary ">
      <ul className="flex">
        {navList.map((nav) => (
          // <Link to={list.url} key={i} className="mx-3">
          //   {list.title}
          // </Link>
          <li key={nav.id} className="cursor-pointer mx-5">
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
