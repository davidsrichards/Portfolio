import { Link } from "react-router-dom";

function AboutButton() {
  return (
    <div className=" grid sm:grid-cols-2 gap-2">
      <button className="btn ab-btn hover:text-[#fff]">
        <Link to={"https://wa.link/p6r0j8"}>Hire Me</Link>
      </button>
      <button className="btn ab-btn hover:text-[#fff]">Download CV</button>
    </div>
  );
}

export default AboutButton;
