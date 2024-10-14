import React, { useState } from 'react';
import '../style.css';
import Maxium_5_1 from '../assets/Services/Maxium_5 1.png';
import Maxium_5_2 from '../assets/Services/Maxium_5 2.png';
import Maxium_5_3 from '../assets/Services/Maxium_5 3.png';
import Maxium_5_4 from '../assets/Services/Maxium_5 4.png';
import Maxium_5_5 from '../assets/Services/Maxium_5 5.png';

type Tab = {
    key: string;
    title: string;
    content: React.ReactNode;
  }

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('Кроссовки');

  const tabs: Tab[] = [
    {
      key: 'Кроссовки',
      title: 'Кроссовки',
      content: (
        <div className="price-block-01">
        <div className="price-block-01-left">
          <div className="price-block-01-left-header">
            <div className="card-header">КЕДЫ И КРОССОВКИ</div>
          </div>
          <div className="price-block-01-left-content">
            <div className="price-block-01-left-content-1-1">
              <p className="body-text-white">
                <span className="text-span-5">ЛЕГКИЕ</span>
              </p>
              <p className="body-text-white">Синтетика/Сетка/Резина</p>
            </div>
            <div className="price-block-01-left-content-1-2">
              <div className="price-block-01-left-content-1-2-price">
                <div className="card-price">2000</div>
                <div className="ruble-price-01-block">
                  <p className="price-text-white">руб.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="price-block-01-left-line"></div>
          <div className="price-block-01-left-content">
    <div className="price-block-01-left-content-1-1">
        <p className="body-text-white">
            <span className="text-span-5">
                СТАНДАРТНЫЕ
            </span>
        </p>
        <p className="body-text-white">
            Кожа/Замша/Нубук/Ткань/ Комбинированные материалы
        </p>
    </div>
    <div className="price-block-01-left-content-1-2">
        <div className="price-block-01-left-content-1-2-price">
            <div className="card-price">2500</div>
            <div className="ruble-price-01-block">
                <p className="price-text-white">руб.</p>
            </div>
        </div>
    </div>
          </div>
        <div className="price-block-01-left-line"></div>
        <div className="price-block-01-left-content">
            <div className="price-block-01-left-content-1-1">
                <p className="body-text-white">
                    <span className="text-span-5">
                        ГЛУБОКАЯ ОЧИСТКА
                    </span>
                </p>
                <p className="body-text-white">
                    Для кроссовок, которые нужно спасать
                </p>
            </div>
            <div className="price-block-01-left-content-1-2">
                <div className="price-block-01-left-content-1-2-price">
                    <div className="card-price">+500</div>
                    <div className="ruble-price-01-block">
                        <p className="price-text-white">руб.</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div className="price-block-01-right">
          <img src={Maxium_5_1} alt="кроссовок" />
          <div className="price-block-01-right-time">
            <div className="price-block-01-right-time-1">10</div>
            <div className="price-block-01-right-time-2">
              <div className="body-text-white-2">
                <span className="text-span-6">ДНЕЙ</span>
              </div>
              <div className="body-text-white">Срок выполнения работ</div>
            </div>
          </div>
        </div>
      </div>
      ),
    },
    {
      key: 'Классическая',
      title: 'Классическая',
      content: (
        <div className="price-block-02">
        <div className="price-block-01-left">
            <div className="price-block-01-left-header">
                <div className="card-header">
                    КЛАССИЧЕСКАЯ ОБУВЬ
                </div>
            </div>
            <div className="price-block-01-left-content">
                <div className="price-block-01-left-content-1-1">
                    <p className="body-text-white">
                        <span className="text-span-5">
                            ЛЕГКИЕ
                        </span>
                    </p>
                    <p className="body-text-white">
                        Туфли, мокасины, лоферы
                    </p>
                </div>
                <div className="price-block-01-left-content-1-2">
                    <div className="price-block-01-left-content-1-2-price">
                        <div className="card-price">2500</div>
                        <div className="ruble-price-01-block">
                            <p className="price-text-white">руб.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="price-block-01-left-line"></div>
            <div className="price-block-01-left-content">
                <div className="price-block-01-left-content-1-1">
                    <p className="body-text-white">
                        <span className="text-span-5">
                            СТАНДАРТНЫЕ
                        </span>
                    </p>
                    <p className="body-text-white">
                        Ботинки, полусапоги
                    </p>
                </div>
                <div className="price-block-01-left-content-1-2">
                    <div className="price-block-01-left-content-1-2-price">
                        <div className="card-price">3000</div>
                        <div className="ruble-price-01-block">
                            <p className="price-text-white">руб.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="price-block-01-left-line"></div>
            <div className="price-block-01-left-content">
                <div className="price-block-01-left-content-1-1">
                    <p className="body-text-white">
                        <span className="text-span-5">
                            ПОЛНЫЙ УХОД
                        </span>
                    </p>
                    <p className="body-text-white">
                        Обувь на кожаной подошве
                    </p>
                </div>
                <div className="price-block-01-left-content-1-2">
                    <div className="price-block-01-left-content-1-2-price">
                        <div className="card-price">+1000</div>
                        <div className="ruble-price-01-block">
                            <p className="price-text-white">руб.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="price-block-01-right">
            <img src={Maxium_5_2} alt="кроссовок" /> 
            <div className="price-block-01-right-time">
                <div className="price-block-01-right-time-1">
                10
                </div>
                <div className="price-block-01-right-time-2">
                    <div className="body-text-white-2">
                        <span className="text-span-6">ДНЕЙ</span>
                    </div>
                    <div className="body-text-white">Срок выполнения работ</div>
                </div>
            </div>
        </div>
    </div>
      ),
    },
    {
        key: 'Премиальная',
        title: 'Премиальная',
        content: (
          <div className="price-block-03">
            <div className="price-block-01-left">
              <div className="price-block-01-left-header">
                <div className="card-header">ПРЕМИУМНАЯ ОБУВЬ</div>
              </div>
              <div className="price-block-01-left-content">
                <div className="price-block-01-left-content-1-1">
                  <p className="body-text-white">
                    <span className="text-span-5">ДЕЛИКАТНАЯ ОЧИСТКА</span>
                  </p>
                  <p className="body-text-white">
                    Для кроссовок и обуви из люкс-сегмента
                  </p>
                </div>
                <div className="price-block-01-left-content-1-2">
                  <div className="price-block-01-left-content-1-2-price">
                    <div className="card-price">4000</div>
                    <div className="ruble-price-01-block">
                      <p className="price-text-white">руб.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="price-block-01-left-line"></div>
              <div className="price-block-02-left-content">
                <div className="price-block-01-left-content-1-1">
                  <p className="body-text-white">
                    <span className="text-span-5">ВЛАГООТВОДЯЩАЯ ПРОПИТКА</span>
                  </p>
                  <p className="body-text-white">
                    Обработаем верхнюю часть кроссовка для защиты от пыли, грязи и
                    влаги
                  </p>
                </div>
                <div className="price-block-01-left-content-1-2">
                  <div className="price-block-01-left-content-1-2-price">
                    <div className="card-price">500</div>
                    <div className="ruble-price-01-block">
                      <p className="price-text-white">руб.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="price-block-01-right">
              <img src={Maxium_5_3} alt="кроссовок" />
              <div className="price-block-01-right-time">
                <div className="price-block-01-right-time-1">7</div>
                <div className="price-block-01-right-time-2">
                  <div className="body-text-white-2">
                    <span className="text-span-6">ДНЕЙ</span>
                  </div>
                  <div className="body-text-white">Срок выполнения работ</div>
                </div>
              </div>
            </div>
          </div>
        ),
    },
    {
        key: 'Сезонная',
        title: 'Сезонная',
        content: (
          <div className="price-block-04">
            <div className="price-block-01-left">
              <div className="price-block-01-left-header">
                <div className="card-header">ЗИМНЯЯ ОБУВЬ</div>
              </div>
              <div className="price-block-01-left-content">
                <div className="price-block-01-left-content-1-1">
                  <p className="body-text-white">
                    <span className="text-span-5">НИЗКАЯ ОБУВЬ</span>
                  </p>
                  <p className="body-text-white">Зимняя или демисезонная обувь</p>
                </div>
                <div className="price-block-01-left-content-1-2">
                  <div className="price-block-01-left-content-1-2-price">
                    <div className="card-price">3500</div>
                    <div className="ruble-price-01-block">
                      <p className="price-text-white">руб.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="price-block-01-left-line"></div>
              <div className="price-block-01-left-content">
                <div className="price-block-01-left-content-1-1">
                  <p className="body-text-white">
                    <span className="text-span-5">СРЕДНЯЯ</span>
                  </p>
                  <p className="body-text-white">Ботинки/полуботинки</p>
                </div>
                <div className="price-block-01-left-content-1-2">
                  <div className="price-block-01-left-content-1-2-price">
                    <div className="card-price">4000</div>
                    <div className="ruble-price-01-block">
                      <p className="price-text-white">руб.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="price-block-01-left-line"></div>
              <div className="price-block-01-left-content">
                <div className="price-block-01-left-content-1-1">
                  <p className="body-text-white">
                    <span className="text-span-5">ВЫСОКАЯ</span>
                  </p>
                  <p className="body-text-white">
                    Высокие ботинки/Сапоги/Ботфорты
                  </p>
                </div>
                <div className="price-block-01-left-content-1-2">
                  <div className="price-block-01-left-content-1-2-price">
                    <div className="card-price">5000</div>
                    <div className="ruble-price-01-block">
                      <p className="price-text-white">руб.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="price-block-01-right">
              <img src={Maxium_5_4} alt="кроссовок" />
              <div className="price-block-01-right-time">
                <div className="price-block-01-right-time-1">10</div>
                <div className="price-block-01-right-time-2">
                  <div className="body-text-white-2">
                    <span className="text-span-6">ДНЕЙ</span>
                  </div>
                  <div className="body-text-white">Срок выполнения работ</div>
                </div>
              </div>
            </div>
          </div>
        ),
    },
    {
        key: 'Дополнительно',
        title: 'Дополнительно',
        content: (
          <div className="price-block-05">
            <div className="price-block-01-left">
              <div className="price-block-01-left-header">
                <div className="card-header">ДОПОЛНИТЕЛЬНЫЕ УСЛУГИ</div>
              </div>
              <div className="price-block-01-left-content">
                <div className="price-block-01-left-content-1-1">
                  <p className="body-text-white">
                    <span className="text-span-5">Дезодорант</span>
                  </p>
                  <p className="body-text-white">
                    Обработаем внутреннюю часть кроссовка антибактериальным
                    средством
                  </p>
                </div>
                <div className="price-block-01-left-content-1-2">
                  <div className="price-block-01-left-content-1-2-price">
                    <div className="card-price">400</div>
                    <div className="ruble-price-01-block">
                      <p className="price-text-white">руб.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="price-block-01-left-line"></div>
              <div className="price-block-01-left-content">
                <div className="price-block-01-left-content-1-1">
                  <p className="body-text-white">
                    <span className="text-span-5">
                      Локальная реставрация и покраска потертостей и царапин
                    </span>
                  </p>
                </div>
                <div className="price-block-01-left-content-1-2">
                  <div className="price-block-01-left-content-1-2-price">
                    <div className="card-price">1500</div>
                    <div className="ruble-price-01-block">
                      <p className="price-text-white">руб.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="price-block-01-left-line"></div>
              <div className="price-block-01-left-content">
                <div className="price-block-01-left-content-1-1">
                  <p className="body-text-white">
                    <span className="text-span-5">Отбеливание подошвы</span>
                  </p>
                </div>
                <div className="price-block-01-left-content-1-2">
                  <div className="price-block-01-left-content-1-2-price">
                    <div className="card-price">1000</div>
                    <div className="ruble-price-01-block">
                      <p className="price-text-white">руб.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="price-block-01-right">
              <img src={Maxium_5_5} alt="кроссовок" />
              <div className="price-block-01-right-time">
                <div className="price-block-01-right-time-1">10</div>
                <div className="price-block-01-right-time-2">
                  <div className="body-text-white-2">
                    <span className="text-span-6">ДНЕЙ</span>
                  </div>
                  <div className="body-text-white">Срок выполнения работ</div>
                </div>
              </div>
            </div>
          </div>
        ),
    },
  ];

  return (
    <section>
      <div className="container">
        <div id="Serv" className="Services">
          <div className="Services-header title-section">
            <h2>НАШИ</h2>
            <h2>УСЛУГИ</h2>
          </div>
          <nav className="Services-nav">
            <ul className="Services-nav__items">
              {tabs.map((tab) => (
                <li
                  key={tab.key}
                  data-li={tab.title}
                  className={`Services-nav__item ${activeTab === tab.key ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.key)}
                >
                  <a
                    className={`Services-nav__item-link ${activeTab === tab.key ? 'active' : ''}`}
                    href="#"
                    onClick={(e) => e.preventDefault()}
                  >
                    {tab.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="Services-cards">
          {tabs.map((tab) => (
            <div
              key={tab.key}
              data-w-tab={tab.key}
              className={`item ${tab.key}`}
              style={{ display: activeTab === tab.key ? 'block' : 'none' }}
            >
              {tab.content}
            </div>
          ))}
        </div>
        <div className="Services-btn">
          <button className="btn-services">
            <a href="#">Заказать</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
