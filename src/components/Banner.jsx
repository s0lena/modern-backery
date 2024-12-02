import React from "react";
import logo from "../assets/logo.svg";

const Banner = () => {
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
            >
              Замовити дзвінок
            </button>
            <button className="header__burger menu-btn-open" type="button">
              <svg width="24" height="24">
                <use href="../assets/icons.svg#icon-menu"></use>
              </svg>
            </button>
            <div className="mobile-menu">
              <button
                className="mobile-menu__btn-close menu-btn-close"
                type="button"
              >
                <svg width="24" height="24">
                  <use href="../assets/icons.svg#icon-close"></use>
                </svg>
              </button>
              <a className="mobile-menu__logo" href="/">
                <img
                  src="../assetss/logo-dark.svg"
                  alt="Логотип сучасної пекарні"
                />
              </a>
              <ul className="mobile-menu__list">
                <li>
                  <a className="mobile-menu__link" href="#traditions-section">
                    Наші традиції
                  </a>
                </li>
                <li>
                  <a className="mobile-menu__link" href="#chefs-section">
                    Шеф-кухарі
                  </a>
                </li>
                <li>
                  <a className="mobile-menu__link" href="#formats-section">
                    Формати
                  </a>
                </li>
                <li>
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
    </>
  );
};

export default Banner;
