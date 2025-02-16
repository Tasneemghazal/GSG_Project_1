import Navbar from "../../component/homeComponents/Nav/Navbar";
import Slider from "../../component/homeComponents/Slider/Slider";
import About from "../../component/homeComponents/About/About";
import BeastServices from "../../component/homeComponents/beast_service/BeastServices";
import Make_appointment from "../../component/homeComponents/make_appointment/Make_Appointment";
import Footer from "../../component/homeComponents/Footer/Footer";

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
