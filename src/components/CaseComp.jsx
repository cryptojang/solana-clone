import { FiArrowRightCircle } from "react-icons/fi";

const CaseComp = ({ desc, image }) => {
  return (
    <div className=" w-[400px] h-[372.5px] mb-4 px-5">
      <div className=" h-[202.5px] rounded-t-2xl relative">
        <img
          className="rounded-t-2xl absolute top-0 left-0 w-full h-full object-cover"
          src={`./images/${image}.webp`}
          alt={image}
        />
      </div>
      <div className="bg-solana-400 h-[170px] py-4 px-[18px] rounded-b-2xl flex text-[24px] text-white">
        <div>{desc}</div>
        <div>
          <FiArrowRightCircle />
        </div>
      </div>
    </div>
  );
};

export default CaseComp;
