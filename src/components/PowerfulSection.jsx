import BlackButton from "./BlackButton";
import GradientButton from "./GradientButton";
import LogoImage from "./LogoImage";

const PowerfulSection = () => {
  return (
    <div className=" h-[745.78px] min-w-screen  relative">
      <img
        className="absolute top-0 left-0 w-full h-full -z-10 object-cover  "
        src="./images/solana-ring.webp"
        alt="solana-ring"
      />
      <div className="  h-[665.78px] container pt-[190px] pb-[120px] px-[20px]">
        <div className=" h-full">
          <ul className="text-7xl font-semibold d h-[151.2px] mb-4 flex flex-col items-center text-white">
            <li>Powerful for Developers.</li>
            <li>Fast for everyone.</li>
          </ul>

          <ul className="h-[118.57px] flex flex-col items-center text-[21px] text-white justify-center">
            <li>
              Bring blockchain to the people, Solana supports experiences for
            </li>
            <li>power users, new consumers, and everyone in between.</li>
          </ul>

          <div className="flex justify-center ">
            <GradientButton />
            <BlackButton />
          </div>
        </div>
      </div>
      <div className=" h-[82.09px] mb-8 container text-[#618adc]">
        <div className="h-[16.8px] mb-2 text-center ">
          POWERING TOOLS AND INTEGRATIONS FROM COMPANIES ALL AROUND THE WORLD
        </div>
        <ul className="px-5 flex justify-between">
          <LogoImage image="brave" />
          <LogoImage image="circle" />
          <LogoImage image="discord" />
          <LogoImage image="google" />
          <LogoImage image="jump" />
          <LogoImage image="lollapalooza" />
          <LogoImage image="magiceden" />
          <LogoImage image="meta" />
          <LogoImage image="shopify" />
          <LogoImage image="stripe" />
        </ul>
      </div>
    </div>
  );
};

export default PowerfulSection;
