import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { useDispatch } from "react-redux";
import { checkActiveLink } from "../../Redox/Features/Slice/Slice";
import { LuDot } from "react-icons/lu";

function GlobalImage({ sliders }) {
  const dispatch = useDispatch();
  const [trace, setTrace] = useState(0);
  const ref = useRef();
  const inView = useInView(ref, { once: false });

  useEffect(() => {
    if (inView) {
      dispatch(checkActiveLink("testimony"));
      ref.current.classList.add("animate");
      const timeInterval = setInterval(() => {
        if (trace < sliders.length - 1) {
          setTrace((t) => t + 1);
        }
      }, 3000);
      return () => {
        clearInterval(timeInterval);
      };
    } else {
      ref.current.classList.remove("animate");
    }
  }, [inView, trace]);

  useEffect(() => {
    if (trace === sliders.length - 1) {
      setTimeout(() => {
        setTrace(0);
      }, 3000);
    }
  }, [trace]);

  // handle click

  const handleClick = (index) => {
    setTrace(index);
  };

  return (
    <div
      ref={ref}
      className={` w-full h-full flex items-center justify-center flex-col testimony-container ${
        inView && "animate"
      }`}
    >
      <div className="flex flex-col items-center justify-center  w-[10rem] h-[10rem] overflow-hidden p-4 rounded-full border-2 bg-[#fff]">
        <img
          src={sliders[trace].url}
          alt=""
          className="object-contain w-[8rem] rounded-full object-center"
        />
      </div>
      <div className="flex flex-col items-center justify-center mt-4">
        <h2 className="text-center head leading-3">{sliders[trace].name}</h2>
        <h3 className="text-center role">{sliders[trace].job}</h3>
      </div>
      <div className="sm:w-3/4 w-3/3 p-2">
        <p className="p text-center">{sliders[trace].content}</p>
      </div>
      <div className="flex">
        {sliders.map((c, i) => (
          <div key={i} className="">
            <LuDot
              className="text-[4rem] cursor-pointer hover:text-gray-400"
              onClick={() => handleClick(i)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default GlobalImage;
