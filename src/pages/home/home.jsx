import Footer from "../../components/footer";
import HeroSlider from "./heroSlider";
import Offs from "./offs";
import Stories from "./stories";
import Subject from "./subject";

function Home() {
  return (
    <>
      <Stories/>
      <HeroSlider/>
      <Subject/>
      <Offs/>
      <Footer />
    </>
  );
}

export default Home;