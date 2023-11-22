import GrayButton from "./GrayButton";
import LogoImage from "./LogoImage";

const BuildSection = () => {
  return (
    <div className="bg-black h-[814.47px] py-[125px]">
      <div className="  container h-full px-5 ">
        <div className="mb-8 flex justify-between text-white">
          <div className="text-[32px] font-semibold">Build for growth.</div>
          <ul className="flex">
            <GrayButton title="Payments" />
            <GrayButton title="Gaming" />
            <GrayButton title="NFTs" />
            <GrayButton title="DeFi" />
            <GrayButton title="DAOs" />
          </ul>
        </div>
        <div className="flex">
          <div className="bg-blue-300 rounded-l-2xl w-[580px] h-[400px] relative">
            <img
              className="absolute top-0 left-0 w-full h-full object-cover rounded-l-2xl "
              src="./images/solanaPay.webp"
              alt="solanaPay"
            />
          </div>
          <div className="bg-solana-400 p-12 w-[580px] rounded-r-2xl">
            <div className="mb-6  h-[50px] relative">
              <img
                className="absolute top-0 left-0 h-full"
                src="./images/shopify-logo-and-name.svg"
                alt="shopify-logo-and-name"
              />
            </div>
            <div className="mb-4 text-[21px] text-white">
              Solana Pay is now available to millions of businesses as an
              approved app integration on Shopify. Solana Pay is built for
              immediate USDC transactions, fees that are fractions of a penny,
              and a net-zero environmental impact.
            </div>
            <div className="underline text-[21px] text-solana-500">
              Learn more about Payments on Solana
            </div>
          </div>
        </div>
        <div className="mt-5 flex items-center justify-between">
          <div className=" py-4 px-6 w-[278px] h-[62px]  ">
            <div className=" flex justify-center ">
              <LogoImage image="asics-logo.svg" size="w-[100px]" />
            </div>
          </div>
          <div className=" py-4 px-6 w-[278px] h-[62px]  ">
            <div className=" flex justify-center ">
              <LogoImage image="decaf.webp" size="h-[30px]" />
            </div>
          </div>
          <div className=" py-4 px-6 w-[278px] h-[62px]  ">
            <div className=" flex justify-center ">
              <LogoImage image="helio.svg" size="h-[30px]" />
            </div>
          </div>
          <div className=" py-4 px-6 w-[278px] h-[62px]  ">
            <div className=" flex justify-center ">
              <LogoImage image="tiplink.svg" size="h-[30px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildSection;
