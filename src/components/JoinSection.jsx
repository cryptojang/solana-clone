import Slider from "react-slick";
import SlideCard from "./SlideCard";

const bannerData = [
  {
    title: "Solana Miami",
    desc: "New and native users came to Solana Miami in April 2022 to build, learn, and see real world Solana use cases.",
    image1: "miami.webp",
  },

  {
    title: " Seoul Hacker House",
    desc: "Let’s build! Local devs came to the Solana Foundation’s Seoul Hacker House ahead of Korea Blockchain Week 2022.",
    image1: "seoul2.webp",
    width: "w-[800px]",
  },
  {
    title: " New York Hacker House",
    desc: "Start spreading the news. Lines were out the door at the Solana Foundation’s New York Hacker House in March 2022.",
    image2: "nyc.webp",
    title2: "48,000",
    desc2: "DEVELOPERS BUILDING DURING SOLANA HACKATHONS",
    color: "text-emerald-300",
  },

  {
    title: "Seoul Hacker House",
    desc: "Let’s build! Local devs came to the Solana Foundation’s Seoul Hacker House ahead of Korea Blockchain Week 2022.",
    image1: "seoul.webp",
  },
  {
    title: " Seoul Hacker House",
    desc: "Let’s build! Local devs came to the Solana Foundation’s Seoul Hacker House ahead of Korea Blockchain Week 2022.",
    image1: "seoul2.webp",
    width: "w-[800px]",
  },
  {
    title: "Solana Mobile Announcement",
    desc: "Users, developers, and reporters were on the scene when Solana Labs announced the Solana Mobile Stack and Saga device in June 2022.",
    image2: "mobile.webp",
    title2: "11,000",
    desc2: "SOLANA HACKER HOUSE PARTICIPANTS",
    color: "text-solana-500",
    reverse: "flex-col-reverse",
  },
];

const JoinSection = () => {
  return (
    <div className=" h-[914.56px] relative ">
      <img
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        src="./images/glow-lines-alt.webp"
        alt="glow-lines-alt"
      />
      <div className=" h-[46.19px] container px-5 mb-8 text-[36px] text-white font-semibold">
        Join a thriving community.
      </div>
      <div className=" h-[422px] ">
        <Slider
          className="slider variable-width"
          slidesToShow={1}
          autoplay={true}
          slidesToScroll={1}
          speed={5000}
          autoplaySpeed={0}
          dots={true}
          infinite={true}
          pauseOnHover={true}
          cssEase="linear"
          variableWidth={true}
        >
          {bannerData.map((v, i) => (
            <SlideCard
              key={i}
              title={v.title}
              desc={v.desc}
              image1={v.image1}
              image2={v.image2}
              width={v.width}
              title2={v.title2}
              desc2={v.desc2}
              color={v.color}
              reverse={v.reverse}
            />
          ))}
        </Slider>
      </div>
      <div className=" h-[414.38px] container px-5 py-16">
        <div className=" h-full flex flex-col items-center text-center">
          <ul className="text-white text-[42px] mb-4 leading-snug font-semibold ">
            <li>It's time to join the thousands of creators, artists,</li>
            <li>and developers using Solana.</li>
          </ul>
          <div>
            <button className="bg-gradient-to-r from-fuchsia-400 to-purple-900 transition hover:-translate-y-1 hover:bg-white hover:text-black hover:bg-none text-white w-[189.83px] h-[53.48px]  rounded-full">
              START BUILDING
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinSection;
