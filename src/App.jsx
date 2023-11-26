import Banner from "./components/Banner";
import BuildSection from "./components/BuildSection";
import CaseSection from "./components/CaseSection";
import Footer from "./components/Footer";
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
      <Footer />
    </>
  );
};

export default App;
