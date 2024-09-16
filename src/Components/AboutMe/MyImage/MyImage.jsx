import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import myImage from "../../../assets/Images/my-image.jpg";

function MyImage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });

  useEffect(() => {
    if (inView) {
      ref.current.classList.add("animate");
    } else {
      ref.current.classList.remove("animate");
    }
  }, [inView]);

  return (
    <div ref={ref} className="overflow-hidden  about-image">
      <img
        src={myImage}
        initial="hidden"
        animate={"visible"}
        alt=""
        className={`${inView ? "animate" : ""}`}
      />
    </div>
  );
}

export default MyImage;

/* 
src="https://john-react.wethemez.com/static/media/apporoach_man_img.e9e6f7bb9e65aaf55624.png" */
