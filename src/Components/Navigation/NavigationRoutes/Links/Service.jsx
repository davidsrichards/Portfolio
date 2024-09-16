import { useSelector } from "react-redux";
import { Link } from "react-scroll";

function Service() {
  const { active } = useSelector((state) => state.slice);
  return (
    <Link
      className={`hm cursor-pointer ${active === "service" && "active"}`}
      to={"service"}
      smooth={true}
      duration={500}
    >
      Service
    </Link>
  );
}

export default Service;
