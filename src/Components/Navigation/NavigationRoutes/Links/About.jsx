import { useSelector } from "react-redux";
import { Link } from "react-scroll";
function About() {
  const { active } = useSelector((state) => state.slice);
  return (
    <Link
      className={`hm cursor-pointer ${active === "about" && "active"}`}
      to="about"
      smooth={true}
      duration={500}
    >
      About
    </Link>
  );
}

export default About;
