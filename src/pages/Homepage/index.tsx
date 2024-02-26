import React from 'react';

//import { useNavigate } from 'react-router-dom';

import { Footer, Header } from '../../components';
import {
  HeroSection,
  LatestSection
} from '../../components/HomepageComponents';

const HomepagePage: React.FC = () => {
  //const navigate = useNavigate();

  return (
    <>
      <div className="mx-auto flex w-full flex-col items-center justify-start gap-[50px] bg-white-A700 font-inter">
        <Header />
        <div className="flex w-full flex-col items-center justify-start gap-[120px] md:gap-10">
          <HeroSection />
          <LatestSection />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default HomepagePage;
