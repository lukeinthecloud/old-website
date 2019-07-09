import React from 'react';
import {library} from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-free-solid';
import '@fortawesome/fontawesome-svg-core';
import {faAngular, faReact, faVuejs, faPython, faJs, faNodeJs} from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/free-regular-svg-icons';
import '@fortawesome/free-solid-svg-icons';

import LandingPageHeader from './LandingPageHeader';
import LandingPageContent from './LandingPageContent';

import styles from './styles/landing-page.module.css';

library.add(faAngular, faReact, faVuejs, faPython, faJs, faNodeJs);

export default function LandingPage() {
    return ([
        <header className={styles.landingPageHeader}>
            <LandingPageHeader/>
        </header>,
        <LandingPageContent/>
    ]);
}
