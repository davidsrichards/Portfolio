import { useSelector } from "react-redux";
import About from "./Links/About";
import Blogs from "./Links/Blogs";
import Contact from "./Links/Contact";
import Home from "./Links/Home";
import Portfolio from "./Links/Portfolio";
import Service from "./Links/Service";
import Testimonial from "./Links/Testimonial";

function NavigationRoutes() {
  const { height } = useSelector((state) => state.slice);
  return (
    <div
      className={`lg:flex hidden items-center w-full nav-font justify-center gap-10 text-${
        height ? "black" : "white"
      }`}
    >
      <Home />
      <About />
      <Service />
      <Portfolio />
      <Testimonial />
      <Blogs />
      <Contact />
    </div>
  );
}

export default NavigationRoutes;
