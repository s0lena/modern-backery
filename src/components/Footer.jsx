import React from "react";
import logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer__container">
            <nav className="footer__nav">
              <div class="footer__logo">
                <a href="#">
                  <img src={logo} alt="Logo" />
                </a>
              </div>
              <ul className="footer__menu">
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
            <address className="footer__address">
              <div className="footer__contacts">
                <ul className="footer__address-list">
                  <li>
                    <a
                      className="footer__address-link"
                      href="tel:+380960000007"
                    >
                      + 38 (096) 000 00 07
                    </a>
                  </li>
                  <li>
                    <a
                      className="footer__address-link"
                      href="mailto:shopbakery@gmail.com"
                    >
                      shopbakery@gmail.com
                    </a>
                  </li>
                  <li>
                    <a
                      className="footer__address-link"
                      href="https://goo.gl/maps/KpjmkaboxKH6DTnk9"
                      target="_blank"
                    >
                      Україна, м. Київ, вул. Січових Стрільців 54
                    </a>
                  </li>
                </ul>
                <div className="footer__socials">
                  <a href="#">
                    <svg
                      className="footer__socials-icon"
                      width="32"
                      height="32"
                    >
                      <use href="./images/icons.svg#icon-facebook"></use>
                    </svg>
                  </a>
                  <a href="#">
                    <svg
                      className="footer__socials-icon"
                      width="32"
                      height="32"
                    >
                      <use href="./images/icons.svg#icon-instagram"></use>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="footer__address-info">
                <a className="footer__address-link" href="#" target="_blank">
                  Політика конфіденційності
                </a>
                <p className="footer__address-copyright">
                  &copy; 2024 Дані захищені
                </p>
              </div>
            </address>
          </div>
        </div>
      </footer>

      <div className="backdrop is-hidden">
        <div className="modal">
          <button className="modal__btn-close modal-btn-close" type="button">
            <svg width="24" height="24">
              <use href="./images/icons.svg#icon-close"></use>
            </svg>
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

export default Footer;
