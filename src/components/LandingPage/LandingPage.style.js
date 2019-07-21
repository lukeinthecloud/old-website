import styled from '@emotion/styled/macro';

export const LandingPageHeaderStyled = styled.header`
    flex: initial;
    height: 390px;
    overflow: hidden;
`;

export const HeaderDividerStyled = styled.div`
  position: absolute;
  width: calc(100% * 2);
  height: 32.5rem;
  background: var(--lic-color-quartinary);
  transform: rotate(-7deg);
  left: -95vw;
  top: -11.8975rem;
  border-bottom: 10px solid var(--lic-color-quinary);
  box-shadow: 21px 10px 42px -2px rgba(0,0,0,0.57);
  z-index: 0;
`;


export const SectionAltStyled = styled.section`
  padding: 3rem 1.5rem;
  background: var(--lic-color-quartinary);
  
  p {
    color: var(--lic-color-primary) !important;
  }
`;
