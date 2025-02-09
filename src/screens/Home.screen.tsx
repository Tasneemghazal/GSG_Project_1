import Navbar from "../Components/HomeComponents/Nav/Navbar";
import Slider from "../Components/HomeComponents/Slider/Slider";
import About from "../Components/HomeComponents/About/About";
import BeastServices from "../Components/HomeComponents/beast_service/BeastServices";
import Make_apponment from "../Components/HomeComponents/make_apponment/Make_apponment";
import Footer from "../Components/HomeComponents/Footer/Footer";
import Testmonial from "../Components/HomeComponents/Testmanial/Testmonial";

const Home = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <About />
      <BeastServices />
      <Make_apponment />
      <Testmonial/>
      <Footer />
    </>
  )
}
export default Home;
