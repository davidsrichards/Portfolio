import "./MyPortfolio.css";
import Button from "../Navigation/NavigationRoutes/Links/Button";
import Buttons from "./Buttons/Buttons";
import Images from "./Images/Images";
import GlobalTitle from "../GlobalTitle/GlobalTitle";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { checkActiveLink } from "../../Redox/Features/Slice/Slice";

function MyPortfolio() {
  const dispatch = useDispatch();
  const ref = useRef();
  const inView = useInView(ref, { once: false });
  useEffect(() => {
    if (inView) {
      dispatch(checkActiveLink("portfolio"));
      ref.current.classList.add("animate");
    } else {
      ref.current.classList.remove("animate");
    }
  }, [inView]);
  return (
    <div
      id="portfolio"
      ref={ref}
      className={`sm:p-12 p-2 px-2 flex flex-col space ${inView && "animate"}`}
    >
      <GlobalTitle
        title={"MY Portfolio"}
        content={"I love what I do. I take great pride in what I do."}
      />
      {/*    <Buttons /> */}
      <Images />
    </div>
  );
}

export default MyPortfolio;
