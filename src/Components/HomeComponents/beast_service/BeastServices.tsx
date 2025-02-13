import service from "../../../assets/Home_imgs/servicespart/xray.jpg";
import service2 from "../../../assets/Home_imgs/servicespart/dintes.jpg";
import service3 from "../../../assets/Home_imgs/servicespart/service2.jpg";
import service4 from "../../../assets/Home_imgs/servicespart/service4.jpg";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowElbowRight } from "@phosphor-icons/react";
import "./beast.css"

const BeastServices = () => {
  return (
    <div className="services">
      <div className="container">
        <div className="data">
          <h2>PROVIDES BEST SERVICE</h2>
          <p className='contain'>
            Enthusiastically orchestrate competitive e-services whereas superior
            Conveniently disintermediate innovative solutions through impactfuls
            tailers without seamless markets network .
          </p>
          <div className="button">
            <a href="">
              view all services
            </a>
            <ArrowElbowRight size={20} />
          </div>
        </div>
        <div className="content">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            breakpoints={{
              // when window width is >= 320px
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              // when window width is >= 480px
              480: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              // when window width is >= 640px
              640: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
          >
            <SwiperSlide>
              <div className="card">
                <img src={service} alt="service" />
                <div className="service">
                  <div className="text">
                    <span>X-RAY</span>
                    <h3>Digital X-RAY</h3>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <img src={service2} alt="service" />
                <div className="service">
                  <div className="text">
                    <span>DENTAL</span>
                    <h3>Dental Fixing</h3>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <img src={service3} alt="service" />
                <div className="service">
                  <div className="text">
                    <span>SURGERY</span>
                    <h3>Himan Brain Surgery</h3>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <img src={service4} alt="service" />
                <div className="service">
                  <div className="text">
                    <span>VACCINE</span>
                    <h3>Pediatric Dentistry</h3>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            ...
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default BeastServices;
