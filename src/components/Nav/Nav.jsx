import "./Nav.scss";
const Nav = () => {
  return (
    <nav className="navbar__container">
      <li className="navbar__item">
        <a href="#del-dia" className="navbar__link">
          Del día
        </a>
      </li>
      <li className="navbar__item" value="otros">
        <a href="#menu" className="navbar__link">
          Desayunos
        </a>
      </li>
      <li className="navbar__item">Almuerzos</li>
    </nav>
  );
};

export default Nav;
