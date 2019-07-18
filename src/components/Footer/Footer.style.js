import styled from '@emotion/styled/macro';

export const FooterStyled = styled.footer`
  background: var(--lic-color-secondary)
`;

export const FooterSocialLinksListStyled = styled.ul`
  display: flex;
  justify-content: space-around;
  
  && {
    list-style: none;
  }
  
  li {
    display: inline-block;
  }
`;

export const FooterSocialLinkStyled = styled.a`
  position: absolute;
  font-size: 2rem;
  color: var(--lic-color-quinary);
  transform: scale(1);
  transition: all 0.1s ease;
  
  :hover {
    color: var(--lic-color-tertiary);
    transform:scale(1.1);
  }
`;
