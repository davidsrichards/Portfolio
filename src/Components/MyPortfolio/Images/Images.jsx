import { useEffect, useState } from "react";
import ContentItem from "./ContentItem";
import "./Images.css";
function Images() {
  return (
    <div className="main grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1  gap-4 relative ">
      <div className="flex relative div group/item">
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-gray-400 z-10 child">
          <ContentItem />
        </div>
        <img
          src="https://john-react.wethemez.com/static/media/1.97dc87ffb3cbab1a5dea.jpg"
          alt=""
          className="grow img"
        />
      </div>
      {/*  */}
      <div className="flex relative div group/item">
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-gray-400 z-10 child">
          <ContentItem />
        </div>
        <img
          src="https://john-react.wethemez.com/static/media/2.3a93add3cfdfa088a215.jpg"
          alt=""
          className="grow"
        />
      </div>
      {/*  */}
      <div className="lg:row-span-2 w-full flex lg:col-span-2 relative div group/item">
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-gray-400 z-10 child">
          <ContentItem />
        </div>
        <img
          src="https://john-react.wethemez.com/static/media/9.6ac331c0db7a1f5d7fea.jpg"
          alt="image"
          className="lg:flex-grow-1 grow"
        />
      </div>

      {/*  */}
      <div className="lg:row-span-2 flex lg:col-span-2 relative div group/item">
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-gray-400 z-10 child">
          <ContentItem />
        </div>
        <img
          src="https://john-react.wethemez.com/static/media/10.c5c0717d0852dc03d330.jpg"
          alt=""
          className="grow"
        />
      </div>
      <div className="flex relative div group/item">
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-gray-400 z-10 child">
          <ContentItem />
        </div>
        {/*  */}
        <img
          src="https://john-react.wethemez.com/static/media/3.2ad4a5be9b80c69502a1.jpg"
          alt=""
          className="grow"
        />
      </div>
      {/*  */}
      <div className="flex relative div group/item">
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-gray-400 z-10 child">
          <ContentItem />
        </div>
        <img
          src="https://john-react.wethemez.com/static/media/4.358230039367084f9f30.jpg"
          alt="image"
          className="grow"
        />
      </div>
    </div>
  );
}

export default Images;

/* https://john-react.wethemez.com/static/media/1.97dc87ffb3cbab1a5dea.jpg
https://john-react.wethemez.com/static/media/2.3a93add3cfdfa088a215.jpg
https://john-react.wethemez.com/static/media/9.6ac331c0db7a1f5d7fea.jpg
https://john-react.wethemez.com/static/media/10.c5c0717d0852dc03d330.jpg
https://john-react.wethemez.com/static/media/3.2ad4a5be9b80c69502a1.jpg
https://john-react.wethemez.com/static/media/4.358230039367084f9f30.jpg */
