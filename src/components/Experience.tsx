import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";

const Experience = () => {
  const data = [
    {
      label: "Amity",
      value: "Amity",
      position: "Product Technicalist Intern",
      date: "May 2024 - Aug 2024 ",
      link: "https://www.amity.co/",
      desc: [
        "Documented and collaborated with DevOps Engineer to automated release-note process using Release Please",
        "Supported QA teams by conducting manual testing on SDK & UIKit features",
      ],
    },
    {
      label: "ThaiBev",
      value: "ThaiBev",
      position: "Front-End Developer Intern",
      date: "Jun 2023 - Jul 2023 ",
      desc: [
        "Worked with UX/UI and engineering teams on front-end of a B2B e-commerce platforms, using MERN stack.",
      ],
    },
    {
      label: "CamSolution Technology",
      value: "CamSolution Technology",
      position: "Frontend Developer Intern",
      date: "Jun 2022 - Sept 2023",
      desc: [
        "Collaborated with the developer team to build responsive and user-friendly web applications",
        "Delivered features and updates on project milestones to business clients and the team.",
      ],
    },
    {
      label: "Huawei Seed4TheFuture ",
      value: "Tech4Good Hackathon",
      position: "Tech4Good Hackathon",
      date: "Aug 2022",
      desc: [
        "Collaborated with a team of 5 in developing a map navigation mobile app prototype to address road accessibility of wheelchair users in Cambodia",
        "Selected as the top7 among 24 projects in Thailand and achieved a Moonshot award at the APAC level",
      ],
    },
    {
      label: "Schneider",
      value: "Schneider",
      position: "Go Green Hackathon",
      date: "2023",
      desc: [
        "Developed a hotel energy conservation app, incentivizing guests to participate in sustainable practices through rewards and interactive features.",
        "Awarded as Thailand Country Final Winner",
      ],
    },
    {
      label: "Edmonds College",
      value: "Edmonds College",
      position: "Green Team Event Coordinator",
      date: "Aug 2019 - Jun 2020 ",
      desc: [
        "Coordinated over 10 high-impact events that engaged more than 100 students on campus, effectively promoting eco-conscious practices and environmental awareness.",
      ],
    },
  ];

  const initialActiveTab = "ThaiBev";
  const [activeTab, setActiveTab] = useState(initialActiveTab);
  const isHorizontal = useMediaQuery("(max-width: 700px)");

  return (
    <section id="experience">
      <h1 className="font-comfortaa text-white text-4xl ml-10 font-extrabold ">
        /experience
      </h1>

      <div className="w-9/12 justify-items-center mx-auto font-extrabold">
        <Tabs
          value={activeTab}
          orientation={isHorizontal ? null : "vertical"}
          className={isHorizontal ? "" : "mt-10 justify-center mx-auto"}
        >
          <TabsHeader
            className={`bg-transparent ${isHorizontal ? "w-auto" : "w-72"}`}
            indicatorProps={{
              className: `bg-transparent border-pink shadow-none rounded-none border-r-2 w-34
              }`,
            }}
          >
            {data.map(({ label, value }) => (
              <Tab
                key={value}
                value={value}
                onClick={() => setActiveTab(value)}
                className={` justify-start font-comfortaa text-md font-extrabold my-1 ${
                  activeTab === value ? "text-pink" : "text-white"
                }`}
              >
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody className="ml-9">
            {data.map((list) => (
              <TabPanel
                key={list.value}
                value={list.value}
                className="py-0 font-comfortaa"
              >
                <h1 className="text-xl text-white font-extrabold mt-10 sm:mt-5">
                  {list.position}{" "}
                  <a href={list.link}>
                    <span className="text-pink pl-3 ">@{list.label}</span>
                  </a>
                </h1>
                <h3 className="text-white mt-2 mb-4">{list.date}</h3>

                <ul className="pl-5" style={{ listStyleType: "disc" }}>
                  {list.desc.map((descJob, i) => (
                    <li className="text-white opacity-80" key={i}>
                      {descJob}
                    </li>
                  ))}
                </ul>
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>
    </section>
  );
};

export default Experience;
