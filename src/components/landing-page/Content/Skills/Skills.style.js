import styled from '@emotion/styled/macro';

const iconDefault = '5rem';
const iconSmall = '4rem';

export const IconStyled = styled.i`
  font-size: ${props => props.size === 'small' ? iconSmall : iconDefault};
  line-height: 0;
`;
