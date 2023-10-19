import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

const Experience = () => {
  const data = [
    {
      label: "ThaiBev",
      value: "ThaiBev",
      position: "Digital Experience Intern",
      date: "Jun 2023 - Jul 2023 ",
      desc: `It really matters and then like it really doesn't matter.
          What matters is the people who are sparked by it. And the people
          who are like offended by it, it doesn't matter.`,
    },
    {
      label: "CamSolution Technology",
      value: "CamSolution Technology",
      position: "Frontend Developer Intern",
      date: "Jun 2022 - Sept 2023",
      desc: `Because it's about motivating the doers. Because I'm here
          to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Huawei Seed4TheFuture",
      value: "Huawei Seed4TheFuture",
      position: "Cambodia Delegate",
      date: "Aug 2022",
      desc: `We're not always in the position that we want to be at.
          We're constantly growing. We're constantly making mistakes. We're
          constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: "Edmonds College",
      value: "Edmonds College",
      position: "Green Team Event Coordinator",
      date: "Aug 2019 - Jun 2020 ",
      desc: `Because it's about motivating the doers. Because I'm here
          to follow my dreams and inspire other people to follow their dreams, too.`,
    },
  ];
  return (
    <section id="experience">
      <h1 className="font-comfortaa text-white text-4xl ml-10 font-extrabold ">
        Experience
      </h1>

      <div className="w-10/12 justify-items-center mx-auto ">
        <Tabs
          value="ThaiBev"
          orientation="vertical"
          className="mt-10 justify-center mx-auto"
        >
          <TabsHeader
            className="w-72 bg-transparent"
            indicatorProps={{
              className:
                " bg-transparent border-b-2 border-secondary shadow-none rounded-none",
            }}
          >
            {data.map(({ label, value }) => (
              <Tab
                key={value}
                value={value}
                className="text-dimWhite justify-start  font-comfortaa"
              >
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            {data.map(({ value, desc, position, date }) => (
              <TabPanel
                key={value}
                value={value}
                className="py-0  font-comfortaa"
              >
                <h1 className="text-xl text-white font-extrabold">
                  {position}
                </h1>
                <h3 className="text-dimWhite mt-2 mb-4">{date}</h3>
                <h3 className="text-dimWhite opacity-70">{desc}</h3>
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>
    </section>
  );
};

export default Experience;
