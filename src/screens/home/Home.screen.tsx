import Navbar from "../../Components/HomeComponents/Nav/Navbar";
import Slider from "../../Components/HomeComponents/Slider/Slider";
import About from "../../Components/HomeComponents/About/About";
import BeastServices from "../../Components/HomeComponents/beast_service/BeastServices";
import Make_appointment from "../../Components/HomeComponents/make_appointment/Make_Appointment";
import Footer from "../../Components/HomeComponents/Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar/>
      <Slider />
      <About />
      <BeastServices />
      <Make_appointment />
      <Footer/>
    </>
  )
}
export default Home;
