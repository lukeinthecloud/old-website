import React from 'react';
import HeaderProfile from './HeaderProfile/HeaderProfile';
import {HeaderDividerStyled} from './styles/LandingPageHeader.style';

export default function LandingPageHeader() {
    return ([
        <HeaderProfile/>,
        <HeaderDividerStyled/>
    ]);
}
