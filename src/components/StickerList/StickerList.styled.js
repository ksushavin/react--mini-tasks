import styled from 'styled-components';

export const StickerItem = styled.li`
  padding: ${p => p.theme.space[3]}px;
  border: ${p => `${p.theme.borders.normal} ${p.theme.colors.black}`};
  border-radius: ${p => p.theme.radii.sm};
`;
