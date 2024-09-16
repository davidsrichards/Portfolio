import AboutMe from "./AboutMe/AboutMe";
import Arrow from "./Arrow/Arrow";
import Blogs from "./Blogs/Blogs";
import Counts from "./Counts/Counts";
import Footer from "./Footer/Footer";
import HomeComponent from "./HomeComponent/HomeComponent";
import MyPortfolio from "./MyPortfolio/MyPortfolio";
import Testimony from "./Testimony/Textimony";
import Trusted from "./Trusted/Trusted";
import WhatIDo from "./WhatIDo/WhatIDo.JSX";

function Component() {
  return (
    <div>
      <HomeComponent />
      <AboutMe />
      <WhatIDo />
      <MyPortfolio />
      <Counts />
      <Testimony />
      <Trusted />
      <Blogs />
      <Footer />
      <Arrow />
    </div>
  );
}

export default Component;
