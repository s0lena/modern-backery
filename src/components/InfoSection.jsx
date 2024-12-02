import React, { useEffect, useRef } from "react";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules"; // import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import baker1x from "../assets/baker-man.jpg";
import baker2x from "../assets/baker-man@2x.jpg";
import chef1 from "../assets/nastya-chef.jpg";
import chef2 from "../assets/vlad-chef.jpg";
import arrowleft from "../assets/icons.svg#icon-arrow";
import walrus from "../assets/walrus-format.jpg";
import horseshoe from "../assets/horseshoe-format.jpg";
import handlebar from "../assets/handlebar-format.jpg";

const InfoSection = () => {
  const swiperRef = useRef(null);
  useEffect(() => {
    swiperRef.current = new Swiper(".swiper-container", {
      modules: [Navigation, Pagination],
      loop: true,
      slidesPerView: 1,
      spaceBetween: 20,
      breakpoints: { 768: { slidesPerView: 2 }, 1280: { slidesPerView: 3 } },
      pagination: {
        el: ".pagination",
        bulletClass: "pagination__button",
        bulletActiveClass: "pagination__button--active",
        clickable: true,
      },
      navigation: {
        nextEl: ".carousel-button.next",
        prevEl: ".carousel-button.prev",
      },
    });
  }, []);

  return (
    <>
      <section className="traditions-section section" id="traditions-section">
        <div className="container">
          <div className="traditions-section__container">
            <div className="traditions-section__content">
              <h2 className="traditions-section__title section__title">
                Новий формат традицій
              </h2>
              <p>
                <span className="text-brand text-bold text-uppercase">
                  shop bakery
                </span>
                - це пекарня, яка взяла все найкраще, і зберегла смак
                традиційної випічки та натуральність інгредієнтів.
              </p>
              <p className="traditions-section__text traditions-section__text--limited">
                Ми працюємо як найвідоміші мережі—
                <span className="text-brand text-bold">
                  5 хвилин і замовлення готове
                </span>
                . А ще у наших пекарень стильний дизайн та висока якість
                обслуговування!
              </p>
            </div>
            <img
              className="traditions-section__image"
              srcSet={`${baker1x} 1x, ${baker2x} 2x`}
              src={baker1x}
              alt="Чоловік пекар дивиться на батони із посмішкою"
            />
          </div>
        </div>
      </section>
      <section className="chefs-section section" id="chefs-section">
        <div className="container">
          <h2 className="chefs-section__title section__title section__title--centered">
            Наші найкращі
            <br /> <span class="text-brand-dark">шеф-кухарі</span>
          </h2>
          <ul className="chefs-section__list">
            <li className="chefs-section__item">
              <article className="chef-card">
                <img
                  className="chef-card__photo"
                  src={chef1}
                  alt="Nastya chef"
                />
                <div>
                  <h3 className="chef-card__title">Настя</h3>
                  <p className="chef-card__text">Привіт, я Настя!</p>
                  <p>
                    Вже 10 років я втілюю
                    <br /> в життя цікаві та смачні ідеї.
                  </p>
                  <p className="chef-card__text">
                    Я випічу для вас
                    <br /> найсмачніші вироби!
                  </p>
                </div>
              </article>
            </li>
            <li className="chefs-section__item">
              <article className="chef-card">
                <img className="chef-card__photo" src={chef2} alt="Vlad chef" />
                <div>
                  <h3 className="chef-card__title">Влад</h3>
                  <p className="chef-card__text">Привіт, я Влад!</p>
                  <p className="chef-card__text">
                    Мій кондитерський стаж вже 18 років. SHOP BAKERY - це наша
                    любов, якою и ділимося кожен раз з Вами.
                  </p>
                  <p className="chef-card__text">
                    Я зроблю для вас унікальну начинку на будь-який смак.
                  </p>
                </div>
              </article>
            </li>
          </ul>
        </div>
      </section>
      <section className="formats-section section" id="formats-section">
        <div className="container">
          <h2 className="formats-section__title section__title section__title--centered">
            Формати
          </h2>
          <div className="formats-section__slider">
            <button
              className="formats-section__button carousel-button prev"
              type="button"
            >
              <svg width="16" height="16">
                <use href={arrowleft}></use>
              </svg>
            </button>
            <div className="formats-section__container swiper-container">
              <ul className="formats-section__list swiper-wrapper">
                <li className="swiper-slide">
                  <article className="format-card">
                    <img
                      className="format-card__image"
                      src={walrus}
                      alt="Walrus format"
                    />
                    <h3 className="format-card__title" lang="en">
                      Walrus
                    </h3>
                    <div className="format-card__text">
                      <p>Площа: до 120 м2</p>
                      <p>Меню: розширене меню</p>
                      <p>
                        Штат: 2 продавці-касири, 2 пекарі, 2 помічники пекаря, 2
                        офіціанти-різнороби
                      </p>
                      <p>Посадкові місця: є</p>
                    </div>
                  </article>
                </li>
                <li className="swiper-slide">
                  <article className="format-card">
                    <img
                      className="format-card__image"
                      src={horseshoe}
                      alt="Horseshoe format"
                    />
                    <h3 className="format-card__title" lang="en">
                      Horseshoe
                    </h3>
                    <div className="format-card__text">
                      <p>Площа: до 120 м2</p>
                      <p>Меню: розширене меню</p>
                      <p>
                        Штат: 2 продавці-касири, 2 пекарі, 2 помічники пекаря, 2
                        офіціанти-різнороби
                      </p>
                      <p>Посадкові місця: є</p>
                    </div>
                  </article>
                </li>
                <li className="swiper-slide">
                  <article className="format-card">
                    <img
                      className="format-card__image"
                      src={handlebar}
                      alt="Handlebar format"
                    />
                    <h3 className="format-card__title" lang="en">
                      Handlebar
                    </h3>
                    <div className="format-card__text">
                      <p>Площа: до 120 м2</p>
                      <p>Меню: розширене меню</p>
                      <p>
                        Штат: 2 продавці-касири, 2 пекарі, 2 помічники пекаря, 2
                        офіціанти-різнороби
                      </p>
                      <p>Посадкові місця: є</p>
                    </div>
                  </article>
                </li>
                <li className="swiper-slide">
                  <article className="format-card">
                    <img
                      className="format-card__image"
                      src={walrus}
                      alt="Walrus format"
                    />
                    <h3 className="format-card__title" lang="en">
                      Walrus
                    </h3>
                    <div className="format-card__text">
                      <p>Площа: до 120 м2</p>
                      <p>Меню: розширене меню</p>
                      <p>
                        Штат: 2 продавці-касири, 2 пекарі, 2 помічники пекаря, 2
                        офіціанти-різнороби
                      </p>
                      <p>Посадкові місця: є</p>
                    </div>
                  </article>
                </li>
                <li className="swiper-slide">
                  <article className="format-card">
                    <img
                      className="format-card__image"
                      src={horseshoe}
                      alt="Horseshoe format"
                    />
                    <h3 className="format-card__title" lang="en">
                      Horseshoe
                    </h3>
                    <div className="format-card__text">
                      <p>Площа: до 120 м2</p>
                      <p>Меню: розширене меню</p>
                      <p>
                        Штат: 2 продавці-касири, 2 пекарі, 2 помічники пекаря, 2
                        офіціанти-різнороби
                      </p>
                      <p>Посадкові місця: є</p>
                    </div>
                  </article>
                </li>
                <li className="swiper-slide">
                  <article className="format-card">
                    <img
                      className="format-card__image"
                      src={handlebar}
                      alt="Handlebar format"
                    />
                    <h3 className="format-card__title" lang="en">
                      Handlebar
                    </h3>
                    <div className="format-card__text">
                      <p>Площа: до 120 м2</p>
                      <p>Меню: розширене меню</p>
                      <p>
                        Штат: 2 продавці-касири, 2 пекарі, 2 помічники пекаря, 2
                        офіціанти-різнороби
                      </p>
                      <p>Посадкові місця: є</p>
                    </div>
                  </article>
                </li>
              </ul>
              <div className="pagination">
                <span className="pagination__button"></span>
                <span className="pagination__button"></span>
                <span className="pagination__button"></span>
                <span className="pagination__button"></span>
              </div>
            </div>
            <button
              className="formats-section__button carousel-button next"
              type="button"
            >
              <svg width="16" height="16">
                <use href="../assets/icons.svg#icon-arrow"></use>
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default InfoSection;
