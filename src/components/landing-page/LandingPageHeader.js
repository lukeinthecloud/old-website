import React from 'react';
import HeaderProfile from './HeaderProfile/HeaderProfile';
import {HeaderDivider} from './styles/landing-page-header.style';

export default function LandingPageHeader() {
    return ([
        <HeaderProfile/>,
        <HeaderDivider/>
    ]);
}
