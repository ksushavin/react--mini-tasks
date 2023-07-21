import { Recipe } from './Recipe/Recipe';
import recipes from '../recipes.json';

export const App = () => {
  return (
    <>
      {recipes.map((recipe) => (
        <Recipe key={recipe.id} recipe={recipe} />
      ))}
    </>
  );
};
