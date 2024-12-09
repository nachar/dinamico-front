import "./MenuItem.scss";
const MenuItem = ({
  title,
  description,
  price,
  photo,
  id,
}) => {
  return (
    <>
      <li className="menuItem__container" key={id}>
        <img
          className="menuItem__image"
          src={photo}
          alt={title}
        />
        <div className="menuItem__contentContainer">
          <h2 className="menuItem__title">{title}</h2>
          <p className="menuItem__description">
            {description}
          </p>
          <p className="menuItem__price">{price}</p>
        </div>
      </li>
    </>
  );
};

export default MenuItem;
