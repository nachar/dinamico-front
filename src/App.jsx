import "./App.scss";
import { useEffect, useState } from "react";
import { getMenu } from "./api/dynamic-menu.js";
import Nav from "./components/Nav/Nav.jsx";
import PlateOfTheDay from "./components/PlateOfTheDay/PlateOfTheDay.jsx";

function App() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data } = await getMenu();
    setMenu(data);

    // console.log(menu);
  };
  return (
    <>
      <PlateOfTheDay menu={menu} />
      <Nav />
    </>
  );
}

export default App;
