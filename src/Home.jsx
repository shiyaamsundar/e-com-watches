import React, { useState } from "react";
import favicon from "./img/favicon.png";

import featured1 from "./img/featured1.png";
import featured2 from "./img/featured2.png";
import featured3 from "./img/featured3.png";

import home from "./img/home.png";

import new1 from "./img/new1.png";
import new2 from "./img/new2.png";
import new3 from "./img/new3.png";
import new4 from "./img/new4.png";

import product1 from "./img/product1.png";
import product2 from "./img/product2.png";
import product3 from "./img/product3.png";
import product4 from "./img/product4.png";
import product5 from "./img/product5.png";

import story from "./img/story.png";

import testimonial from "./img/testimonial.png";
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
import { Testimonials } from "./Testimonials";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

const Home = () => {
  const [showmenu, setshowmenu] = useState(false);
  const [theme, settheme] = useState(false);
  const [showcart, setshowcart] = useState(true);

  const sections = document.querySelectorAll("section[id]");

  function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document
          .querySelector(".nav__menu a[href*=" + sectionId + "]")
          .classList.add("active-link");
      } else {
        document
          .querySelector(".nav__menu a[href*=" + sectionId + "]")
          .classList.remove("active-link");
      }
    });
  }
  window.addEventListener("scroll", scrollActive);

  function scrollUp() {
    const scrollUp = document.getElementById("scroll-up");
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 350) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll");
  }
  window.addEventListener("scroll", scrollUp);

  function scrollHeader() {
    const header = document.getElementById("header");
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 50) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  }
  window.addEventListener("scroll", scrollHeader);

  return (
    <div className={theme != false ? "  dark-theme bbody" : "bbody"}>
      <header className="header" id="header">
        <nav className="nav container">
          <a href="#" className="nav__logo">
            <i className="bx bxs-watch nav__logo-icon"></i> Rolex
          </a>

          <div
            className={showmenu ? "nav__menu show-menu" : "nav__menu"}
            id="nav-menu"
          >
            <ul className="nav__list">
              <li className="nav__item">
                <a
                  href="#home"
                  className="nav__link active-link"
                  onClick={() => setshowmenu(!showmenu)}
                >
                  Home
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#featured"
                  className="nav__link"
                  onClick={() => setshowmenu(!showmenu)}
                >
                  Featured
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#products"
                  className="nav__link"
                  onClick={() => setshowmenu(!showmenu)}
                >
                  Products
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#new"
                  className="nav__link"
                  onClick={() => setshowmenu(!showmenu)}
                >
                  New
                </a>
              </li>
            </ul>

            <div
              className="nav__close"
              id="nav-close"
              onClick={() => setshowmenu(!showmenu)}
            >
              <i className="bx bx-x"></i>
            </div>
          </div>

          <div className="nav__btns">
            {theme ? (
              <i
                className="bx change-theme bx-sun"
                id="theme-button"
                onClick={() => settheme(!theme)}
              />
            ) : (
              <i
                className="bx bx-moon change-theme bx-moon"
                id="theme-button"
                onClick={() => settheme(!theme)}
              />
            )}

            <div
              className="nav__shop"
              id="cart-shop"
              onClick={() => setshowcart(!showcart)}
            >
              <i className="bx bx-shopping-bag"></i>
            </div>

            <div
              className="nav__toggle"
              id="nav-toggle"
              onClick={() => setshowmenu(!showmenu)}
            >
              <i className="bx bx-grid-alt"></i>
            </div>
          </div>
        </nav>
      </header>

      <div className={!showcart ? "cart show-cart" : "cart"} id="cart">
        <i
          className="bx bx-x cart__close"
          id="cart-close"
          onClick={() => setshowcart(!showcart)}
        ></i>

        <h2 className="cart__title-center">My Cart</h2>

        <div className="cart__container">
          <article className="cart__card">
            <div className="cart__box">
              <img src={featured1} alt="" className="cart__img" />
            </div>

            <div className="cart__details">
              <h3 className="cart__title">Jazzmaster</h3>
              <span className="cart__price">$1050</span>

              <div className="cart__amount">
                <div className="cart__amount-content">
                  <span className="cart__amount-box">
                    <i className="bx bx-minus"></i>
                  </span>

                  <span className="cart__amount-number">1</span>

                  <span className="cart__amount-box">
                    <i className="bx bx-plus"></i>
                  </span>
                </div>

                <i className="bx bx-trash-alt cart__amount-trash"></i>
              </div>
            </div>
          </article>

          <article className="cart__card">
            <div className="cart__box">
              <img src={featured3} alt="" className="cart__img" />
            </div>

            <div className="cart__details">
              <h3 className="cart__title">Rose Gold</h3>
              <span className="cart__price">$850</span>

              <div className="cart__amount">
                <div className="cart__amount-content">
                  <span className="cart__amount-box">
                    <i className="bx bx-minus"></i>
                  </span>

                  <span className="cart__amount-number">1</span>

                  <span className="cart__amount-box">
                    <i className="bx bx-plus"></i>
                  </span>
                </div>

                <i className="bx bx-trash-alt cart__amount-trash"></i>
              </div>
            </div>
          </article>

          <article className="cart__card">
            <div className="cart__box">
              <img src={new1} alt="" className="cart__img" />
            </div>

            <div className="cart__details">
              <h3 className="cart__title">Longines Rose</h3>
              <span className="cart__price">$980</span>

              <div className="cart__amount">
                <div className="cart__amount-content">
                  <span className="cart__amount-box">
                    <i className="bx bx-minus"></i>
                  </span>

                  <span className="cart__amount-number">1</span>

                  <span className="cart__amount-box">
                    <i className="bx bx-plus"></i>
                  </span>
                </div>

                <i className="bx bx-trash-alt cart__amount-trash"></i>
              </div>
            </div>
          </article>
        </div>

        <div className="cart__prices">
          <span className="cart__prices-item">3 items</span>
          <span className="cart__prices-total">$2880</span>
        </div>
      </div>

      <main className="main">
        <section className="home" id="home">
          <div className="home__container container grid">
            <div className="home__img-bg">
              <img src={home} alt="" className="home__img" />
            </div>

            <div className="home__social">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                className="home__social-link"
              >
                Facebook
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                className="home__social-link"
              >
                Twitter
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                className="home__social-link"
              >
                Instagram
              </a>
            </div>

            <div className="home__data">
              <h1 className="home__title">
                NEW WATCH <br /> COLLECTIONS B720
              </h1>
              <p className="home__description">
                Latest arrival of the new imported watches of the B720 series,
                with a modern and resistant design.
              </p>
              <span className="home__price">$1245</span>

              <div className="home__btns">
                <a href="#" className="button button--gray button--small">
                  Discover
                </a>

                <button className="button home__button">ADD TO CART</button>
              </div>
            </div>
          </div>
        </section>

        <section className="featured section container" id="featured">
          <h2 className="section__title">Featured</h2>

          <div className="featured__container grid">
            <article className="featured__card">
              <span className="featured__tag">Sale</span>

              <img src={featured1} alt="" className="featured__img" />

              <div className="featured__data">
                <h3 className="featured__title">Jazzmaster</h3>
                <span className="featured__price">$1050</span>
              </div>

              <button className="button featured__button">ADD TO CART</button>
            </article>

            <article className="featured__card">
              <span className="featured__tag">Sale</span>

              <img src={featured2} alt="" className="featured__img" />

              <div className="featured__data">
                <h3 className="featured__title">Ingersoll</h3>
                <span className="featured__price">$250</span>
              </div>

              <button className="button featured__button">ADD TO CART</button>
            </article>

            <article className="featured__card">
              <span className="featured__tag">Sale</span>

              <img src={featured3} alt="" className="featured__img" />

              <div className="featured__data">
                <h3 className="featured__title">Rose gold</h3>
                <span className="featured__price">$890</span>
              </div>

              <button className="button featured__button">ADD TO CART</button>
            </article>
          </div>
        </section>

        <section className="story section container">
          <div className="story__container grid">
            <div className="story__data">
              <h2 className="section__title story__section-title">Our Story</h2>

              <h1 className="story__title">
                Inspirational Watch of <br /> this year
              </h1>

              <p className="story__description">
                The latest and modern watches of this year, is available in
                various presentations in this store, discover them now.
              </p>

              <a href="#" className="button button--small">
                Discover
              </a>
            </div>

            <div className="story__images">
              <img src={story} alt="" className="story__img" />
              <div className="story__square"></div>
            </div>
          </div>
        </section>

        <section className="products section container" id="products">
          <h2 className="section__title">Products</h2>

          <div className="products__container grid">
            <article className="products__card">
              <img src={product1} alt="" className="products__img" />

              <h3 className="products__title">Spirit rose</h3>
              <span className="products__price">$1500</span>

              <button className="products__button">
                <i className="bx bx-shopping-bag"></i>
              </button>
            </article>

            <article className="products__card">
              <img src={product2} alt="" className="products__img" />

              <h3 className="products__title">Khaki pilot</h3>
              <span className="products__price">$1350</span>

              <button className="products__button">
                <i className="bx bx-shopping-bag"></i>
              </button>
            </article>

            <article className="products__card">
              <img src={product3} alt="" className="products__img" />

              <h3 className="products__title">Jubilee black</h3>
              <span className="products__price">$870</span>

              <button className="products__button">
                <i className="bx bx-shopping-bag"></i>
              </button>
            </article>

            <article className="products__card">
              <img src={product4} alt="" className="products__img" />

              <h3 className="products__title">Fosil me3</h3>
              <span className="products__price">$650</span>

              <button className="products__button">
                <i className="bx bx-shopping-bag"></i>
              </button>
            </article>

            <article className="products__card">
              <img src={product5} alt="" className="products__img" />

              <h3 className="products__title">Duchen</h3>
              <span className="products__price">$950</span>

              <button className="products__button">
                <i className="bx bx-shopping-bag"></i>
              </button>
            </article>
          </div>
        </section>

        <section className="testimonial section container">
          <div className="testimonial__container grid">
            <div className="swiper testimonial-swiper">
              <Testimonials />
            </div>

            <div className="testimonial__images">
              <div className="testimonial__square"></div>
              <img src={testimonial} alt="" className="testimonial__img" />
            </div>
          </div>
        </section>

        <section className="new section container" id="new">
          <h2 className="section__title">New Arrivals</h2>

          <div className="new__container">
            <div className="swiper new-swiper">
              <div className="swiper-wrapper">
                <Swiper
                  slidesPerView={3}
                  spaceBetween={30}
                  pagination={{
                    clickable: true,
                  }}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <article className="new__card swiper-slide">
                      <span className="new__tag">New</span>

                      <img src={new1} alt="" className="new__img" />

                      <div className="new__data">
                        <h3 className="new__title">Longines rose</h3>
                        <span className="new__price">$980</span>
                      </div>

                      <button className="button new__button">
                        ADD TO CART
                      </button>
                    </article>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <article className="new__card swiper-slide">
                      <span className="new__tag">New</span>

                      <img src={new1} alt="" className="new__img" />

                      <div className="new__data">
                        <h3 className="new__title">Longines rose</h3>
                        <span className="new__price">$980</span>
                      </div>

                      <button className="button new__button">
                        ADD TO CART
                      </button>
                    </article>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <article className="new__card swiper-slide">
                      <span className="new__tag">New</span>

                      <img src={new2} alt="" className="new__img" />

                      <div className="new__data">
                        <h3 className="new__title">Jazzmaster</h3>
                        <span className="new__price">$1150</span>
                      </div>

                      <button className="button new__button">
                        ADD TO CART
                      </button>
                    </article>
                  </SwiperSlide>
                  <SwiperSlide>
                    <article className="new__card swiper-slide">
                      <span className="new__tag">New</span>

                      <img src={new3} alt="" className="new__img" />

                      <div className="new__data">
                        <h3 className="new__title">Dreyfuss gold</h3>
                        <span className="new__price">$750</span>
                      </div>

                      <button className="button new__button">
                        ADD TO CART
                      </button>
                    </article>
                  </SwiperSlide>
                  <SwiperSlide>
                    <article className="new__card swiper-slide">
                      <span className="new__tag">New</span>

                      <img src={new4} alt="" className="new__img" />

                      <div className="new__data">
                        <h3 className="new__title">Portuguese rose</h3>
                        <span className="new__price">$1590</span>
                      </div>

                      <button className="button new__button">
                        ADD TO CART
                      </button>
                    </article>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </section>

        <section className="newsletter section container">
          <div className="newsletter__bg grid">
            <div>
              <h2 className="newsletter__title">
                Subscribe Our <br /> Newsletter
              </h2>
              <p className="newsletter__description">
                Don't miss out on your discounts. Subscribe to our email
                newsletter to get the best offers, discounts, coupons, gifts and
                much more.
              </p>
            </div>

            <form action="" className="newsletter__subscribe">
              <input
                type="email"
                placeholder="Enter your email"
                className="newsletter__input"
              />
              <button className="button">SUBSCRIBE</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer section">
        <div className="footer__container container grid">
          <div className="footer__content">
            <h3 className="footer__title">Our information</h3>

            <ul className="footer__list">
              <li>1234 - Peru</li>
              <li>La Libertad 43210</li>
              <li>123-456-789</li>
            </ul>
          </div>
          <div className="footer__content">
            <h3 className="footer__title">About Us</h3>

            <ul className="footer__links">
              <li>
                <a href="#" className="footer__link">
                  Support Center
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Customer Support
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Copy Right
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__content">
            <h3 className="footer__title">Product</h3>

            <ul className="footer__links">
              <li>
                <a href="#" className="footer__link">
                  Road bikes
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Mountain bikes
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Electric
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Accesories
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__content">
            <h3 className="footer__title">Social</h3>

            <ul className="footer__social">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                className="footer__social-link"
              >
                <i className="bx bxl-facebook"></i>
              </a>

              <a
                href="https://twitter.com/"
                target="_blank"
                className="footer__social-link"
              >
                <i className="bx bxl-twitter"></i>
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                className="footer__social-link"
              >
                <i className="bx bxl-instagram"></i>
              </a>
            </ul>
          </div>
        </div>

        <span className="footer__copy">
          &#169; Bedimcode. All rigths reserved
        </span>
      </footer>

      <a href="#" className="scrollup" id="scroll-up">
        <i className="bx bx-up-arrow-alt scrollup__icon"></i>
      </a>
    </div>
  );
};

export default Home;
