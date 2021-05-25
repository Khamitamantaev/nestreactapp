import styled from 'styled-components';
import { THEME_COLOR, THEME_SIZE } from '../../../theme';
import { spacing } from '../../../theme';
export const Input = styled.input`
  background: ${THEME_COLOR.INPUT_BACKGROUND_COLOR};
  border-radius: ${spacing(1.25)};
  padding: ${THEME_SIZE.INPUT.PADDING};
`;
