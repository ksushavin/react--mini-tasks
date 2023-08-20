import { Box } from "./Box";
import { LanguageFilter } from './LanguageFilter/LanguageFilter';
import { Header } from "./Header/Header";


export const App = () => {
  return (
    <Box color= '#fffae1'>
      <Box maxWidth='1280px' mx='auto' py='80px' px='80px'>
        <Header>Live cycles</Header>
        <LanguageFilter/>
      </Box>
    </Box>
  );
};






