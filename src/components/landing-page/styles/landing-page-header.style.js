import styled from '@emotion/styled/macro';
import theme from '../../../styling/theme';

export const HeaderDivider = styled.div`
  position: absolute;
  width: 200vw;
  height: 600px;
  background: ${theme.colors.quinary};
  transform: rotate(-7deg);
  left: -95vw;
  top: -190px;
  border-bottom: 10px solid ${theme.colors.septenary};;
  box-shadow: 21px 10px 42px -2px rgba(0,0,0,0.57);
  z-index: 0;
`;
