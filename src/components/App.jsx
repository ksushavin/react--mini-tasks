import { GlobalStyle } from './GlobalStyle';
import stickers from '../stickers.json';
import { StickerList } from "./StickerList/StickerList";


export const App = () => {
  return (
    <>
      <StickerList stickers={stickers} />
      <GlobalStyle/>
    </>
  );
};
