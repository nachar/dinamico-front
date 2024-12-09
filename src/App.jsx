import "./App.scss";
import { useEffect, useState } from "react";
import { getMenu } from "./api/dynamic-menu.js";
import Nav from "./components/Nav/Nav.jsx";
import FeaturedContainer from "./components/FeaturedContainer/FeaturedContainer.jsx";
import MenuContainer from "./components/MenuContainer/MenuContainer.jsx";

function App() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data } = await getMenu();
    setMenu(data);
  };
  return (
    <>
      <FeaturedContainer data={menu} />
      <MenuContainer data={menu} />
      <Nav />
    </>
  );
}

export default App;
