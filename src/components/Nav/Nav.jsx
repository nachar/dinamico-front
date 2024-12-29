import "./Nav.scss";
const Nav = ({ sections }) => {
  return (
    <nav className="navbar__container">
      <li className="navbar__item">
        <a href="#del-dia" className="navbar__link">
          Plato del día
        </a>
      </li>
      {sections.map((section) => (
        <li key={section} className="navbar__item">
          <a href={`#${section}`} className="navbar__link">
            {section}
          </a>
        </li>
      ))}
    </nav>
  );
};

export default Nav;
