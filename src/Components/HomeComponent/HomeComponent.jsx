import { useEffect, useRef } from "react";
import "./HomeComponent.css";
import SocialMedia from "./SocialMedia/SocialMedia";
import { useInView } from "framer-motion";
import { useDispatch } from "react-redux";
import { checkActiveLink } from "../../Redox/Features/Slice/Slice";

function HomeComponent() {
  const dispatch = useDispatch();
  const ref = useRef();
  const inView = useInView(ref, { once: false });

  useEffect(() => {
    if (inView) {
      dispatch(checkActiveLink("home"));
      ref.current.classList.add("animate");
    } else {
      ref.current.classList.remove("animate");
    }
  }, [inView]);

  return (
    <div
      className="flex flex-col items-center justify-center h-screen relative"
      id="home"
    >
      <div className="home  flex items-center justify-center  text-[#fff] flex-col w-full h-screen"></div>
      <div
        ref={ref}
        className={`flex flex-col items-center justify-center gap-8  text-white absolute home-fade-up`}
      >
        <div className={`flex flex-col gap-8  ${inView ? "animate" : ""} p-2`}>
          <p className="h1 font-normal text-[20px] text-center"> HELLO</p>

          <p className="h1 sm:font-extrabold font-bold text-[55px] text-center leading-none">
            I am Dave.
          </p>

          <p className="h1 font-semibold text-[22px] text-center">
            Visual Designer & Full-Stack Developer
          </p>
          <div className="w-full">
            <SocialMedia />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeComponent;
