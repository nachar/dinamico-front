import "./App.scss";
import { useEffect, useState } from "react";
import { getMenu } from "./api/dynamic-menu.js";
import Nav from "./components/Nav/Nav.jsx";
import PlateOfTheDay from "./components/PlateOfTheDay/PlateOfTheDay.jsx";
import PlatesList from "./components/PlatesList/PlatesList.jsx";

function App() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data } = await getMenu();
    setMenu(data);
  };

  // Crear un nuevo array con las secciones únicas, excluyendo valores null
  const sections = Array.from(
    new Set(
      menu
        .map((item) => item.type)
        .filter((type) => type !== null)
    )
  );

  return (
    <>
      <PlateOfTheDay menu={menu} />

      {sections.map((type) => (
        <PlatesList key={type} type={type} menu={menu} />
      ))}
      <Nav sections={sections} />
    </>
  );
}

export default App;
