import { Swiper, SwiperSlide } from "swiper/react";
import "./slider.css";
import backgroundimg from "../../../assets/Home_imgs/slider/doc.png";
import slider2 from "../../../assets/Home_imgs/slider/slider2.jpg";
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
       onSwiper={(swiper) => console.log(swiper)}
       onSlideChange={() => console.log('slide change')}
      className="mySwiper">
        <SwiperSlide>
          <div className="slider" style={{ backgroundImage: `url(${backgroundimg})` }}>
            <div className="text">
              <h1>Welcome to Our Healthcare System</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <button>Learn More</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider" style={{ backgroundImage: `url(${slider2})` }}>
            <div className="text">
              <h1>Welcome to Our Healthcare System</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <button>Learn More</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider" style={{ backgroundImage: `url(${backgroundimg})` }}>
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
