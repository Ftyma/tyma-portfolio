import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  IconButton,
} from "@material-tailwind/react";

const projectList = [
  {
    title: " Amusigo",
    desc: "A web application that connect students through the same music taste",
    icon: "fa-brands fa-github",
    webIcon: "fa-solid fa-globe",
    url: `https://github.com/Ftyma/Amusigo`,
    url1: `https://amusigo.000webhostapp.com/landing.php`,
    stack: "PHP, HTML, CSS, MySQL",
  },
  {
    title: " Ecommerce Web App",
    desc: " A full stack application for B2B ecommerce website. This project was develop during my internship at ThaiBev.",
    icon: "fa-brands fa-github",
    url: `https://github.com/Ftyma/client_frontend`,
    stack: "MongoDB, Express, ReactJs, NodeJs",
  },
  {
    title: " Future Letter",
    desc: "Send letter to your future-self",
    icon: "fa-brands fa-github",
    webIcon: "fa-solid fa-globe",
    url: `https://github.com/Ftyma/FutureLetter`,
    url1: `https://future-letter.netlify.app`,
    stack: "MongoDB, Express, ReactJs, NodeJs",
  },
];

const Project = () => {
  return (
    <section id="project">
      <h1 className="font-comfortaa text-white text-4xl ml-10">Projects</h1>

      <div className="grid md:grid-cols-3 grid-cols-1 w-10/12 justify-items-center mx-auto">
        {projectList.map(({ title, desc, icon, webIcon, url, url1, stack }) => (
          <Card className="mt-16 w-80 shadow-2xl">
            <CardBody className="">
              {webIcon && (
                <a href={url1}>
                  <IconButton className="text-2xl bg-transparent text-black border-none shadow-none float-right">
                    <i className={`text-pink ${webIcon} `} />
                  </IconButton>
                </a>
              )}
              <a href={url}>
                <IconButton className="text-2xl bg-transparent text-black border-none shadow-none float-right">
                  <i className={`text-pink ${icon}`} />
                </IconButton>
              </a>

              <br />
              <br />

              <Typography variant="h5" color="blue-gray" className="mb-2">
                {title}
              </Typography>
              <Typography>{desc}</Typography>
            </CardBody>
            <CardFooter className="pt-0">Stack:{stack}</CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Project;
