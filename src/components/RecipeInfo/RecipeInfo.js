import PropTypes from 'prop-types';
import { InfoWrapper } from './RecipeInfo.styled';

//щоб зарендерити іконку - деструктуризуємо її, щоб прописати з великої букви. Інакше в розмітці вона не розпізнається

export const RecipeInfo = ({ icon: Icon, text }) => {
  return (
    <InfoWrapper>
      <Icon size={24} />
      <p>{text}</p>
    </InfoWrapper>
  );
};

RecipeInfo.propTypes = {
  icon: PropTypes.elementType.isRequired,
  text: PropTypes.string.isRequired,
};
