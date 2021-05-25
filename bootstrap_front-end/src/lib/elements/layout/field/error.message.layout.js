import styled from 'styled-components';
import { spacing } from '../../../theme';
import { THEME_COLOR } from '../../../theme';
export const ErrorMessage = styled.span`
  color: ${THEME_COLOR.ERROR_MESSAGE_COLOR};
  font-size: ${spacing(3.5)};
`;
