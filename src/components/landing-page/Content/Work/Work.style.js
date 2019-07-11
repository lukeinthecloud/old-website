import styled from '@emotion/styled/macro';

const workContainerLarge = '2rem';
const workContainerSmall = '1rem';

export const WorkSectionStyled = styled.div`
  height: 25rem;
`;

export const WorkContainerStyled = styled.div`
  font-size: ${props => props.containerSize === 'large' ? workContainerLarge : workContainerSmall};
  background: var(--lic-color-secondary);
`;

export const WorkHeadingStyled = styled.h3`
  font-size: 1em;
`;

export const WorkDescriptionStyled = styled.article`
  font-size: ${props => props.containerSize === 'large' ? workContainerLarge : workContainerSmall};
`;
