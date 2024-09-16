function Images({ image }) {
  return (
    <img
      src={image}
      alt=""
      className="w-[6rem] h-[6rem] flex-grow object-contain opacity-60 hover:scale-105 hover:opacity-80 cursor-pointer transition-all duration-500 ease-in-out"
    />
  );
}

export default Images;
