import { useSelector } from "react-redux";
import { Link } from "react-scroll";

function Testimonial() {
  const { active } = useSelector((state) => state.slice);
  return (
    <Link
      className={`hm cursor-pointer ${active === "testimony" && "active"}`}
      to="testimony"
      smooth={true}
      duration={500}
    >
      Testimonial
    </Link>
  );
}

export default Testimonial;
