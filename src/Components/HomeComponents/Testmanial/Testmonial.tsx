import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import './testmonial.css';
import img from "../../../assets/Home_imgs/slider/testmonials_cleanup.png";
import user from "../../../assets/Home_imgs/slider/user.png";
import { Star } from '@phosphor-icons/react';

const Testimonial = () => {
  return (
    <div className='testimonial'>
      <h2>Testimonials</h2>
      <div className="container">
        <div className="testimonial-card">
          <div className="img">
            <img src={img} alt="Testimonial" />
          </div>
          <div className="content">
            <Swiper
              effect={'cards'}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="user">
                  <div className="stars">
                  <Star size={32} weight="fill" />
                    <Star size={32} weight="fill" />
                    <Star size={32} weight="fill" />
                    <Star size={32} weight="fill" />
                    <Star size={32} />
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et est id nisi aliquet consectetur. Duis in ex at risus finibus tempus.</p>
                  <div className="profile">
                    <img src={user} alt="Profile" />
                    <p>- John Doe, <span>Lorem Ipsum Inc.</span></p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="user">
                  <div className="stars">
                  <Star size={32} weight="fill" />
                    <Star size={32} weight="fill" />
                    <Star size={32} weight="fill" />
                    <Star size={32} weight="fill" />
                    <Star size={32} />
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et est id nisi aliquet consectetur. Duis in ex at risus finibus tempus.</p>
                  <div className="profile">
                    <img src={user} alt="Profile" />
                    <p>- John Doe, <span>Lorem Ipsum Inc.</span></p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="user">
                  <div className="stars">
                  <Star size={32} weight="fill" />
                    <Star size={32} weight="fill" />
                    <Star size={32} weight="fill" />
                    <Star size={32} weight="fill" />
                    <Star size={32} />
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et est id nisi aliquet consectetur. Duis in ex at risus finibus tempus.</p>
                  <div className="profile">
                    <img src={user} alt="Profile" />
                    <p>- John Doe, <span>Lorem Ipsum Inc.</span></p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="user">
                  <div className="stars">
                    <Star size={32} weight="fill" />
                    <Star size={32} weight="fill" />
                    <Star size={32} weight="fill" />
                    <Star size={32} weight="fill" />
                    <Star size={32} />
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et est id nisi aliquet consectetur. Duis in ex at risus finibus tempus.</p>
                  <div className="profile">
                    <img src={user} alt="Profile" />
                    <p>- John Doe, <span>Lorem Ipsum Inc.</span></p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial;
