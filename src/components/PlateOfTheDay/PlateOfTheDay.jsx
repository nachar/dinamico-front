import "./PlateOfTheDay.scss";

const PlateOfDeDay = ({ menu }) => {
  return (
    <section className="potd-container" id="del-dia">
      {menu.map((plate) => {
        const {
          title,
          description,
          image,
          featured,
          price,
        } = plate;

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
            <div
              className="potd-item-container"
              key={title}
            >
              <img
                src={photo}
                alt=""
                className="potd-img"
              />
              <div className="potd-item">
                <span className="potd-top" />
                <div>
                  <h2 className="potd-title--1">
                    Plato del día
                  </h2>
                  <h3 className="potd-title--2">{title}</h3>
                </div>
                <span className="potd-bottom" />
                {/*  */}
                <div className="simpleMenu-container">
                  <div className="simpleMenu-title">
                    <h4>Simple</h4>
                    <h5>$5.000</h5>
                  </div>
                  <p className="simpleMenu-description">
                    Plato del día + pan y pebre
                  </p>
                </div>
                {/*  */}
                <div className="executiveMenu-container">
                  <div className="executiveMenu-title">
                    <h4>Ejecutivo</h4>
                    <h5>$7.900</h5>
                  </div>
                  <ul className="executiveMenu-list">
                    <li>Plato del día</li>
                    <li>Ensalada de ‘variable’</li>
                    <li>Pan & pebre</li>
                    <li>Bebida en lata</li>
                    <li>Postre ‘variable‘</li>
                  </ul>
                </div>
              </div>
            </div>
          )
        );
      })}
    </section>
  );
};

export default PlateOfDeDay;
