import React from 'react';
import LandingPageHeader from './LandingPageHeader';
import LandingPageContent from './LandingPageContent';

import styles from './styles/landing-page.module.css';

export default function LandingPage() {
    return ([
        <header className={styles.landingPageHeader}>
            <LandingPageHeader/>
        </header>,
        <LandingPageContent/>
    ]);
}
