import Typewriter from "./Typewriter";
import { IconButton } from "@material-tailwind/react";

const bio = [
  {
    id: 1,
    desc: "I am 3rd year Computer Engineering student at Sirindhorn International Institute of Technology",
  },
  {
    id: 2,
    desc: " I'm a firm believer in experimentation and exploring new things, taking on new challenges while applying creative thinking",
  },
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

const About = () => {
  return (
    <section id="about">
      <div className=" grid sm:grid-cols-2 w-11/12 h-100 mx-auto">
        <div className="col-6 text-center sm:text-right my-auto mb-4">
          <div>
            <h1 className="text-white text-5xl font-comfortaa font-extrabold">
              <span>Hi, I'm </span>
              <span className="text-pink">
                <Typewriter text="Featthima " delay={150} infinite={false} />
              </span>
            </h1>
          </div>

          {bio.map(({ desc }) => (
            <h1 className="text-dimWhite text-md font-comfortaa">
              <br />
              {desc}
            </h1>
          ))}

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

        {/* profile pic */}
        <img
          className="w-[400px] rounded-lg col-6 ml-14"
          alt="profile"
          src={
            "https://img.freepik.com/free-photo/cute-woman-hold-hands-gesture-empty-spec-business-woman-concept-pink-background-3d-rendering_56104-1468.jpg?w=1060&t=st=1689320801~exp=1689321401~hmac=d7db2cd2d299dbf3608febfb95076224c29680b1d3bb05c3957aad79d758f718"
          }
        />
      </div>
    </section>
  );
};

export default About;
