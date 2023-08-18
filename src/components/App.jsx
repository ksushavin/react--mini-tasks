import { Box } from "./Box";
import { LanguageCard } from "./LanguageCard/LanguageCard";
import { Header } from "./Header/Header";


export const App = () => {
  return (
    <Box color= '#fffae1' backgroundColor= 'black'>
      <Box maxWidth='1280px' mx='auto' py='80px' px='80px'>
        <Header>Event delegation</Header>
        <LanguageCard/>
      </Box>
    </Box>
  );
};






