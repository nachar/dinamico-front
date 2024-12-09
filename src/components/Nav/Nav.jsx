import { useState } from "react";
import "./Nav.scss";
const Nav = () => {
  const [navState, setNavState] = useState("recomendades");

  function changeState(e) {
    const value = e.target.value;
    setNavState(value);
    console.log(navState);
  }

  return (
    <nav className="navbar__container">
      <li
        className="navbar__item"
        value="recomendados"
        onClick={changeState}
      >
        <a href="#recomendados" className="navbar__link">
          Recomendados
        </a>
      </li>
      <li
        className="navbar__item"
        value="otros"
        onClick={changeState}
      >
        <a href="#menu" className="navbar__link">
          Menú
        </a>
      </li>
      <li
        className="navbar__item"
        value="item"
        onClick={changeState}
      >
        Item
      </li>
    </nav>
  );
};

export default Nav;
