import React, { useState, ChangeEvent } from "react";
import "./index.css";
import about_cleans_img from "./assets/about-us/dominik-martin-b2-fBVrfx0o-unsplash 1.png";
import Arrow from "./assets/about-us/Arrow 1.png";
import gellary_1 from "./assets/gellary/gellary_1.png";
import gellary_2 from "./assets/gellary/gellary_2.png";
import gellary_3 from "./assets/gellary/gellary_3.png";
import gellary_4 from "./assets/gellary/gellary_4.png";
import starCOLORED from "./assets/review/starCOLORED.png";
import star from "./assets/review/star.png";
import userPhoto from "./assets/review/userPhoto.png";

import Services from "./component/service";

const Lending: React.FC = () => {
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState<string>("");

  const handleRatingChange = (rate: number): void => {
    setRating(rate);
  };

  const handleCommentChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setComment(e.target.value);
  };

  return (
    <div>
      <main>
        <section>
          <div className="banner-warp">
            <div className="container">
              <div id="hero-banner" className="banner">
                <span className="banner__text">EXPERT CARE</span>
                <b className="banner__trend">OFF THE DIRT</b>
                <br />
                <span className="banner__text_ru">
                  Доверьте свою обувь нам.
                </span>
                <div className="banner-link-warp">
                  <a href="#" className="banner__link btn-primary">
                    Заказать
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="about-cleans_container">
              <div className="about-cleans_block-img">
                <img
                  className="about-cleans_img"
                  src={about_cleans_img}
                  alt="bg-block"
                />
                <h2>
                  КОМПЛЕКСНЫЙ <br /> ПОДХОД
                </h2>
                <p>ПОЗАБОТЬТЕСЬ О СЕБЕ</p>
                <img className="arrow-icon" src={Arrow} alt="arrow" />
              </div>
              <div className="about-cleans_block-text">
                <h2 className="header-text_about-cleans">CLEANS</h2>
                <p className="description-text_about-cleans">
                  – это команда профессионалов, которая специализируется на
                  химчистке обуви. Мы понимаем, что обувь – это не только
                  элемент гардероба, но и зеркало Вашей личной гигиены.
                </p>
                <button className="btn_about-cleans">Подробнее</button>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="gallery">
              <div className="gallery_top">
                <div className="gallery-top-left">
                  <div className="gallery-title_1 title-section_gallery">
                    <h2>ПРИМЕРЫ</h2>
                  </div>
                  <div className="gallery-top-left-image">
                    <img
                      className="gallery-img_1"
                      src={gellary_1}
                      alt="Кроссовки"
                    />
                  </div>
                </div>
                <div className="gallery-top-right">
                  <div className="gallery-top-right-image">
                    <img
                      className="gallery-img"
                      src={gellary_2}
                      alt="Кроссовки"
                    />
                  </div>
                </div>
              </div>
              <div className="gallery-bottom">
                <div className="gallery-bottom-left">
                  <div className="gallery-bottom-left-image">
                    <img
                      className="gallery-img"
                      src={gellary_3}
                      alt="Кроссовки"
                    />
                  </div>
                </div>
                <div className="gallery-bottom-right">
                  <div className="gallery-title_2 title-section_gallery">
                    <h2>РАБОТ</h2>
                  </div>
                  <div className="gallery-bottom-right-image">
                    <img
                      className="gallery-img"
                      src={gellary_4}
                      alt="Кроссовки"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div id="about-us-warp-href" className="about-us-warp">
              <div className="about-us-warp-header title-section">
                <h2>ПОЧЕМУ СТОИТ</h2>
                <h2>ВЫБРАТЬ НАС?</h2>
              </div>
              <div className="about-us-warp-cards">
                <div className="about-us-warp-card">
                  <div className="about-us-warp-card-header">
                    <div className="card-number">1</div>
                  </div>
                  <div className="about-us-warp-card-header-3">
                    <h3>Качество обслуживания</h3>
                  </div>
                  <p>
                    Мы обеспечиваем высокое качество химчистки обуви, которое
                    невозможно достичь при использовании домашних средств.
                  </p>
                </div>

                <div className="about-us-warp-card">
                  <div className="about-us-warp-card-header">
                    <div className="card-number">2</div>
                  </div>
                  <div className="about-us-warp-card-header-4">
                    <h3>Мастерство</h3>
                  </div>
                  <p>
                    Наша команда профессионалов обладает многолетним опытом и
                    знаниями в области химчистки обуви.
                  </p>
                </div>

                <div className="about-us-warp-card">
                  <div className="about-us-warp-card-header">
                    <div className="card-number">3</div>
                  </div>
                  <div className="about-us-warp-card-header-4">
                    <h3>Удобство</h3>
                  </div>
                  <p>
                    Наш сервис предоставляет удобный способ оформления заказа и
                    очистки обуви, которые экономят время клиентов.
                  </p>
                </div>

                <div className="about-us-warp-card">
                  <div className="about-us-warp-card-header">
                    <div className="card-number">4</div>
                  </div>
                  <div className="about-us-warp-card-header-4">
                    <h3>Экологичность</h3>
                  </div>
                  <p>
                    Наша химчистка использует только безопасные и экологически
                    чистые средства для химчистки обуви.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Services />

        <section>
          <div className="container">
            <div className="review-header title-section">
              <h2>ВАШИ</h2>
              <h2>ОТЗЫВЫ</h2>
            </div>
            <div className="review-section" id="review">
              <div className="review-box-cards">
                {/* Карточка 1 */}
                <div className="swiper-slide review-block-left">
                  <div className="review-block-card">
                    <div className="text-in-card">
                      <p>
                        С другой стороны постоянный количественный рост и сфера
                        нашей активности играет важную роль в формировании
                        соответствующий условий активизации.
                      </p>
                    </div>
                    <div className="rate-sec">
                      {[...Array(5)].map((_, i) => (
                        <img
                          key={i}
                          className="star"
                          src={starCOLORED}
                          alt="Звезда"
                        />
                      ))}
                    </div>
                  </div>
                  <div className="review-block-card-under"></div>
                  <div className="user-block-card">
                    <img src={userPhoto} alt="Картинка Профиля" />
                    <div className="user-name-info">
                      <p>Имя Фамилов</p>
                      <div className="user-time-review-past">
                        <p>10 дней назад</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Карточка 2 */}
                <div className="swiper-slide review-block-center">
                  <div className="review-block-card">
                    <div className="text-in-card">
                      <p>
                        С другой стороны постоянный количественный рост и сфера
                        нашей активности играет важную роль в формировании
                        соответствующий условий активизации.
                      </p>
                    </div>
                    <div className="rate-sec">
                      {[...Array(5)].map((_, i) => (
                        <img
                          key={i}
                          className="star"
                          src={starCOLORED}
                          alt="Звезда"
                        />
                      ))}
                    </div>
                  </div>
                  <div className="review-block-card-under"></div>
                  <div className="user-block-card">
                    <img src={userPhoto} alt="Картинка Профиля" />
                    <div className="user-name-info">
                      <p>Имя Фамилов</p>
                      <div className="user-time-review-past">
                        <p>10 дней назад</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Карточка 3 */}
                <div className="swiper-slide review-block-right">
                  <div className="review-block-card">
                    <div className="text-in-card">
                      <p>Это кринж бро</p>
                    </div>
                    <div className="rate-sec">
                      {[...Array(4)].map((_, i) => (
                        <img
                          key={i}
                          className="star"
                          src={starCOLORED}
                          alt="Звезда"
                        />
                      ))}
                      <img className="star" src={star} alt="Звезда" />
                    </div>
                  </div>
                  <div className="review-block-card-under"></div>
                  <div className="user-block-card">
                    <img src={userPhoto} alt="Картинка Профиля" />
                    <div className="user-name-info">
                      <p>Имя Фамилов</p>
                      <div className="user-time-review-past">
                        <p>10 дней назад</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Оставить отзыв */}
              <div className="review-block-write">
                <div className="review-block-write-header">
                  <h2 className="review-block-write-header_h2">ОСТАВИТЬ</h2>
                  <h2>СВОЙ</h2>
                </div>
                <div className="user-block-rating_write_stat">
                  <div className="user-block-rating-stat">
                    {[5, 4, 3, 2, 1].map((rate) => (
                      <React.Fragment key={rate}>
                        <input
                          type="radio"
                          name="rate"
                          id={`rate-${rate}`}
                          checked={rating === rate}
                          onChange={() => handleRatingChange(rate)}
                        />
                        <label
                          htmlFor={`rate-${rate}`}
                          className="fas fa-star"
                        ></label>
                      </React.Fragment>
                    ))}
                  </div>
                  <div className="user-block-rating_write">
                    <div className="user-block-rating-prof">
                      <img
                        className="prof-pic"
                        src={userPhoto}
                        alt="Картинка Профиля"
                      />
                    </div>
                    <div className="review-write-input">
                      <form onSubmit={(e) => e.preventDefault()}>
                        <textarea
                          cols={30}
                          value={comment}
                          onChange={handleCommentChange}
                        ></textarea>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <button className="btn_review-section">Отправить</button>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="logo text">CLEANS</div>
        <div className="footer-right">
          <div className="mirea text">РТУ МИРЭА</div>
          <div className="project text">Проектная работа</div>
        </div>
      </footer>
    </div>
  );
};

export default Lending;
