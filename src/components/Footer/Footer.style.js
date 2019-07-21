import styled from '@emotion/styled/macro';

const iconSize = '2rem';

export const FooterStyled = styled.footer`
  background: var(--lic-color-secondary)
`;

export const FooterSocialLinksListStyled = styled.ul`
  && {
    display: flex;
    justify-content: space-around;
    list-style: none;
    margin: 0;
  }
  
  li {
    position: relative;
    width: ${iconSize};
    height: ${iconSize};
  }
`;

export const FooterSocialLinkStyled = styled.a`
  position: absolute;
  left: 0;
  top: 0;
  font-size: ${iconSize};
  color: var(--lic-color-quinary);
  transform: scale(1);
  transition: all 0.1s ease;
  
  :hover {
    color: var(--lic-color-tertiary);
    transform:scale(1.1);
  }
`;
