import GlobalImage from "./GlobalImage";
import "./Testimony.css";
import { useState } from "react";
function Testimony() {
  const [sliders, setSliders] = useState([
    {
      url: "https://john-react.wethemez.com/static/media/slider2.69c34af504dd9885286c.png",
      name: "Mark Davis",
      job: "Founder of GreenCycle",
      content:
        "working with Dave was a game-changer for our start up. their expertise in full-stack development helped us launch a scalable and user-friendly platform.",
    },
    {
      url: "https://john-react.wethemez.com/static/media/our-coaches-2.cdb866d2b30e22377a69.jpg",
      name: "Sarah Lee",
      job: "CEO of FinTech Solution",
      content:
        "Dave is a true professional and a master of their craft. they deliver a high-quality web application that meets our strict security and performance requirements.",
    },
    {
      url: "https://john-react.wethemez.com/static/media/our-coaches-7.9fc88f76d47afd4c2013.jpg",
      name: "Emily Patel",
      job: "Owner of E-commerce Store",
      content:
        "i was impressed by Dave's ability to understand our unique E-commerce needs and deliver a customized solution that boosted our online sales. their knowledge was evident on the fast and responsive website they built for us.",
    },
  ]);
  return (
    <div
      className="flex flex-col items-center justify-center h-screen relative"
      id="testimony"
    >
      <div className="testimony  flex items-center justify-center  text-[#fff] flex-col w-full h-screen"></div>
      <div
        className={`flex flex-col items-center justify-center gap-8  text-white absolute overflow-hidden  w-full h-full`}
      >
        <GlobalImage sliders={sliders} />
      </div>
    </div>
  );
}

export default Testimony;
