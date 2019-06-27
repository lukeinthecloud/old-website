import React from 'react';
import styles from './styles/LandingPage.module.scss';
import LandingPageHeader from './LandingPageHeader';
import LandingPageContent from './LandingPageContent';

export default function LandingPage() {
    return ([
        <header>
            <LandingPageHeader/>
        </header>,
        <LandingPageContent/>
    ]);
}
