const techList = [
  "ReactJs",
  "NodeJs",
  "HTML&CSS",
  "Javascript",
  "Typescript",
  "Java",
  "PHP",
];

const intro =
  "I'm currently a junior in <span style='color:#C46F98;'> Computer Engineering</span> with a minor in <span style='color:#C46F98;'>Artificial Intelligence.</span> I'm a firm believer in experimentation and exploring new things, taking on new challenges while applying creative thinking";
const interest =
  "Beside school, I enjoy hiking, connecting with people, and everything in-between.";

const About = () => {
  return (
    <section id="about" className="font-comfortaa">
      <h1 className="text-white text-4xl ml-10 font-extrabold mb-10">
        About Me
      </h1>

      <div className="grid sm:grid-cols-2 text-white font-extrabold opacity-90 w-10/12 mx-auto justify-items-center">
        <div>
          <h1 dangerouslySetInnerHTML={{ __html: intro }}></h1>
          <br />
          <h1>Technogies I have been working with:</h1>

          <ul className="grid grid-cols-2 w-8/12 list-disc list-inside">
            {techList.map((list, i) => (
              <li className="col-span-1 ml-4" key={i}>
                {list}
              </li>
            ))}
          </ul>

          <br />
        </div>

        {/* profile pic */}

        <img
          className="w-[400px] rounded-lg col-6 ml-14 hidden sm:block"
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
