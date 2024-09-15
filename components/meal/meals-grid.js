import MealItem from "./meal-item";
import classes from "./meals-grid.module.css";

// {...meal} is used to pass all the properties of meal to MealItem component
//  like title, slug, image, summary, creator
// long way to pass all the properties of meal to MealItem component
// <MealItem title={meal.title} slug={meal.slug} image={meal.image} summary={meal.summary} creator={meal.creator} />

export default function MealsGrid({ meals }) {
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}
