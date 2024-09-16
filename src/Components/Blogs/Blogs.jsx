import { useEffect, useRef } from "react";
import GlobalTitle from "../GlobalTitle/GlobalTitle";
import Blogsimages from "./Blogsimages/Blogsimages";
import { useInView } from "framer-motion";
import { useDispatch } from "react-redux";
import { checkActiveLink } from "../../Redox/Features/Slice/Slice";

function Blogs() {
  const dispatch = useDispatch();
  const ref = useRef();
  const inView = useInView(ref, { once: false });
  useEffect(() => {
    if (inView) {
      dispatch(checkActiveLink("blogs"));
      ref.current.classList.add("animate");
    } else {
      ref.current.classList.remove("animate");
    }
  }, [inView]);
  return (
    <div className="bg-secondary sm:p-12 p-2 flex flex-col space" id="blogs">
      <GlobalTitle
        title={"Our Blog"}
        content={
          "Insights, innovations, and stories from the intersection of code and creativity. Stay up-to-date with the latest trends."
        }
      />
      <div ref={ref} className={`${inView && "animate"}`}>
        <Blogsimages />
      </div>
    </div>
  );
}

export default Blogs;
