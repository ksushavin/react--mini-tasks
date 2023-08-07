import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Box } from 'components/Box';

export class Sticker extends Component {
  // state = {
  //   isOpen: false,
  // };

  // toggleLable = () => {
  //   this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  // };

  render() {
    const {
      sticker: { img, label },
      idx,
      onSelect,
      isSelected,
      onToggle,
    } = this.props;

    return (
      <Box
        onClick={() => {
          onSelect(label);
          onToggle(idx);
          // this.toggleLable();
        }}
      >
        <img src={img} alt={label} width={120} />
        {/* {this.state.isOpen && <p>{label}</p>} */}
        {isSelected && <p>{label}</p>}
      </Box>
    );
  }
}

Sticker.propTypes = {
  sticker: PropTypes.shape({
    img: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
  idx: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};
