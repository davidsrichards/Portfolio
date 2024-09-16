import { useSelector } from "react-redux";
import { Link } from "react-scroll";

function Portfolio() {
  const { active } = useSelector((state) => state.slice);
  return (
    <Link
      className={`hm cursor-pointer ${active === "portfolio" && "active"}`}
      to="portfolio"
      smooth={true}
      duration={500}
    >
      Portfolio
    </Link>
  );
}

export default Portfolio;
