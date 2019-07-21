import styled from '@emotion/styled/macro';

const workContainerLarge = '2rem';
const workContainerSmall = '1rem';
const containerBorderRadius = '3px';

export const WorkSectionStyled = styled.div`
  height: 25rem;
`;

export const WorkContainerStyled = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: ${props => props.containerSize === 'large' ? workContainerLarge : workContainerSmall};
  border-radius: 0;
  min-height: 20rem;
  
  && {
    background-color: transparent;
  }
`;

export const WorkHeadingStyled = styled.h3`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  color: var(--lic-color-quinary) !important;
  border-bottom: 1px solid var(--lic-color-tertiary);
  font-size: 1em;
  z-index: 20;
`;

export const WorkDescriptionStyled = styled.article`
  position: relative;
  font-size: ${props => props.containerSize === 'large' ? workContainerLarge : workContainerSmall};
  color: var(--lic-color-tertiary);
  z-index: 20;
`;

export const WorkSkillsContainerListStyled = styled.div`
  position: relative;
    z-index: 20;
    color: var(--lic-color-quinary);
    font-size: 0.8rem;
    display: flex;
`;

export const WorkOverlayStyled = styled.div`
  position: absolute;
  width:100%;
  height: 100%;
  left: 0;
  top: 0;
  border-radius: ${containerBorderRadius};
  z-index: 10;
  
  :before {
    content: '';
    position: absolute;
    background: #000000;
    width:100%;
    height: 100%;
    opacity: .9;
    left: 0;
    top: 0;
    z-index: 10;
  }
`;

export const WorkImageBackgroundStyled = styled.div`
  position: absolute;
  width:100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: var(--lic-color-secondary);
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 0;
`;
