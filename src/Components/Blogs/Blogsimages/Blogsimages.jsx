import GlobalImages from "./GlobalImages";

function Blogsimages() {
  return (
    <div className="grid lg:grid-cols-3 gap-6 sm:grid-cols-2">
      <GlobalImages
        image={
          "https://john-react.wethemez.com/static/media/post-img1.810b84e779b0942b548b.jpg"
        }
        date={"Jan 14"}
        title={"Contrary to popular belief"}
        content={
          "Challenging conventions, one line of code at a time. Explore my portfolio, where innovation meets functionality, and discover the art of redefining possibilities in full-stack development."
        }
      />
      <GlobalImages
        image={
          "https://john-react.wethemez.com/static/media/post-img2.beacd30c6fa7e65f7fd6.jpg"
        }
        date={"Mar 30"}
        title={"Behind the color"}
        content={
          "Where pixels meet purpose. Dive into my world of React JS and Node JS expertise, where vibrant interfaces conceal sleek, efficient code. Uncover the story behind the screen."
        }
      />
      <GlobalImages
        image={
          "https://john-react.wethemez.com/static/media/post-img3.265a5942385356549154.jpg"
        }
        title={"Post with Sidebar"}
        date={"Apr 04"}
        content={
          "Code, craft, and creativity. Browse my curated collection of projects, where technical expertise meets design finesse. Your sidebar to innovative full-stack solutions starts here."
        }
      />
    </div>
  );
}

export default Blogsimages;
