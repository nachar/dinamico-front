import "./PlateItem.scss";

const PlateItem = ({ title, price, description }) => {
  return (
    <div className="item-container">
      <div className="item-header">
        <h4>{title}</h4>
        <h5>{price}</h5>
      </div>
      <p className="item-description">{description}</p>
    </div>
  );
};

export default PlateItem;
