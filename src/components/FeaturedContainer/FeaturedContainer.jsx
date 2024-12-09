import ItemCard from "../FeaturedItem/FeaturedItem";
import "./FeaturedContainer.scss";

const FeaturedContainer = ({ data }) => {
  return (
    <>
      <h2 className="featured__title">
        Recomendados del chef
      </h2>
      <section
        className="featured__container"
        id="recomendados"
      >
        {data.map((item) => {
          const {
            id,
            title,
            description,
            price,
            image,
            featured,
          } = item;

          const formattedPrice = price.toLocaleString(
            "es-CL",
            {
              style: "currency",
              currency: "CLP",
            }
          );
          const photo = `http://localhost:1337${image.url}`; // costruyendo url completa de las imagenes

          return (
            featured && (
              <ItemCard
                key={id}
                title={title}
                description={description}
                price={formattedPrice}
                photo={photo}
              />
            )
          );
        })}
      </section>
    </>
  );
};

export default FeaturedContainer;
