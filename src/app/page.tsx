import TeacherTestimonials from "./components/about/TeacherTestimonials";
import TechnologyTestimonials from "./components/about/TechnologyTestimon";
import ExpertiseCard from "./components/about/ExpertiseCard";
import AboutMe from "./components/about/AboutMe";

const HomePage = () => {
  return (
    <div className="mb-4 md:mb-0">
      <div className="ps-6 pe-6 md:-mt-16 mt-2 mb-5">
        <h1 className="text-3xl font-bold text-white">About Me</h1>
        <div className="w-12 h-1 bg-yellow-500 my-2"></div>
        <AboutMe />
        {/* Flex container for cards */}
        <div className="font-bold text-2xl">
          <h3>My Expertise</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-4 mt-5 place-items-center">
          <ExpertiseCard />
        </div>
      </div>
      <div>
        <div className="font-bold text-2xl mt-4 ps-6 pe-6">
          <h3>Teacher's Guidance</h3>
        </div>
        <div className="mt-4">
          <TeacherTestimonials />
        </div>
      </div>
      <div className="mb-10">
        <div className="font-bold text-2xl mt-4 ps-6 pe-6">
          <h3>Technology</h3>
        </div>
        <div className="mt-4">
          <TechnologyTestimonials />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

{/* <meta name="google-site-verification" content="U21sRHG4ITrbC1LksUGmTS9Lel8RcAtWXcyrJYT4pdQ" /> */}