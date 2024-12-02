import React from "react";
import logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <>
      <footer>
        <nav>
          <a href="#">
            <img src={logo} alt="Logo" />
          </a>
          <ul>
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
        <address>
          <ul>
            <li>
              <a className="link" href="tel:+380960000007">
                +380960000007
              </a>
            </li>
            <li>
              <a className="link" href="mailto:shopbakery@gmail.com">
                shopbakery@gmail.com
              </a>
            </li>
            <li>
              <a
                className="link"
                href="https://maps.app.goo.gl/E7CWBzdcvUvduo3V9"
              >
                Україна, м.Київ, вул. Січових Стрільців, 54
              </a>
            </li>
            <li>
              <a className="link" href="#">
                {/* fb icon */}
              </a>
            </li>
            <li>
              <a className="link" href="#">
                {/* instagram icon */}
              </a>
            </li>
            <li>
              <a className="link" href="#"></a>
            </li>
          </ul>
          <a className="link" href="#" target="blank">
            Політика конфіденційності
          </a>
          <p>&copy; 2024 Дані захищені</p>
        </address>
      </footer>
    </>
  );
};

export default Footer;
