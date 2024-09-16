import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

function SocialMedia() {
  return (
    <div className="flex items-center justify-center gap-4 w-full">
      <div className="bg-gray-700 bg-opacity-80 p-3 rounded-full cursor-pointer text-[20px] hover:text-black hover:bg-white">
        <Link to={"//www.facebook.com/profile.php?id=100036280042092"}>
          <TiSocialFacebook />
        </Link>
      </div>
      <div className="bg-gray-700 bg-opacity-80 p-3 rounded-full cursor-pointer text-[20px] hover:text-black hover:bg-white">
        <Link to={"https://x.com/Davey323395?s=09"}>
          <FaTwitter />
        </Link>
      </div>

      <div className="bg-gray-700 bg-opacity-80 p-3 rounded-full cursor-pointer text-[20px] hover:text-black hover:bg-white">
        <Link to={"https://wa.link/p6r0j8"}>
          <IoLogoWhatsapp />
        </Link>
      </div>
      <div className="bg-gray-700 bg-opacity-80 p-3 rounded-full cursor-pointer text-[20px] hover:text-black hover:bg-white">
        <Link
          to={
            "https://www.linkedin.com/in/dauda-richard-6518892b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          }
        >
          <FaLinkedinIn />
        </Link>
      </div>
    </div>
  );
}

export default SocialMedia;
