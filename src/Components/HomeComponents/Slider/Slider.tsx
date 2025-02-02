import { Swiper , SwiperSlide } from "swiper/react"
import backgroundimg from "../../../assets/Home_imgs/slider/doc.png";
import { Pagination } from 'swiper/modules';
import "./slider.css"
const Slider = () => {
  return (
    <div >
    <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
    <SwiperSlide>
        <div className="slider" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) ,url(${backgroundimg})` }}>
              <h1>Welcome to Our Healthcare System</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <button>Learn More</button>
        </div>
    </SwiperSlide>
    <SwiperSlide>Slide 2</SwiperSlide>
    <SwiperSlide>Slide 3</SwiperSlide>
    <SwiperSlide>Slide 4</SwiperSlide>
    <SwiperSlide>Slide 5</SwiperSlide>
    <SwiperSlide>Slide 6</SwiperSlide>
    <SwiperSlide>Slide 7</SwiperSlide>
    <SwiperSlide>Slide 8</SwiperSlide>
    <SwiperSlide>Slide 9</SwiperSlide>
  </Swiper>
  </div>
  )
}

export default Slider
