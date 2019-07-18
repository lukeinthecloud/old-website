import styled from '@emotion/styled/macro';

const profileImageScale = '9.375rem';

export const ProfileContainerStyled = styled.div`
        display: flex;
        align-items: center;
        position: absolute;
        top: 8.75rem;
        left: 30%;
        z-index: 30;
        transform: translate(-50%, -50%);
        
        h1 {
            margin-left: 1rem;
            color: var(--lic-color-primary) !important;
        }
        
        small {
          display: block;
          font-family: var(--lic-font-body);
        }
    `;

export const ProfileImageStyled = styled.div`
        position: relative;
        width: ${profileImageScale};
        height: ${profileImageScale};
        border-radius: ${profileImageScale};
        overflow: hidden;
        box-shadow: 3px 3px 5px 0 rgba(0, 0, 0, 0.37);
  
        img {
          position: absolute;
          top: -3.125rem;
        }
    `;
