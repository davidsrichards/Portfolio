import { useEffect, useState } from "react";
import "../Count.css";
function GlobalCount({ image, count, text }) {
  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <div className="text-[40px]">{image}</div>
      <h3 className="count">{count}</h3>
      <p className="text-[16px]">{text}</p>
    </div>
  );
}

export default GlobalCount;
