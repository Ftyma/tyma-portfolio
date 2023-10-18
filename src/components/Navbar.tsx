//import { Link } from "react-router-dom";

let navList = [
  { title: "About", id: "/about" },
  { title: "Project", id: "/project" },
  { title: "Experience", id: "/experience" },
];
const Navbar = () => {
  return (
    <div>
      <nav className="w-full flex py-5 text-white text-lg font-comfortaa justify-end ">
        <ul>
          {navList.map((nav) => (
            // <Link to={list.url} key={i} className="mx-3">
            //   {list.title}
            // </Link>
            <li key={nav.id} className="cursor-pointer">
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
