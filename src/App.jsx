import Header from "./components/Header";
import PowerfulSection from "./components/PowerfulSection";

const App = () => {
  return (
    <>
      <Header />

      <PowerfulSection />

      <div className="bg-green-100 h-[336.09px] mb-12 container">banner</div>
      <section className="bg-blue-100 container h-[1666.92px] py-[125px]">
        <div className="bg-red-100 h-[653.89px] pb-20 flex">
          <div className="bg-green-300 w-[600px] h-full">
            join a community of millions
          </div>
          <div className="bg-blue-300 w-[600px] h-full">numbers</div>
        </div>
        <div className=" bg-yellow-300 h-[699.03px] pt-16 mt-16 flex">
          <div className="bg-red-300 w-[400px] h-full">
            {" "}
            Made for mass adoption
          </div>
          <div className="bg-orange-300 w-[400px] h-full">Fast</div>
          <div className="bg-green-300 w-[400px] h-full">Decentralized</div>
        </div>
      </section>
      <div className="bg-purple-100 h-[809.25px] container px-5">
        case studies
      </div>
      <div className="bg-red-100 h-[812.48px] container px-5">
        build for growth
      </div>
      <div className="bg-orange-100 h-[914.56px] ">
        <div className="bg-blue-200 h-[46.19px] container px-5 mb-8">
          join a thriving community
        </div>
        <div className="bg-green-300 h-[422px]">slick cards</div>
        <div className="bg-red-300 h-[414.38px] container px-5 py-16">
          <div className="bg-blue-300 h-full"> start building</div>
        </div>
      </div>
      <footer className="bg-yellow-100  h-[424.5px] mt-20 py-20 ">
        footer
      </footer>
    </>
  );
};

export default App;
