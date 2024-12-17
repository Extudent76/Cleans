import "./index.css";
import { Link, useNavigate } from "react-router-dom";
import LOGO from "./assets/header-menu/LOGO CLEANS.png";
import { useStore } from "./store";

export const Header = () => {
  const userName = useStore((state) => state.user.name);

  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate("/register");
  };

  return (
    <header id="hero-banner-href" className="header-menu">
      <div className="container_menu">
        <div className="header-price-wrapper">
          <div className="header">
            <Link to="/#hero-banner">
              <img className="header__title" src={LOGO} alt="Logo" />
            </Link>
            <nav className="header-nav">
              <ul>
                <li className="header-nav__item">
                  <Link className="header-nav__item-link" to="/">
                    ГЛАВНАЯ
                  </Link>
                </li>
                <li className="header-nav__item">
                  <a
                    className="header-nav__item-link"
                    href="/#about-us-warp-href"
                  >
                    О НАС
                  </a>
                </li>
                <li className="header-nav__item">
                  <Link className="header-nav__item-link" to="/service">
                    УСЛУГИ
                  </Link>
                </li>
                <li className="header-nav__item">
                  <a className="header-nav__item-link" href="/#review">
                    ОТЗЫВЫ
                  </a>
                </li>
                <li className="header-nav__item">
                  <Link className="header-nav__item-link" to="/cart">
                    КОРЗИНА
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="tg-and-user-block">
              <div className="header-user">
                {userName ? (
                  <Link to={"/user"}>{userName}</Link>
                ) : (
                  <>
                    <button className="regButton" onClick={handleRegisterClick}>
                      ВХОД
                    </button>
                    <span> / </span>
                    <button className="regButton" onClick={handleRegisterClick}>
                      РЕГИСТРАЦИЯ
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
