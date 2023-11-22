import Banner from "./components/Banner";
import CaseSection from "./components/CaseSection";
import Header from "./components/Header";
import NumberSection from "./components/NumberSection";
import PowerfulSection from "./components/PowerfulSection";

const App = () => {
  return (
    <>
      <Header />
      <PowerfulSection />
      <Banner />

      <NumberSection />
      <CaseSection />
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
