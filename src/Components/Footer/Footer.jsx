import { useEffect, useRef } from "react";
import "./Footer.css";
import FooterImage from "./FooterImage";
import FooterSocialMedia from "./FooterSocialMedia";
import { useInView } from "framer-motion";
import { useDispatch } from "react-redux";
import { checkActiveLink } from "../../Redox/Features/Slice/Slice";
function Footer() {
  const dispatch = useDispatch();
  const ref = useRef();
  const inView = useInView(ref, { once: false });
  useEffect(() => {
    if (inView) {
      dispatch(checkActiveLink("contact"));
    }
  }, [inView]);
  return (
    <footer
      ref={ref}
      className="bg-[#040c2c]  relative sm:p-12 p-2 py-12"
      id="contact"
    >
      <div className="flex items-center justify-center flex-col gap-3 w-full ">
        <FooterImage />
        <FooterSocialMedia />
        <div className="flex items-center justify-center gap-2">
          <span className="footer-content">Made with love by</span>
          <span className="text-[#fff]">Blazethemez</span>
        </div>
        <div className="leading-5 text-center">
          <span className="date">&copy; {new Date().getFullYear()}</span>&nbsp;
          <span className="date">Blazethemez - All Rights Reserved</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
