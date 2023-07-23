import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { Badge } from './RecipeDifficulty.styled';

export const RecipeDifficulty = ({ difficulty }) => {
  return (
    <Box mt={4}>
      <h3>Difficulty</h3>
      <Box display="inline-flex" alineItems="center" gridGap={4} mt={3}>
        <Badge selected={difficulty === 0}>Easy</Badge>
        <Badge selected={difficulty === 1}>Medium</Badge>
        <Badge selected={difficulty === 2}>Hard</Badge>
      </Box>
    </Box>
  );
};

RecipeDifficulty.propTypes = {
  difficulty: PropTypes.oneOf([0, 1, 2]).isRequired,
};
