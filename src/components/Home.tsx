import Typewriter from "./Typewriter";
import { IconButton } from "@material-tailwind/react";

const bio = [
  "I'm a 4th-year Computer Engineering student, and I'm interested in full-stack software development, data science, and sustainability.",
];
const contactIcon = [
  {
    icon: "fa-brands fa-linkedin-in",
    title: "LinkedIn",
    url: `https://www.linkedin.com/in/featthimabou/`,
  },
  {
    icon: "fa-solid fa-envelope",
    title: "Email",
    url: `mailto:${"featthimabou1@gmail.com"}`,
  },
  {
    icon: "fa-brands fa-github",
    title: "GitHub",
    url: `https://github.com/Ftyma`,
  },
];

const Home = () => {
  return (
    <section id="home">
      <div className=" w-11/12 h-100 mx-auto">
        <div className="col-6 text-center  my-auto mb-4">
          <div>
            <h1 className="text-white text-7xl font-comfortaa font-extrabold">
              <span>Hi, I'm </span>

              <span className="text-pink">
                <Typewriter text="Featthima " delay={150} infinite={false} />
              </span>
            </h1>
          </div>

          <br />
          <h1 className="mx-auto text-white text-md font-comfortaa opacity-95 w-7/12 sm:w-6/12">
            {bio.map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </h1>

          <br />
          <br />

          <div className="">
            {contactIcon.map(({ icon, url }) => (
              <a href={url}>
                <IconButton className=" text-2xl mx-2 bg-lightPink">
                  <i className={icon}></i>
                </IconButton>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
