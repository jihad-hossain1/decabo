import React from 'react';
import Hero from '../../components/Hero';
import InterActivity from '../../components/InterActivity';
import Hero2 from "./Hero2";
import TrustByCompany from "./TrustByCompany";
import BroadSection from "./BroadSection/BroadSection";

const HomePage = () => {
  return (
    <div>
      <Hero2 />
      {/* <Hero></Hero> */}
      <TrustByCompany />
      <BroadSection />
      <InterActivity></InterActivity>
    </div>
  );
};

export default HomePage;