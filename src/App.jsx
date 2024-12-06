import { useEffect, useState } from 'react';
import './App.css';
import { getMenu } from "./api/dynamic-menu.js";

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
      <ul>
        {
          menu.map(({title, description, price, active}) => {
            return (active) ? <li>
              <p>{title}</p>
              <p>{description}</p>
              <p>{price}</p>
            </li> : ''
          })}
      </ul>
    </>
  )
}

export default App
