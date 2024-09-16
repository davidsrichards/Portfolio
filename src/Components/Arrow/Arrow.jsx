import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

function Arrow() {
  const [height, setHeight] = useState(0);

  const handleHeight = () => {
    const currentHeight = window.pageYOffset;
    setHeight(currentHeight);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleHeight, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleHeight);
    };
  });

  return (
    <div>
      {height >= 200 && (
        <div
          className="fixed bottom-12 right-6 bg-gray-400 p-4 rounded-full text-[#fff] hover:bg-gray-500 hover:text-neutral-300 cursor-pointer transition-all duration-500 ease-out"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <FaArrowUp />
        </div>
      )}
    </div>
  );
}

export default Arrow;
