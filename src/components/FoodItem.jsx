import styles from "./fooditem.module.css";

export default function FoodItem({ food, setFoodId }) {
  return (
    <>
      <div className={styles.itemContainer}>
        <img src={food.image} />
        <h1>{food.title}</h1>
        <button onClick={() => setFoodId(food.id)}>View Recipe</button>
      </div>
    </>
  );
}
