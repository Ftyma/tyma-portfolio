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
      label: "ThaiBev",
      value: "ThaiBev",
      position: "Digital Experience Intern",
      date: "Jun 2023 - Jul 2023 ",
      desc: [
        "Worked on the design and implementation of user-centered digital interfaces, contributing to improved user satisfaction and optimized online customer journeys.",
        "Assisted senior developer on an e-commerce web application integrated in Line application using MERN stack.",
      ],
    },
    {
      label: "CamSolution Technology",
      value: "CamSolution Technology",
      position: "Frontend Developer Intern",
      date: "Jun 2022 - Sept 2023",
      desc: [
        "Collaborated with the developer team to build responsive and user-friendly web applications using Vue.js framework and Javascript",
        "Actively engaged in the agile development process, delivering features and updates on project milestones to business clients and the team.",
      ],
    },
    {
      label: "Huawei Seed4TheFuture",
      value: "Huawei Seed4TheFuture",
      position: "Cambodia Delegate",
      date: "Aug 2022",
      desc: [
        "Collaborated with a team of 5 in developing a map navigation mobile app prototype to address road accessibility of wheelchair users in Cambodia",
        "Selected as the top7 among 24 projects in Thailand and achieved a Moonshot award at the APAC level",
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
  const isHorizontal = useMediaQuery("(max-width: 600px)");

  return (
    <section id="experience">
      <h1 className="font-comfortaa text-white text-4xl ml-10 font-extrabold ">
        Experience
      </h1>

      <div className="w-9/12 justify-items-center mx-auto">
        <Tabs
          value={activeTab}
          orientation={isHorizontal ? null : "vertical"}
          className={isHorizontal ? "" : "mt-10 justify-center mx-auto"}
        >
          <TabsHeader
            className={`bg-transparent ${isHorizontal ? "w-auto" : "w-72"}`}
            indicatorProps={{
              className: `bg-transparent border-secondary shadow-none rounded-none ${
                isHorizontal ? "border-b-2" : "border-r-2 w-34"
              }`,
            }}
          >
            {data.map(({ label, value }) => (
              <Tab
                key={value}
                value={value}
                onClick={() => setActiveTab(value)}
                className={` justify-start font-comfortaa text-sm my-1 ${
                  activeTab === value ? "text-pink" : "text-dimWhite"
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
                <h1 className="text-xl text-white font-extrabold">
                  {list.position}{" "}
                  <span className="text-lightPink pl-3 ">@{list.label}</span>
                </h1>
                <h3 className="text-dimWhite mt-2 mb-4">{list.date}</h3>

                <ul className="pl-5" style={{ listStyleType: "disc" }}>
                  {list.desc.map((descJob, i) => (
                    <li className="text-dimWhite opacity-70" key={i}>
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
