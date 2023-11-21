import BannerCard from "./BannerCard";
import Slider from "react-slick";

const bannerData = [
  {
    event: " BREAKPOINT 2023",
    title: "Breakpoint Starts With Community Keynote",
    desc: "Community luminaries like Solana Labs’ Anatoly Yakovenko, Helius’ Mert Mumtaz, and the Solana Foundation’s Dan Albert look back at 2023, and forward to the rest of Breakpoint.",
    image: "keynote",
  },
  {
    event: " BREAKPOINT 2023",
    title: "Breakpoint Starts With Community Keynote",
    desc: "Community luminaries like Solana Labs’ Anatoly Yakovenko, Helius’ Mert Mumtaz, and the Solana Foundation’s Dan Albert look back at 2023, and forward to the rest of Breakpoint.",
    image: "keynote",
  },
  {
    event: " BREAKPOINT 2023",
    title: "Breakpoint Starts With Community Keynote",
    desc: "Community luminaries like Solana Labs’ Anatoly Yakovenko, Helius’ Mert Mumtaz, and the Solana Foundation’s Dan Albert look back at 2023, and forward to the rest of Breakpoint.",
    image: "keynote",
  },
];

const Banner = () => {
  return (
    <div className="bg-black h-[336.09px]   ">
      <div className=" container mb-12 px-5">
        <div className="bg-[#1b1622] p-10 h-full rounded-3xl  -z-10">
          <Slider autoplay={true} autoplaySpeed={1000} dots={true}>
            {bannerData.map((v, i) => (
              <BannerCard
                key={i}
                event={v.event}
                title={v.title}
                desc={v.desc}
                image={v.image}
              />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Banner;
