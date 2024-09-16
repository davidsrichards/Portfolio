import { FaHeart } from "react-icons/fa";
<FaHeart />;
import { CiHeart } from "react-icons/ci";

import { IoIosSearch } from "react-icons/io";
function ContentItem() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className=" uppercase port-content-head">web design</h2>
      <div className="flex items-center gap-3 justify-center text-[1.5rem]">
        {" "}
        <div className="p-3 rounded-full bg-black text-white">
          <CiHeart />
        </div>
        <div className="p-3 rounded-full bg-black text-white">
          <IoIosSearch />
        </div>
      </div>
    </div>
  );
}

export default ContentItem;
