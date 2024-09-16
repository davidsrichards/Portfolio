import { useEffect, useRef } from "react";
import Images from "./Images/Images";
import Title from "./Title/Title";
import "./WhatIDo.css";
import { useInView } from "framer-motion";
import { useDispatch } from "react-redux";
import { checkActiveLink } from "../../Redox/Features/Slice/Slice";
function WhatIDo() {
  const dispatch = useDispatch();
  const ref = useRef();
  const inView = useInView(ref, { once: false });
  useEffect(() => {
    if (inView) {
      dispatch(checkActiveLink("service"));
    }
  }, [inView]);
  return (
    <div ref={ref} className="bg-secondary sm:p-12 p-2 px-2 space" id="service">
      <Title />
      <Images />
    </div>
  );
}

export default WhatIDo;
