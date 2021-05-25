import styled from 'styled-components';
import { THEME_COLOR, THEME_SIZE } from '../../theme'
import { spacing } from '../../theme'
export const Button = styled.button`
background-color: ${THEME_COLOR.BUTTON_BACKGROUND_COLOR};
border-radius: ${spacing(3)};
border: ${spacing(0.5)} solid ${THEME_COLOR.BUTTON_BORDER_COLOR};
color: ${THEME_COLOR.BUTTON_TEXT_COLOR};
margin: ${THEME_SIZE.BUTTON_M_P.MARGIN};
padding:${THEME_SIZE.BUTTON_M_P.PADDING};
`