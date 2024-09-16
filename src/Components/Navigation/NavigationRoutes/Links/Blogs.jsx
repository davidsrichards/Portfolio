import { useSelector } from "react-redux";
import { Link } from "react-scroll";

function Blogs() {
  const { active } = useSelector((state) => state.slice);
  return (
    <Link
      className={`hm cursor-pointer ${active === "blogs" && "active"}`}
      to="blogs"
      smooth={true}
      duration={500}
    >
      Blogs
    </Link>
  );
}

export default Blogs;
