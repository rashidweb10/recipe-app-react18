import { useEffect, useState } from "react";
import styles from "./search.module.css";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "91828970ee0d41cdb2c3d7d07dd2877c"; //"a285c2fdcf5141dab7230960771b0a68";

export default function Search({ foodData, setfoodData }) {
  const [query, setQuery] = useState("Pizza");
  useEffect(() => {
    async function fetchFood() {
      const response = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await response.json();
      setfoodData(data.results);
    }
    fetchFood();
  }, [query]);
  return (
    <>
      <div className={styles.searchContainer}>
        <input
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          type="text"
          name="search"
        ></input>
      </div>
    </>
  );
}
