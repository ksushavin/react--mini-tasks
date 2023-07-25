import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'components/Box';

export const Sticker = ({ sticker: { img, label } }) => {
  return (
    <Box border={1} borderStyle="solid" borderRadius={4}>
      <img src={img} alt={label} width={120} />
      <p>{label} ja</p>
    </Box>
  );
};

Sticker.propTypes = {
  sticker: PropTypes.shape({
    img: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
};
