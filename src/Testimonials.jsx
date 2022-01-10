import React from "react";
import "./style.css";
import testimonial1 from "./img/testimonial1.jpg";
import testimonial2 from "./img/testimonial2.jpg";
import testimonial3 from "./img/testimonial3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import Swiper core and required modules

// install Swiper modules

import "swiper/css/navigation";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

export const Testimonials = () => {
  return (
    <div className="testimonialcard">
      <Swiper
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        Autoplay={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="testimonial__card swiper-slide">
            <div className="testimonial__quote">
              <i className="bx bxs-quote-alt-left"></i>
            </div>
            <p className="testimonial__description">
              They are the best watches that one acquires, also they are always
              with the latest news and trends, with a very comfortable price and
              especially with the attention you receive, they are always
              attentive to your questions.
            </p>
            <h3 className="testimonial__date">March 27. 2021</h3>

            <div className="testimonial__perfil">
              <img
                src={testimonial1}
                alt=""
                className="testimonial__perfil-img"
              />

              <div className="testimonial__perfil-data">
                <span className="testimonial__perfil-name">Lee Doe</span>
                <span className="testimonial__perfil-detail">
                  Director of a company
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="testimonial__card swiper-slide">
            <div className="testimonial__quote">
              <i className="bx bxs-quote-alt-left"></i>
            </div>
            <p className="testimonial__description">
              They are the best watches that one acquires, also they are always
              with the latest news and trends, with a very comfortable price and
              especially with the attention you receive, they are always
              attentive to your questions.
            </p>
            <h3 className="testimonial__date">March 27. 2021</h3>

            <div className="testimonial__perfil">
              <img
                src={testimonial2}
                alt=""
                className="testimonial__perfil-img"
              />

              <div className="testimonial__perfil-data">
                <span className="testimonial__perfil-name">Samantha Mey</span>
                <span className="testimonial__perfil-detail">
                  Director of a company
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial__card swiper-slide">
            <div className="testimonial__quote">
              <i className="bx bxs-quote-alt-left"></i>
            </div>
            <p className="testimonial__description">
              They are the best watches that one acquires, also they are always
              with the latest news and trends, with a very comfortable price and
              especially with the attention you receive, they are always
              attentive to your questions.
            </p>
            <h3 className="testimonial__date">March 27. 2021</h3>

            <div className="testimonial__perfil">
              <img
                src={testimonial3}
                alt=""
                className="testimonial__perfil-img"
              />

              <div className="testimonial__perfil-data">
                <span className="testimonial__perfil-name">Raul Zaman</span>
                <span className="testimonial__perfil-detail">
                  Director of a company
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
