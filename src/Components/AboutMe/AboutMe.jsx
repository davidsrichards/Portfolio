import AboutContent from "./AboutContent/AboutContent";
import MyImage from "./MyImage/MyImage";

function AboutMe() {
  return (
    <div className="grid lg:grid-cols-2 py-12 justify-items-center" id="about">
      <AboutContent />
      <MyImage />
    </div>
  );
}

export default AboutMe;
