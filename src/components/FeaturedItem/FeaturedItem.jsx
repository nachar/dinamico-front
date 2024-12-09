import "./FeaturedItem.scss";
const ItemCard = ({ title, description, price, photo }) => {
  return (
    <li className="featureCard__container">
      <img
        className="featureCard__image"
        src={photo}
        alt={title}
      />
      <h2 className="featureCard__title">{title}</h2>
      <p className="featureCard__description">
        {description}
      </p>
      <p className="featureCard__price">{price}</p>
    </li>
  );
};

export default ItemCard;
