import { IoMenu } from "react-icons/io5";
import { FaRegTimesCircle } from "react-icons/fa";
import { Link } from "react-scroll";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openMobileAction } from "../../../../Redox/Features/Slice/Slice.js";

function Mobile() {
  const dispatch = useDispatch();
  const [showClose, setShowClose] = useState(false);
  const { height } = useSelector((state) => state.slice);
  const { openMobile } = useSelector((state) => state.slice);
  return (
    <div className="lg:hidden block p-4">
      <div className={`absolute right-12 top-8 ${!height && "text-[#fff]"}`}>
        <IoMenu
          onClick={() => {
            setShowClose((p) => !p);
            dispatch(openMobileAction(true));
          }}
          className={`${
            !showClose ? "w-[1.8rem] h-[1.8rem]" : "w-0 h-0"
          } transition-all duration-500 ease-in-out cursor-pointer`}
        />
      </div>
      <div className="absolute right-20  w-0 h-0 top-8">
        <FaRegTimesCircle
          onClick={() => {
            setShowClose((p) => !p);
            dispatch(openMobileAction(false));
          }}
          className={`${
            showClose ? "w-[1.8rem] h-[1.8rem]" : "w-0 h-0"
          } transition-all duration-500 ease-in-out cursor-pointer`}
        />
      </div>
      <div
        className="absolute bottom-0
       w-full left-0 top-[6.02rem] items-center justify-center"
      >
        <ul
          className={`${
            showClose
              ? "flex flex-col gap-2 bg-gray-400 bg-opacity-85 divide-y-2 text-white transition-all duration-500 ease-in-out w-full"
              : "w-0 overflow-hidden transition-all duration-500 ease-in-out"
          } transition-all duration-500 ease-in-out`}
          role="list"
        >
          <Link to="home" smooth duration={500}>
            <li className=" hover:bg-gray-300 p-2 hover:text-black transition-all duration-700 ease-out cursor-pointer">
              Home
            </li>
          </Link>
          <Link to="about" smooth duration={500}>
            <li className=" hover:bg-gray-300 p-2 hover:text-black transition-all duration-700 ease-out cursor-pointer">
              About
            </li>
          </Link>

          <Link to="service" smooth duration={500}>
            <li className=" hover:bg-gray-300 p-2 hover:text-black transition-all duration-700 ease-out cursor-pointer">
              Service
            </li>
          </Link>

          <Link to="portfolio" smooth duration={500}>
            <li className=" hover:bg-gray-300 p-2 hover:text-black transition-all duration-700 ease-out cursor-pointer">
              Portfolio
            </li>
          </Link>
          <Link to="contact" smooth duration={500}>
            <li className=" hover:bg-gray-300 p-2 hover:text-black transition-all duration-700 ease-out cursor-pointer">
              Contact
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Mobile;
