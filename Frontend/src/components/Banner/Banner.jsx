import './Banner.css';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/swiper.min.css';



export default function Banner() {
  SwiperCore.use([Autoplay]);
  return (
    <section class="home" id='home'>
      <div class="slides-container">
        <div class="slide active">
          <Swiper
            loop
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            slidesPerView={1}
            spaceBetween={20}
            pagination={{ clickable: true }}
            style={{ padding: '1rem' }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 1,
              },
              1024: { slidesPerView: 1 },
            }}
          >
            <SwiperSlide>
              <div class="slide active">
                <div class="content">
                  <span>fresh and organic</span>
                  <h3>upto 50% off</h3>
                  <a href="/products" class="btn">shop now</a>
                </div>
                <div class="image">
                  <img src="image/1stslider_new.png" alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="slide active">
                <div class="content">
                  <span>fresh and organic</span>
                  <h3>upto 50% off</h3>
                  <a href="/products" class="btn">shop now</a>
                </div>
                <div class="image">
                  <img src="image/2nslider_new.png" alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              < div class="slide active" >
                <div class="content">
                  <span>fresh and organic</span>
                  <h3>upto 50% off</h3>
                  <a href="/products" class="btn">shop now</a>
                </div>
                <div class="image">
                  <img src="image/3rdslider_new.png" alt="" />
                </div>
              </div >
            </SwiperSlide>

          </Swiper>
        </div>
      </div>
    </section>
  )
}


