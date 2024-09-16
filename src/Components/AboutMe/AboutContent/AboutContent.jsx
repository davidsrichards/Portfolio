import "./AboutMe.css";
import { useEffect, useRef } from "react";
import AboutButton from "./AboutButton";
import { useInView } from "framer-motion";
import { useDispatch } from "react-redux";
import { checkActiveLink } from "../../../Redox/Features/Slice/Slice";
function AboutContent() {
  const dispatch = useDispatch();
  const ref = useRef();
  const inView = useInView(ref, { once: false });

  useEffect(() => {
    if (inView) {
      dispatch(checkActiveLink("about"));
      ref.current.classList.add("animate");
    } else {
      ref.current.classList.remove("animate");
    }
  }, [inView]);
  return (
    <div className="  flex  justify-center flex-col p-8 select-none">
      <div
        ref={ref}
        className={`${
          inView
            ? "animate opacity-100 translate-y-0 transition-all duration-700 ease-out"
            : "opacity-0 translate-y-16"
        }`}
      >
        <h1 className="about text-black">About Me</h1>
        <h4 className="about-content">Visual Designer & Full-End Developer,</h4>
        <p
          className={`pb-[30px]   transition-all duration-700 ease-out text-slate-400`}
        >
          I am David Richard. a full stack web developer with three years of
          experience, i specialize in crafting scalable, efficient, and visually
          stunning web applications. My expertise spans the entire web
          development spectrum, from front-end to back-end with passion and
          staying up to date with the lastest technologies and trends.
        </p>
      </div>
      <AboutButton />
    </div>
  );
}

export default AboutContent;
