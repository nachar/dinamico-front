import MenuItem from "../MenuItem/MenuItem";
import "./MenuContainer.scss";

const MenuContainer = ({ data }) => {
  return (
    <>
      <h2 className="menu__title">Menú</h2>
      <section className="menu__container" id="menu">
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
            !featured && (
              <MenuItem
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
      ;
    </>
  );
};

export default MenuContainer;
