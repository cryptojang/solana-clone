const SlideCard = ({
  image1,
  image2,
  title,
  desc,
  width,
  title2,
  desc2,
  color,
  reverse,
}) => {
  return (
    <>
      {image2 ? (
        <div
          className={`w-[300px] h-[422px] rounded-2xl flex ${
            reverse ? reverse : "flex-col"
          } justify-between ml-5`}
        >
          <div className="relative">
            <img
              className={`absolute ${
                reverse ? "bottom-0" : "top-0"
              } left-0  object-cover hover:-z-20 rounded-2xl`}
              src={`./images/${image2}`}
              alt={image2}
            />
            <div className="bg-black bg-opacity-50 w-full h-full absolute top-0 left-0 -z-10 text-white rounded-2xl p-[30px] flex flex-col justify-start ">
              <div className="text-xl mb-4">{title}</div>
              <div>{desc}</div>
            </div>
          </div>

          <div className=" bg-solana-400 text-white h-[200px] rounded-2xl p-4">
            <div className=" flex flex-col p-4    ">
              <div
                className={`mt-8 mb-2 text-4xl ${color} text-center font-semibold`}
              >
                {title2}
              </div>
              <div className="text-center text-xs">{desc2}</div>
            </div>
          </div>
        </div>
      ) : width ? (
        <div>
          <div className={`${width} h-[422px] rounded-2xl relative ml-5`}>
            <img
              className="absolute top-0 left-0 w-full h-full  object-cover hover:-z-20 rounded-2xl"
              src={`./images/${image1}`}
              alt={image1}
            />
            <div className="bg-black bg-opacity-50 w-full h-full absolute top-0 left-0 -z-10 text-white rounded-2xl p-[30px] flex flex-col justify-end ">
              <div className="text-xl mb-4">{title}</div>
              <div>{desc}</div>
            </div>
          </div>
        </div>
      ) : (
        <div className=" w-[300px] h-[422px] rounded-2xl relative ml-5">
          <img
            className="absolute top-0 left-0 w-full h-full  object-cover hover:-z-20 rounded-2xl"
            src={`./images/${image1}`}
            alt={image1}
          />
          <div className="bg-black bg-opacity-50 w-full h-full absolute top-0 left-0 -z-10 text-white rounded-2xl p-[30px] flex flex-col justify-end ">
            <div className="text-xl mb-4">{title}</div>
            <div>{desc}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default SlideCard;
