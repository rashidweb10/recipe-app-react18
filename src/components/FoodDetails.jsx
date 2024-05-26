import { useEffect, useState } from "react";
import styles from "./fooddetails.module.css";
export default function FoodDetails({ foodId }) {
  const [foodDetails, setFoodDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "91828970ee0d41cdb2c3d7d07dd2877c"; //"a285c2fdcf5141dab7230960771b0a68";
  useEffect(() => {
    async function fetchFoodDetails() {
      const response = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await response.json();
      console.log(data);
      console.log(URL);
      setFoodDetails(data);
      setIsLoading(false);
    }

    fetchFoodDetails();
  }, [foodId]);
  return (
    <>
      <div className={styles.detailContainer}>
        <h1>{foodDetails.title}</h1>
        <img src={foodDetails.image} />
        <p>
          <strong>Ready in {foodDetails.readyInMinutes} minutes</strong>
        </p>
        <p>
          <strong>Food type : </strong>{" "}
          {foodDetails.vegetarian ? "Veg" : "Non-Veg"}
        </p>
        <p>
          <strong>Description :</strong> {foodDetails.summary}
        </p>
        <h2>Instructions:</h2>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          foodDetails.analyzedInstructions[0].steps.map((ins) => (
            <li key={ins.number}>{ins.step}</li>
          ))
        )}
      </div>
    </>
  );
}
