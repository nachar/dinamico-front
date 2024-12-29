import PlateItem from "../PlateItem/PlateItem";
import "./PlatesList.scss";

const PlatesList = ({ menu, type }) => {
  const getImagePath = (category) => {
    return new URL(
      `../../assets/${category
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[&]/g, "&")
        .replace(/[^\w&-]/g, "")}.png`,
      import.meta.url
    ).href;
  };

  const imagePath = getImagePath(type);

  return (
    <section className="platesList-container" id={type}>
      <span className="platesList-shape--top" />
      <span className="platesList-shape--bottom" />

      <div className="platesList-header">
        <img
          src={imagePath}
          alt=""
          className="platesList-image"
        />
        <h2>{type}</h2>
      </div>
      {menu.map((plate) => {
        const formattedPrice = plate.price.toLocaleString(
          "es-CL",
          {
            style: "currency",
            currency: "CLP",
          }
        );
        return (
          plate.type === type && (
            <PlateItem
              key={plate.id}
              {...plate}
              price={formattedPrice}
            />
          )
        );
      })}
    </section>
  );
};

export default PlatesList;
