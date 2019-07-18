import React from 'react';

import HeaderProfile from './HeaderProfile/HeaderProfile';

import {HeaderDividerStyled} from './LandingPage.style';

export default function LandingPageHeader() {
    return (
        <>
            <HeaderProfile/>
            <HeaderDividerStyled/>
        </>
    );
}
