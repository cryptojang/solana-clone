const BannerCard = ({ event, title, desc, image }) => {
  return (
    <div className="flex justify-between">
      <div className=" w-[465px] h-[250px] rounded-md relative">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={`./images/${image}.webp`}
          alt={image}
        />
      </div>
      <div className=" w-[540px] h-[250px] flex flex-col items-center justify-center ">
        <span className="bg-gradient-to-r from-emerald-400 via-cyan-300 to-blue-400 py-[3px] px-[10px] rounded-full text-xs text-[#111111]">
          {event}
        </span>
        <h2 className="mt-3 mb-2 text-xl text-white">{title}</h2>
        <div className="text-center text-sm text-[#cccccc] mb-6">{desc}</div>
        <button className="py-[10px] px-[21px] bg-[#1b1622]  border-2 border-[#cccccc] text-white rounded-full">
          READ
        </button>
      </div>
    </div>
  );
};

export default BannerCard;
