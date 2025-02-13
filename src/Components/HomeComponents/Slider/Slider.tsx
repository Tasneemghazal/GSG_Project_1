import { Swiper, SwiperSlide } from "swiper/react";
import "./slider.css";
import firstBackgroundImg from "../../../assets/Home_imgs/slider/virtual-3d-projection.jpg";
import secBackgroundImg from "../../../assets/Home_imgs/slider/digital-composite-.jpg";
import thirdBackgroundImg from "../../../assets/Home_imgs/slider/medical-banner-.jpg";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Slider = () => {
  return (
    <div>
      <Swiper 
       modules={[Navigation, Pagination, Scrollbar, A11y]}
       spaceBetween={50}
       slidesPerView={1}
       navigation
       pagination={{ clickable: true }}
       scrollbar={{ draggable: true }}
      className="mySwiper">
        <SwiperSlide>
          <div className="slider" style={{ backgroundImage: `url(${firstBackgroundImg})` }}>
            <div className="text">
              <h1>Welcome to Our Healthcare System</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <button>Learn More</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider" style={{ backgroundImage: `url(${secBackgroundImg})` }}>
            <div className="text">
              <h1>Welcome to Our Healthcare System</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <button>Learn More</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider" style={{ backgroundImage: `url(${thirdBackgroundImg})` }}>
            <div className="text">
              <h1>Welcome to Our Healthcare System</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <button>Learn More</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
