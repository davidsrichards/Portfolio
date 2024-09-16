import Images from "./Images/Images";
import GlobalTitle from "../GlobalTitle/GlobalTitle";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
function Trusted() {
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
    <div className="flex items-center justify-center flex-col sm:p-12 p-2 space">
      <GlobalTitle
        title={"Trusted by Great People"}
        content={
          "Collaborating with innovators and forward-thinkers, I've had the privilege of bringing ideas to life for remarkable clients and partners."
        }
      />

      <div
        className={`flex flex-nowrap gap-12 overflow-scroll  items-center justify-center w-full p-4 scroll-none ${
          inView ? "animate" : ""
        }`}
        ref={ref}
      >
        <Images
          image={
            "https://john-react.wethemez.com/static/media/4.132d2ea1d70e43dc9840.png"
          }
        />
        <Images
          image={
            "https://john-react.wethemez.com/static/media/5.a3790b5f3eaec1b061ce.png"
          }
        />
        <Images
          image={
            "https://john-react.wethemez.com/static/media/6.84e01e9cb8fa0cada9d3.png"
          }
        />
        <Images
          image={
            "https://john-react.wethemez.com/static/media/6.84e01e9cb8fa0cada9d3.png"
          }
        />
        <Images
          image={
            "https://john-react.wethemez.com/static/media/4.132d2ea1d70e43dc9840.png"
          }
        />
        <Images
          image={
            "https://john-react.wethemez.com/static/media/1.f662d821c72ce360b519.png"
          }
        />
      </div>
    </div>
  );
}

export default Trusted;
