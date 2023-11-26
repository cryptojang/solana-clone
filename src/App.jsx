import Banner from "./components/Banner";
import BuildSection from "./components/BuildSection";
import CaseSection from "./components/CaseSection";
import Header from "./components/Header";
import JoinSection from "./components/JoinSection";
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
      <BuildSection />

      <JoinSection />
      <footer className="bg-yellow-100  h-[424.5px] mt-20 py-20 ">
        footer
      </footer>
    </>
  );
};

export default App;
