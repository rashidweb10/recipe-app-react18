import { useState } from "react";
import Search from "./components/Search.jsx";
import FoodList from "./components/FoodList.jsx";
import FoodDetails from "./components/FoodDetails.jsx";
import Nav from "./components/Nav.jsx";
import Container from "./components/Container.jsx";
import "./App.css";

function App() {
  const [foodData, setfoodData] = useState([]);
  const [foodId, setFoodId] = useState(656329);
  return (
    <>
      <Nav />
      <Search foodData={foodData} setfoodData={setfoodData} />
      <Container>
        <FoodList setFoodId={setFoodId} foodData={foodData} />
      </Container>
      <Container>
        <FoodDetails foodId={foodId} />
      </Container>
    </>
  );
}

export default App;
