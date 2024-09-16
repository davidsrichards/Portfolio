import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import "./GlobalTitle.css";

function GlobalTitle({ title, content }) {
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
    <div
      ref={ref}
      className="flex items-center justify-center flex-col gap-4 title-fade-up py-4"
    >
      <div
        className={`${
          inView ? "animate" : ""
        } flex flex-col items-center justify-center pb-4 w-full`}
      >
        <h1 className="title text-black text-center sm:font-extrabold font-bold">
          {title}
        </h1>
        <p className="p sm:w-3/4 w/3/3  text-center">{content}</p>
        <hr className="w-14  h-[2px] px-12 bg-slate-400" />
      </div>
    </div>
  );
}

export default GlobalTitle;
