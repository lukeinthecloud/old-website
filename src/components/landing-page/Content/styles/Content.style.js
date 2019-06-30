import styled from '@emotion/styled/macro';

const iconBase = styled.i`
  display: flex;
  justify-content: center;
  height: initial;
`;

export const SectionAltStyled = styled.section`
  background: var(--lic-color-quartinary);
  
  p {
    color: var(--lic-color-primary) !important;
  }
`;

export const SkillsStyled = styled.div`
  display: flex;
  position: absolute;
  bottom: -1rem;
  left: 50%;
  transform: translateX(-50%);
`;

export const SkillContainerStyled = styled.div`
  position: relative;
`;

export const IconStyled = styled(iconBase)`
  font-size: 5rem;
`;


export const IconSmallStyled = styled(iconBase)`
  width: initial;
  font-size: 3rem;
`;

