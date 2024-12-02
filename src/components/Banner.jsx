import React from "react";
import logo from "../assets/logo.svg";

const Banner = () => {
  return (
    <>
      <header>
        <a href="#">
          <img src={logo} alt="Логотип сучасної пекарні"></img>
        </a>
        <nav>
          <ul>
            <li>
              <a href="#traditions-section">Наші традиції</a>
            </li>
            <li>
              <a href="#chefs-section">Шеф-кухарі</a>
            </li>
            <li>
              <a href="#formats-section">Формати</a>
            </li>
            <li>
              <a href="#contacts-section">Контакти</a>
            </li>
          </ul>
        </nav>
        <button type="button">Замовити дзвінок</button>
      </header>
      <section>
        <h1>Сучасна пекарня</h1>
      </section>
      <ul>
        <li>Великий попит на ринку</li>
        <li>Доступні за бюджетом формати</li>
        <li>Досвідчена управлінська команда</li>
      </ul>
    </>
  );
};

export default Banner;
