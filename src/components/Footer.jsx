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
              <a href="#">Наші традиції</a>
            </li>
            <li>
              <a href="#">Шеф-кухарі</a>
            </li>
            <li>
              <a href="#">Формати</a>
            </li>
            <li>
              <a href="#">Контакти</a>
            </li>
          </ul>
        </nav>
        <address>
          <ul>
            <li>
              <a href="tel:+380960000007">+380960000007</a>
            </li>
            <li>
              <a href="mailto:shopbakery@gmail.com">shopbakery@gmail.com</a>
            </li>
            <li>
              <a href="https://maps.app.goo.gl/E7CWBzdcvUvduo3V9">
                Україна, м.Київ, вул. Січових Стрільців, 54
              </a>
            </li>
            <li>
              <a href="#">{/* fb icon */}</a>
            </li>
            <li>
              <a href="#">{/* instagram icon */}</a>
            </li>
            <li>
              <a href="#"></a>
            </li>
          </ul>
          <a href="#" target="blank">
            Політика конфіденційності
          </a>
          <p>&copy; 2024 Дані захищені</p>
        </address>
      </footer>
    </>
  );
};

export default Footer;
