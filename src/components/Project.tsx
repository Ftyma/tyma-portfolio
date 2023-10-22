import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  IconButton,
} from "@material-tailwind/react";

const projectList = [
  {
    title: " Project 1",
    desc: "Because it&apos;s about motivating the doers. Because I&apos;m here to follow my dreams and inspire others.",
    icon: "fa-brands fa-github",
    url: `https://github.com/Ftyma`,
    stack: "Java, HTML, React",
  },
  {
    title: " Project 2",
    desc: "Because it&apos;s about motivating the doers. Because I&apos;m here to follow my dreams and inspire others.",
    icon: "fa-brands fa-github",
    url: `https://github.com/Ftyma`,
    stack: "Java, HTML, React",
  },
  {
    title: " Project 3",
    desc: "Because it&apos;s about motivating the doers. Because I&apos;m here to follow my dreams and inspire others.",
    icon: "fa-brands fa-github",
    url: `https://github.com/Ftyma`,
    stack: "Java, HTML, React",
  },
  {
    title: " Project 4",
    desc: "Because it&apos;s about motivating the doers. Because I&apos;m here to follow my dreams and inspire others.",
    icon: "fa-brands fa-github",
    url: `https://github.com/Ftyma`,
    stack: "Java, HTML, React",
  },
];

const Project = () => {
  return (
    <section id="project">
      <h1 className="font-comfortaa text-white text-4xl ml-10">Projects</h1>

      <div className="grid md:grid-cols-3 grid-cols-1 w-10/12 justify-items-center mx-auto">
        {projectList.map(({ title, desc, icon, url, stack }) => (
          <Card className="mt-16 w-80 shadow-2xl">
            <CardBody className="">
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
