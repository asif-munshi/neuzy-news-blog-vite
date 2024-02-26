import React from 'react';

import { Footer, Header } from '../../components';
import {
  HeroSection,
  LatestSection,
  MainSection,
  SubscribeSection,
  TopicsSection
} from '../../components/HomepageComponents';

const HomepagePage: React.FC = () => {
  return (
    <>
      <div className="mx-auto flex w-full flex-col items-center justify-start gap-[50px] bg-white-A700 font-inter">
        <Header />
        <div className="flex w-full flex-col items-center justify-start gap-[120px] md:gap-10">
          <HeroSection />
          <LatestSection />
          <MainSection />
          <TopicsSection />
          <SubscribeSection />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default HomepagePage;
