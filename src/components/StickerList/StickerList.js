import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { Sticker } from '../Sticker/Sticker';

//li не виноситься в окремий компонент, це частина списку. Виносимо лише картинку з лейблом

export const StickerList = ({ stickers }) => {
  return (
    <Box as="ul" display="flex" gridGap={3}>
      {stickers.map((sticker, idx) => (
        <li key={idx}>
          <Sticker sticker={sticker} />
        </li>
      ))}
    </Box>
  );
};

StickerList.propTypes = {
  stickers: PropTypes.array.isRequired,
};
