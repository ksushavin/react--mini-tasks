import PropTypes from 'prop-types';
import { Box } from 'components/Box';

export const Sticker = props => {
  const {
    sticker: { img, label },
    idx,
    onSelect,
    isSelected,
    onToggle,
  } = props;

  return (
    <Box
      onClick={() => {
        onSelect(label);
        onToggle(idx);
      }}
    >
      <img src={img} alt={label} width={120} />
      {isSelected && <p>{label}</p>}
    </Box>
  );
};

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

//Sticker через клас

// export class Sticker extends Component {
//   render() {
//     const {
//       sticker: { img, label },
//       idx,
//       onSelect,
//       isSelected,
//       onToggle,
//     } = this.props;

//     return (
//       <Box
//         onClick={() => {
//           onSelect(label);
//           onToggle(idx);
//         }}
//       >
//         <img src={img} alt={label} width={120} />
//         {isSelected && <p>{label}</p>}
//       </Box>
//     );
//   }
// }

// щоб клік по картці розгортав її. тут потрібен внутрішній стейт

// export class Sticker extends Component {
//   state = {
//     isOpen: false,
//   };

//   toggleLable = () => {
//     this.setState(prevState => ({ isOpen: !prevState.isOpen }));
//   };

//   render() {
//     const {
//       sticker: { img, label },
//       onSelect
//     } = this.props;

//     return (
//       <Box
//         onClick={() => {
//           onSelect(label);
//           this.toggleLable();
//         }}
//       >
//         <img src={img} alt={label} width={120} />
//         {this.state.isOpen && <p>{label}</p>}
//       </Box>
//     );
//   }
// }
