import { useSelector } from "react-redux";
import { Link } from "react-scroll";

function Contact() {
  const { active } = useSelector((state) => state.slice);
  return (
    <Link
      className={`hm  ${active === "contact" && "active"} cursor-pointer`}
      to="contact"
      smooth={true}
      duration={500}
    >
      Contact
    </Link>
  );
}

export default Contact;
