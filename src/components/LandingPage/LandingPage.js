import React from 'react';
import {library} from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-free-solid';
import '@fortawesome/fontawesome-svg-core';
import '@fortawesome/free-regular-svg-icons';
import '@fortawesome/free-solid-svg-icons';

import LandingPageHeader from './LandingPageHeader';
import LandingPageContent from './LandingPageContent';

import {faCropAlt} from '@fortawesome/free-solid-svg-icons';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {LandingPageHeaderStyled} from './LandingPage.style';

library.add(fab, faCropAlt);

export default function LandingPage() {
    return (
        <>
            <LandingPageHeaderStyled>
                <LandingPageHeader/>
            </LandingPageHeaderStyled>
            <LandingPageContent/>
        </>
    );
}
