import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function FooterSocialMedia() {
  const ref = useRef();
  const inView = useInView(ref, { once: false });

  useEffect(() => {
    if (inView) {
      ref.current.classList.add("first");
      ref.current.classList.add("second");
      ref.current.classList.add("third");
      ref.current.classList.add("fourth");
    } else {
      ref.current.classList.remove("first");
      ref.current.classList.remove("second");
      ref.current.classList.remove("third");
      ref.current.classList.remove("fourth");
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className="flex items-center justify-center gap-4 w-full social"
    >
      <div
        className={`ring-1 ring-white bg-opacity-80 p-2 rounded-full cursor-pointer text-[18px] text-white hover:text-black hover:bg-white  ${
          inView ? "first" : ""
        }`}
      >
        <Link to={"//www.facebook.com/profile.php?id=100036280042092"}>
          <TiSocialFacebook />
        </Link>
      </div>
      <div
        className={`ring-1 ring-white bg-opacity-80 p-2 rounded-full cursor-pointer text-[18px] text-white hover:text-black hover:bg-white ${
          inView ? "second" : ""
        }`}
      >
        <Link to={"https://x.com/Davey323395?s=09"}>
          <FaTwitter />
        </Link>
      </div>
      <div
        className={`ring-1 ring-white bg-opacity-80 p-2 rounded-full cursor-pointer text-[18px] text-white hover:text-black hover:bg-white ${
          inView ? "third" : ""
        }`}
      >
        <Link to={"https://wa.link/p6r0j8"}>
          <IoLogoWhatsapp />
        </Link>
      </div>
      <div
        className={`ring-1 ring-white bg-opacity-80 p-2 rounded-full cursor-pointer text-[18px] text-white hover:text-black hover:bg-white ${
          inView ? "fourth" : ""
        }`}
      >
        <Link
          to={
            "https://www.linkedin.com/in/dauda-richard-6518892b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          }
        >
          <FaLinkedinIn />
        </Link>
      </div>
    </div>
  );
}

export default FooterSocialMedia;
