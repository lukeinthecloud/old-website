import styled from '@emotion/styled/macro';
import theme from '../../../../styling/theme';

const profileImageScale = ' 200px';

export const ProfileContainer = styled.div`
        display: flex;
        align-items: center;
        position: absolute;
        top: 40%;
        left: 40%;
        z-index: 30;
        transform: translate(-50%, -50%);
        
        h1 {
            margin-left: 20px;
            color: ${theme.colors.secondary} !important;
        }
        
        small {
          display: block;
          font-family: ${theme.fonts.body};
        }
    `;

export const ProfileImage = styled.div`
        position: relative;
        width: ${profileImageScale};
        height: ${profileImageScale};
        border-radius: ${profileImageScale};
        overflow: hidden;
        box-shadow: 3px 3px 5px 0 rgba(0, 0, 0, 0.37);
    
        &:before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          border-radius: 20vw;
          width: 100%;
          height: 100%;
        }
    
        img {
          position: absolute;
          top: -50px;
        }
    `;
