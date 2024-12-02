import React from "react";
import baker from "../assets/baker-man.jpg";

const InfoSection = () => {
  return (
    <>
      <section id="contacts-section"></section>;
      <section id="traditions-section">
        <h2>Новий формат традицій</h2>
        <p>
          <span>shop bakery</span> це пекарня, яка взяла все найкраще, і
          зберегла смак традиційної випічки та натуральність інгредієнтів.
        </p>
        <p>
          Ми працюємо як найвідоміші мережі—
          <span>5 хвилин і замовлення готове</span>. А ще у наших пекарень
          стильний дизайн та висока якість обслуговування!
        </p>
        <img src={baker} />
      </section>
      <section id="chefs-section">
        <h2>Наші найкращі шеф-кухарі</h2>
        <ul>
          <li>
            <article>
              <h3>Настя</h3>
              <p>Привіт, я Настя!</p>
              <p>Вже 10 років я втілюю в життя цікаві та смачні ідеї.</p>{" "}
              <p>Я випічу для вас найсмачніші вироби!</p>
            </article>
          </li>
          <li>
            <article>
              <h3>Влад</h3>
              <p>Привіт, я Влад!</p>
              <p>
                Мій кондитерський стаж вже 18 років. SHOP BAKERY - це наша
                любов, якою и ділимося кожен раз з Вами.
              </p>
              <p>Я зроблю для вас унікальну начинку на будь-який смак.</p>
            </article>
          </li>
        </ul>
      </section>
      <section id="formats-section">
        <h2>Формати</h2>
        <ul>
          <li>
            <article>
              <h3 lang="en">Walrus</h3>
            </article>
          </li>
          <li>
            <article>
              <h3 lang="en">Horseshoe</h3>
            </article>
          </li>
          <li>
            <article>
              <h3 lang="en">Handlebar</h3>
            </article>
          </li>
        </ul>
      </section>
    </>
  );
};

export default InfoSection;
