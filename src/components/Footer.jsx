import React from "react";
import logo from "../assets/icons/logo.svg";
import instagramIcon from "../assets/icons/instagram-icon.svg";
import facebookIcon from "../assets/icons/facebook-icon.svg";

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
              {/* Footer Menu */}
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
            {/* Footer contacts */}
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
                {/* Footer Socials */}
                <div className="footer__socials">
                  <a href="#">
                    <img
                      className="footer__socials-icon"
                      width="32"
                      height="32"
                      src={facebookIcon}
                    ></img>
                  </a>
                  <a href="#">
                    <img
                      className="footer__socials-icon"
                      width="32"
                      height="32"
                      src={instagramIcon}
                    ></img>
                  </a>
                </div>
              </div>
              {/*Footer Policy Terms*/}
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
    </>
  );
};

export default Footer;
