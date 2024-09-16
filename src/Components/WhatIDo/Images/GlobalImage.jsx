import Urls from "./Url";
import "./Image.css";

function GlobalImage({ image, title, text, className, cont }) {
  return (
    <div className="w-full  relative items-center">
      <div className={className}>
        <div className="round border-[1rem] flex flex-col items-center justify-center rounded-full h-[300px] w-[300px]  px-[20px] gap-3 border-gray-400  relative">
          {image}
          <h3 className="text-[#0c0c0c] font-semibold text-[26px] text-center">
            {title}
          </h3>
          <p className="text-[#60677e] text-[18px] leading-[28px] text-center p overflow-hidden">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

export default GlobalImage;
