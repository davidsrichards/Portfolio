import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-scroll";

function Home() {
  const { active } = useSelector((state) => state.slice);

  return (
    <Link
      to="home"
      className={`hm cursor-pointer ${active === "home" && "active"}`}
      smooth={true}
      duration={500}
    >
      Home
    </Link>
  );
}

export default Home;
