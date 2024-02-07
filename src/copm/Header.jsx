import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Header = () => {
  
  const { theme, changeName } = useContext(ThemeContext);
  return (
    <div className={`myName`}>
      <header>
        <div className="container">
          <div className="logo">
            <Link to="/">
              <h1>salla react</h1>
            </Link>
          </div>

          <div className="icons">
            <div className="sing-up">
              <i
                onClick={() => {
                  changeName(theme === "light" ? "dark" : "light");
                }}
                class="fa-regular fa-moon"
              ></i>
            </div>

            <div className="sing-up">
              <Link to="/SignUp">
                <i class="fa-regular fa-user"></i>
                <div className="user-info">
                  <span>مرحبا بك</span>
                  <p>تسجيل الدخول</p>
                </div>
              </Link>
            </div>

            <div className="sing-up">
              <i class="fa-solid fa-cart-shopping"></i>
              <div className="user-info">
                <span>سلة المشتريات</span>
                <p>1000 $</p>
              </div>
            </div>
          </div>
        </div>
        <div className="conatiner">
          <div className="header">
            <ul>
              <NavLink to="/Mobeil">
                <li>الموبايلات</li>
              </NavLink>
              <NavLink to="/Cam">
                <li>الكاميرات</li>
              </NavLink>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
