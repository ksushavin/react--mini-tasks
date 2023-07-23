import {useMedia} from 'react-use';
import { Recipe } from './Recipe/Recipe';
import { GlobalStyle } from './GlobalStyle';
import recipes from '../recipes.json';
import { Box } from 'components/Box';

export const App = () => {
  const isDesktop = useMedia('(min-width: 768px)');
  return (
    <>
      <Box
        as="header"
        display="flex"
        alineItems="center"
        justifyContent="space-between"
      >
        <h1>Logo</h1>
        {isDesktop ? <h1>Desktop nav</h1> : <h1>Mobile nav</h1>}
      </Box>
      {recipes.map((recipe) => (
        <Recipe key={recipe.id} recipe={recipe} />
      ))}
      <GlobalStyle />
    </>
  );
};
