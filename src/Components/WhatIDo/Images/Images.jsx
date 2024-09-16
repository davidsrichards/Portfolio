import { MdOutlineDesktopWindows } from "react-icons/md";
import GlobalImage from "./GlobalImage";
import { LuPencilLine } from "react-icons/lu";
import { IoCarSport } from "react-icons/io5";
import { SlGraph } from "react-icons/sl";
import { TbSettingsStar } from "react-icons/tb";
import { FaPencilRuler } from "react-icons/fa";
import Urls from "./Url";
import Url2 from "./Url2";
import Url3 from "./Url3";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import "./Image.css";

function Images() {
  const ref = useRef();
  const inView = useInView(ref, { once: false });
  useEffect(() => {
    if (inView) {
      ref.current.classList.add("animate");
    } else {
      ref.current.classList.remove("animate");
    }
  }, [inView]);
  return (
    <div ref={ref} className="fade-out">
      <div
        className={`${
          inView ? "animate" : ""
        } grid lg:grid-cols-3 grid-cols-1 gap-6`}
      >
        <GlobalImage
          image={<Urls />}
          title={"Create a Plan"}
          text={
            "Before diving into any project, i believe in setting up a solid foundation for development."
          }
          className={
            "processed-item  p-4 py-20 w-full big before:content-['1'] flex items-center justify-center"
          }
        />
        <GlobalImage
          image={<Url2 />}
          title={"Start Work"}
          text={
            "With a clear plan in hand, i'll start building your web application ensure your vision is fulfilled."
          }
          className={
            "processed-item  p-4 py-20 w-full big before:content-['2']  flex items-center justify-center"
          }
        />
        <GlobalImage
          image={<Url3 />}
          title={"Hand over Work"}
          text={
            "Once a project is complete, i'll ensure your hapinness. your satisfaction, our priority."
          }
          className={
            "processed-item  p-4 py-20 w-full big before:content-['3']  flex items-center justify-center"
          }
        />
      </div>
    </div>
  );
}

export default Images;
