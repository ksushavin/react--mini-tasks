import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { Sticker } from '../Sticker/Sticker';
import { StickerItem } from './StickerList.styled';

//li не виноситься в окремий компонент, це частина списку. Виносимо лише картинку з лейблом

export class StickerList extends Component {
  state = {
    selectedSticker: null,
  };

  selectSticker = idx => {
    this.setState({ selectedSticker: idx });
  };

  render() {
    const { stickers, onSelect } = this.props;
    const { selectedSticker } = this.state;
    return (
      <Box as="ul" display="flex" gridGap={3} p={4} justifyContent="center">
        {stickers.map((sticker, idx) => (
          <StickerItem key={idx}>
            <Sticker
              sticker={sticker}
              idx={idx}
              isSelected={selectedSticker === idx}
              onSelect={onSelect}
              onToggle={this.selectSticker}
            />
          </StickerItem>
        ))}
      </Box>
    );
  }
}

StickerList.propTypes = {
  stickers: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
};
