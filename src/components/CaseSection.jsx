import BlackButton from "./BlackButton";

import CaseComp from "./CaseComp";

const CaseSection = () => {
  return (
    <div className="bg-black h-[808.94px] ">
      <div className=" h-[809.25px] container ">
        <div className=" mb-8 flex justify-between items-center px-5 h-[46.19px]">
          <div className="text-[42px] text-white">Case Studies</div>
          <button className="bg-black border transition hover:-translate-y-1 hover:bg-white hover:text-black border-white px-6 py-3  text-white rounded-full">
            Go to Case Studies
          </button>
        </div>
        <div className="flex mb-4 items-center px-5">
          <div className=" w-[580px] h-[326.25px] rounded-l-2xl relative">
            <img
              className="absolute top-0 left-0 object-cover rounded-l-2xl"
              src="./images/helium.webp"
              alt="helium"
            />
          </div>
          <div className="bg-solana-400 w-[580px] h-[326.25px] rounded-r-2xl py-[55px] px-[50px] text-[36px] text-white self-center ">
            Helium brings real-world 5G networks on Solana
          </div>
        </div>
        <div className="flex">
          <CaseComp
            desc="GainForest brings transparency to climate preservation efforts"
            image="gainforest"
          />
          <CaseComp
            desc="Hivemapper decentralizes mapping with better real-time data and community incentives"
            image="hivemapper"
          />
          <CaseComp
            desc="ASICS builds loyalty program with Solana Pay"
            image="asics"
          />
        </div>
      </div>
    </div>
  );
};

export default CaseSection;
