import Navbar from "../../components/homeComponents/Nav/Navbar";
import Slider from "../../components/homeComponents/Slider/Slider";
import About from "../../components/homeComponents/About/About";
import BeastServices from "../../components/homeComponents/beast_service/BeastServices";
import Make_appointment from "../../components/homeComponents/make_appointment/Make_Appointment";
import Footer from "../../components/homeComponents/Footer/Footer";

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
