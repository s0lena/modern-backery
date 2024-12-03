import React, { useState } from "react";
import logo from "../assets/icons/logo.svg";
import logodark from "../assets/icons/logo-dark.svg";
import burger from "../assets/icons/burger-menu-icon.svg";
import iconclose from "../assets/icons/icon-close.svg";

const Banner = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const disableScroll = () =>
    document.body.classList.toggle("is-scroll-disabled");

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__container">
            <nav className="header__nav">
              <a href="/">
                <img src={logo} alt="Логотип сучасної пекарні"></img>
              </a>
              <ul className="header__menu">
                <li>
                  <a className="link" href="#traditions-section">
                    Наші традиції
                  </a>
                </li>
                <li>
                  <a className="link" href="#chefs-section">
                    Шеф-кухарі
                  </a>
                </li>
                <li>
                  <a className="link" href="#formats-section">
                    Формати
                  </a>
                </li>
                <li>
                  <a className="link" href="#contacts-section">
                    Контакти
                  </a>
                </li>
              </ul>
            </nav>
            <button
              className="header__button button modal-btn-open"
              type="button"
              onClick={() => (setIsModalOpen(true), disableScroll())}
            >
              Замовити дзвінок
            </button>
            <button
              className="header__burger menu-btn-open"
              type="button"
              onClick={() => (setIsBurgerOpen(true), disableScroll())}
            >
              <img src={burger} alt="Menu Icon" width="24" height="24" />
            </button>
            <div
              className={isBurgerOpen ? "mobile-menu is-open" : "mobile-menu"}
            >
              <button
                className="mobile-menu__btn-close menu-btn-close"
                type="button"
                onClick={() => (setIsBurgerOpen(false), disableScroll())}
              >
                <img src={iconclose} width="24" height="24" />
              </button>
              <a className="mobile-menu__logo" href="/">
                <img src={logodark} alt="Логотип сучасної пекарні" />
              </a>
              <ul className="mobile-menu__list">
                <li onClick={() => (setIsBurgerOpen(false), disableScroll())}>
                  <a className="mobile-menu__link" href="#traditions-section">
                    Наші традиції
                  </a>
                </li>
                <li onClick={() => (setIsBurgerOpen(false), disableScroll())}>
                  <a className="mobile-menu__link" href="#chefs-section">
                    Шеф-кухарі
                  </a>
                </li>
                <li onClick={() => (setIsBurgerOpen(false), disableScroll())}>
                  <a className="mobile-menu__link" href="#formats-section">
                    Формати
                  </a>
                </li>
                <li onClick={() => (setIsBurgerOpen(false), disableScroll())}>
                  <a className="mobile-menu__link" href="#contact-section">
                    Контакти
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <section className="hero-section">
        <div className="container">
          <h1 className="hero-section__title">
            <span className="text-brand">Сучасна</span> пекарня
          </h1>
          <button
            className="hero-section__button button modal-btn-open"
            type="button"
            onClick={() => (setIsModalOpen(true), disableScroll())}
          >
            Замовити дзвінок
          </button>
        </div>
      </section>
      <section className="advantages-section">
        <div className="container">
          <ul className="advantages-section__list">
            <li className="advantages-section__item">Великий попит на ринку</li>
            <li className="advantages-section__item">
              Доступні за бюджетом формати
            </li>
            <li className="advantages-section__item">
              Досвідчена управлінська команда
            </li>
          </ul>
        </div>
      </section>
      <div className={isModalOpen ? "backdrop" : "backdrop is-hidden"}>
        <div className="modal">
          <button
            className="modal__btn-close modal-btn-close"
            type="button"
            onClick={() => (setIsModalOpen(false), disableScroll())}
          >
            <img src={iconclose} width="24" height="24" />
          </button>
          <h2 className="modal__title">Замовити дзвінок</h2>
          <p className="modal__text">
            Залишіть заявку та наш спеціаліст зв'яжеться з Вами!
          </p>
          <form name="modal-form" autocomplete="off">
            <div className="modal__form-field input">
              <label className="input__label visually-hidden" for="user-name">
                Імʼя
              </label>
              <input
                className="input__control"
                type="text"
                name="user-name"
                id="user-name"
                placeholder="Імʼя"
                required
              />
            </div>

            <div className="modal__form-field input">
              <label className="input__label visually-hidden" for="user-tel">
                Телефон
              </label>
              <input
                className="input__control"
                type="tel"
                name="user-tel"
                id="user-tel"
                placeholder="Телефон"
                pattern="^\+[0-9]{12}"
                required
              />
            </div>

            <div className="modal__form-field input">
              <label className="input__label visually-hidden" for="user-email">
                Електронна пошта
              </label>
              <input
                className="input__control"
                type="email"
                name="user-email"
                id="user-email"
                placeholder="Електронна пошта"
                required
              />
            </div>

            <button className="modal__button button" type="submit">
              Замовити дзвінок
            </button>
            <p className="form-terms">
              Натискаючи на кнопку я погоджуюсь з
              <a className="form-terms__link" href="#">
                політикою конфіденційності
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Banner;
