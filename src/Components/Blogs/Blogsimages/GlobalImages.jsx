import { Link } from "react-scroll";

function GlobalImages({ image, date, title, content }) {
  return (
    <div className="flex flex-col gap-4 bg-[#fff]  border-[#ebebeb] p-4 group/item">
      <div className="relative">
        <img src={image} alt="" className="" />
        <div className="bg-[#fff] absolute top-4 right-4 p-[8px] flex flex-col items-center justify-center font-bold text-black rounded-md group/item group-hover/item:bg-black group-hover/item:text-white">
          <span className="w-1/2 leading-6 text-center">{date}</span>
        </div>
      </div>
      <ul
        role="list"
        className="flex divide-x-[1.3px] divide-slate-800 gap-4 leading-4"
      >
        <li>BY : Tasnim</li>
        <li className="px-4">comment</li>
      </ul>
      <h2 className="text-[#494949] font-semibold leading-[28px]">{title}</h2>
      <p className="p">{content}</p>
      {/* <Link
        to={"home"}
        className="text-[##797979] text-[14px] font-semibold font-['Montserrat'] cursor-pointer"
        smooth
        duration={500}
      >
        Read More
      </Link> */}
    </div>
  );
}

export default GlobalImages;
