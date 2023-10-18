const About = () => {
  return (
    <section id="about">
      <div className=" grid sm:grid-cols-2 w-11/12 h-100 mx-auto">
        <div className="col-6 text-center sm:text-right my-auto">
          <h1 className="text-white text-5xl font-comfortaa">
            Hi, I'm Featthima
          </h1>
          <br />
          <h1 className="text-white text-xl font-comfortaa">
            I am 3rd year Computer Engineering student at Sirindhorn
            International Institute of Technology
          </h1>
          <br />
          <h1 className="text-white text-xl font-comfortaa">
            I enjoy hiking, problem solving, connecting with people, and
            everything in between.
          </h1>
        </div>
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
