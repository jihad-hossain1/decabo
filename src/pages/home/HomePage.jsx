import React, { useContext } from "react";
import Hero from "../../components/Hero";
import InterActivity from "../../components/InterActivity";
import Hero2 from "./Hero2";
import TrustByCompany from "./TrustByCompany";
import BroadSection from "./BroadSection/BroadSection";
import { AuthContext } from "../../provider/AuthProvider";
import Courses from "../courses/Courses";
import Testimonial from "../../components/testimonial/Testimonial";
import DoceboBussiness from "../../components/doceboBussiness/DoceboBussiness";
import BecomeInstructor from "../../components/BecomeInstructor/BecomeInstructor";
import HomepageCarosel from "../../components/homeCarosel/HomepageCarosel";

const HomePage = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      {!user ? (
        <>
          <Hero2 />
          {/* <Hero></Hero> */}
          <TrustByCompany />
          <BroadSection />
          <Testimonial />
          <DoceboBussiness />
          <InterActivity></InterActivity>
          <div className="my-10">
            <BecomeInstructor />
          </div>
        </>
      ) : (
        <>
          <HomepageCarosel />
          <Courses />
        </>
      )}
    </div>
  );
};

export default HomePage;
