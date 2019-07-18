import React from 'react';
import {library} from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-free-solid';
import '@fortawesome/fontawesome-svg-core';
import '@fortawesome/free-regular-svg-icons';
import '@fortawesome/free-solid-svg-icons';

import LandingPageHeader from './LandingPageHeader';
import LandingPageContent from './LandingPageContent';

import styles from './landing-page.module.css';
import {faCropAlt} from '@fortawesome/free-solid-svg-icons';
import {fab} from '@fortawesome/free-brands-svg-icons';

library.add(fab, faCropAlt);

export default function LandingPage() {
    return (
        <>
            <header className={styles.landingPageHeader}>
                <LandingPageHeader/>
            </header>
            <LandingPageContent/>
        </>
    );
}
