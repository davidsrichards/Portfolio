import { useEffect, useState } from "react";
import Button from "./NavigationRoutes/Links/Button";
import MyImage from "./NavigationRoutes/Links/MyImage";
import NavigationRoutes from "./NavigationRoutes/NavigationRoutes";
import { useDispatch, useSelector } from "react-redux";
import { checkScrollAction } from "../../Redox/Features/Slice/Slice";
import Mobile from "./NavigationRoutes/Mobile/Mobile";

function Navigation() {
  const dispatch = useDispatch();
  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position > 10) dispatch(checkScrollAction(true));
    else {
      dispatch(checkScrollAction(false));
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  ///

  const { height } = useSelector((state) => state.slice);
  const { openMobile } = useSelector((state) => state.slice);

  return (
    <nav
      className={`flex items-center justify-center p-4 fixed z-30 top-0 w-full py-8 bg-${
        height || openMobile ? "white" : "transparent"
      } text-black z-10`}
    >
      <MyImage />
      <NavigationRoutes />
      <Button />
      <Mobile />
    </nav>
  );
}

export default Navigation;
