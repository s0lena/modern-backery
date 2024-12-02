import React from "react";

const Form = () => {
  return (
    <>
      <section className="contact-section section" id="contacts-section">
        <div className="container">
          <div className="contact-section__container">
            <div className="contact-section__form">
              <h2 className="contact-section__title section__title">
                Приєднуйся до мережі пекарень
              </h2>
              <p>Заповни форму, щоб ми звʼязались з тобою!</p>
              <form name="contact-form" autocomplete="off">
                <div className="contact-section__form-field input">
                  <label
                    className="input__label visually-hidden"
                    for="user-name"
                  >
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

                <div className="contact-section__form-field input">
                  <label
                    className="input__label visually-hidden"
                    for="user-tel"
                  >
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

                <div className="contact-section__form-field input">
                  <label
                    className="input__label visually-hidden"
                    for="user-email"
                  >
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

                <button
                  className="contact-section__button button"
                  type="submit"
                >
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
            <iframe
              className="contact-section__map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.163630435278!2d30.488698376404077!3d50.456677571593396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce637c006b2d%3A0xaf86385f19996ff0!2z0LLRg9C70LjRhtGPINCh0ZbRh9C-0LLQuNGFINCh0YLRgNGW0LvRjNGG0ZbQsiwgNTQsINCa0LjRl9CyLCAwMjAwMA!5e0!3m2!1suk!2sua!4v1733137026478!5m2!1suk!2sua"
              width="603"
              height="595"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Form;
