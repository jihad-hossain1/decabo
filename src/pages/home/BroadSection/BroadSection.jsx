import { useCourse } from "../../../hooks/useCourse";
import SingleTab from "./SingleTab";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Button } from "@material-tailwind/react";
import { useState } from "react";
const BroadSection = () => {
  const [courses, refetch, loading, isError, error] = useCourse();

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-2 md:px-10 py-4">
        <div className="grid grid-cols-1  gap-4">
          {[1, 2].map((item, index) => (
            <div key={index}>
              <Skeleton className="h-24" />
              <Skeleton count={1} />
              <Skeleton count={1} />
              <Skeleton className="" count={1} />
              <Skeleton className="" count={1} />
            </div>
          ))}
        </div>
      </div>
    );
  }
  if (isError) {
    return (
      <div className="text-xl font-semibold text-center mt-6">
        {error.message}
      </div>
    );
  }
  const filted = courses?.map((ite) => ite.categories);
  const removeDuplicateCategories = courses?.filter(
    ({ categories }, index) => !filted?.includes(categories, index + 1)
  );
  // console.log(removeDuplicateCategories);
  return (
    <div className="my-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-gray-900">
          <h4 className="text-3xl font-bold mb-3">
            A Huge selection of courses
          </h4>
          <h4 className="text-xl mb-5">
            Choose from over 4320 online video courses with new additions
            published every month
          </h4>
        </div>
        {/* main tab section  */}
        <div className="border border-blue-gray-50 min-h-[400px] w-full">
          <Tabs>
            <TabList>
              <Tab>Web Developer</Tab>
              <Tab>Graphics</Tab>
              <Tab>JavaScript</Tab>
              <Tab>Data Science</Tab>
              <Tab>Drawing</Tab>
              <Tab>Databse AWS</Tab>
            </TabList>

            <div className="mt-4">
              <TabPanel className={"px-2 pb-1"}>
                <div className="mb-2">
                  <h4 className="text-2xl font-semibold text-gray-900 mb-2">
                    Build websites and applications with Web Development
                  </h4>
                  <h6 className="text-gray-800 mb-2">
                    The world of web development is as wide as the internet
                    itself. Much of our social and vocational lives play out on
                    the internet, which prompts new industries aimed at
                    creating, managing, and debugging the websites and
                    applications that we increasingly rely on.
                  </h6>
                  <Button
                    color="blue-gray"
                    variant="outlined"
                    className="bg-blue-gray-50 text-blue-gray-900 hover:bg-teal-700 hover:text-blue-gray-50 hover:border-teal-500 rounded "
                  >
                    Explore Web Development
                  </Button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                  {courses
                    ?.filter((item) => item?.categories === "web-Developer")
                    .map((ite, index) => (
                      <SingleTab key={index} ite={ite} />
                    ))}
                </div>
              </TabPanel>
              <TabPanel className={"px-2 pb-1"}>
                <div className="mb-2">
                  <h4 className="text-2xl font-semibold text-gray-900 mb-2">
                    Build websites and applications with Graphics Design
                  </h4>
                  <h6 className="text-gray-800 mb-2">
                    The world of web development is as wide as the internet
                    itself. Much of our social and vocational lives play out on
                    the internet, which prompts new industries aimed at
                    creating, managing, and debugging the websites and
                    applications that we increasingly rely on.
                  </h6>
                  <Button
                    color="blue-gray"
                    variant="outlined"
                    className="bg-blue-gray-50 text-blue-gray-900 hover:bg-teal-700 hover:text-blue-gray-50 hover:border-teal-500 rounded "
                  >
                    Explore Graphics Design
                  </Button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                  {courses
                    ?.filter((item) => item?.categories === "graphics")
                    .map((ite, index) => (
                      <SingleTab key={index} ite={ite} />
                    ))}
                </div>
              </TabPanel>
              <TabPanel className={"px-2 pb-1"}>
                <div className="mb-2">
                  <h4 className="text-2xl font-semibold text-gray-900 mb-2">
                    Build websites and applications with Javascript
                  </h4>
                  <h6 className="text-gray-800 mb-2">
                    The world of web development is as wide as the internet
                    itself. Much of our social and vocational lives play out on
                    the internet, which prompts new industries aimed at
                    creating, managing, and debugging the websites and
                    applications that we increasingly rely on.
                  </h6>
                  <Button
                    color="blue-gray"
                    variant="outlined"
                    className="bg-blue-gray-50 text-blue-gray-900 hover:bg-teal-700 hover:text-blue-gray-50 hover:border-teal-500 rounded "
                  >
                    Explore Javascript
                  </Button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                  {courses
                    ?.filter((item) => item?.categories === "javascript")
                    .map((ite, index) => (
                      <SingleTab key={index} ite={ite} />
                    ))}
                </div>
              </TabPanel>
              <TabPanel className={"px-2 pb-1"}>
                <div className="mb-2">
                  <h4 className="text-2xl font-semibold text-gray-900 mb-2">
                    Lead data-driven decisions with Data Science
                  </h4>
                  <h6 className="text-gray-800 mb-2">
                    Explore data science courses with Python, statistics,
                    machine learning, and more to grow your knowledge. Get data
                    science training if you’re into research, statistics,
                  </h6>
                  <Button
                    color="blue-gray"
                    variant="outlined"
                    className="bg-blue-gray-50 text-blue-gray-900 hover:bg-teal-700 hover:text-blue-gray-50 hover:border-teal-500 rounded "
                  >
                    Explore Data Science
                  </Button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                  {courses
                    ?.filter((item) => item?.categories === "dataScience")
                    .map((ite, index) => (
                      <SingleTab key={index} ite={ite} />
                    ))}
                </div>
              </TabPanel>
              <TabPanel className={"px-2 pb-1"}>
                <div className="mb-2">
                  <h4 className="text-2xl font-semibold text-gray-900 mb-2">
                    Expand your creative skillset with Drawing
                  </h4>
                  <h6 className="text-gray-800 mb-2">
                    Explore our online drawing classes and learn pencil drawing,
                    figure drawing, cartoon drawing, character drawing for
                    cartoons and anime, illustration, sketching, shading and
                    more. Take an overview course on the fundamentals of drawing
                    or zero in on an area
                  </h6>
                  <Button
                    color="blue-gray"
                    variant="outlined"
                    className="bg-blue-gray-50 text-blue-gray-900 hover:bg-teal-700 hover:text-blue-gray-50 hover:border-teal-500 rounded "
                  >
                    Explore Drawing
                  </Button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                  {courses
                    ?.filter((item) => item?.categories === "drawing")
                    .map((ite, index) => (
                      <SingleTab key={index} ite={ite} />
                    ))}
                </div>
              </TabPanel>
              <TabPanel className={"px-2 pb-1"}>
                <div className="mb-2">
                  <h4 className="text-2xl font-semibold text-gray-900 mb-2">
                    Become an expert in cloud computing with AWS Certification
                  </h4>
                  <h6 className="text-gray-800 mb-2">
                    TWhether or not you aim for certification, an AWS course
                    offers the theory and practical skills you need to land a
                    job in cloud development, sales, engineering, networking,
                    and more. The better you become at cloud computing, the more
                  </h6>
                  <Button
                    color="blue-gray"
                    variant="outlined"
                    className="bg-blue-gray-50 text-blue-gray-900 hover:bg-teal-700 hover:text-blue-gray-50 hover:border-teal-500 rounded "
                  >
                    Explore Databse AWS
                  </Button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                  {courses
                    ?.filter((item) => item?.categories === "databseAWS")
                    .map((ite, index) => (
                      <SingleTab key={index} ite={ite} />
                    ))}
                </div>
              </TabPanel>
            </div>
          </Tabs>
          {/* <Tabs value={activeTab}>
            <TabsHeader
              className="rounded-none border-b border-blue-gray-50 bg-transparent p-0 max-w-[500px]"
              indicatorProps={{
                className:
                  "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
              }}
            >
              <Tab
                value={"Python"}
                onClick={() => setActiveTab("Python")}
                className={activeTab === "Python" ? "text-gray-900" : ""}
              >
                {"Python"}
              </Tab>
              <Tab
                value={"javascript"}
                onClick={() => setActiveTab("javascript")}
                className={activeTab === "javascript" ? "text-gray-900" : ""}
              >
                {"javascript"}
              </Tab>
              <Tab
                value={"Web Developer"}
                onClick={() => setActiveTab("Web Developer")}
                className={activeTab === "Web Developer" ? "text-gray-900" : ""}
              >
                {"Web Developer"}
              </Tab>
            </TabsHeader>
            <TabsBody>
              {data.map(({ value, desc }) => (
                <TabPanel key={value} value={value}>
                  {desc}
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs> */}
        </div>
      </div>
    </div>
  );
};

export default BroadSection;
