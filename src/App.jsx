import "./App.scss";
import { useEffect, useState } from "react";
import { getMenu } from "./api/dynamic-menu.js";
import Nav from "./components/Nav/Nav.jsx";
import PlateOfTheDay from "./components/PlateOfTheDay/PlateOfTheDay.jsx";
import PlatesList from "./components/PlatesList/PlatesList.jsx";

function App() {
  const [menu, setMenu] = useState([]);
  const [sections, setSections] = useState([]);
  const [plateOfTheDay, setPlateOfTheDay] = useState();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data } = await getMenu();
    setMenu(data);
    mapSections(data);
    mapPlateOfTheDay(data);
  };

  const mapSections = (data) => {
    setSections(Array.from(
      new Set(
        data
          .map((item) => item.type)
          .filter((type) => type !== null)
      )
    ))
  };

  const mapPlateOfTheDay = (data) => {
    const plate = data.find(item => item?.featured);
    setPlateOfTheDay(plate);
  };

  return (
    <>
      {plateOfTheDay && <PlateOfTheDay plate={plateOfTheDay} />}


      {sections.map((type) => (
        <PlatesList key={type} type={type} menu={menu} />
      ))}
      <Nav sections={sections} />
    </>
  );
}

export default App;
