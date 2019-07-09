import styled from '@emotion/styled/macro';

const iconDefault = '5rem';
const iconSmall = '4rem';

export const SectionAltStyled = styled.section`
  padding: 3rem 1.5rem;
  background: var(--lic-color-quartinary);
  
  p {
    color: var(--lic-color-primary) !important;
  }
`;


export const IconStyled = styled.i`
  font-size: ${props => props.size === 'small' ? iconSmall : iconDefault};
  line-height: 0;
`;
