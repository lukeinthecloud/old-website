import React from 'react';
import styles from './LandingPageHeader.module.scss'
import HeaderProfile from './HeaderProfile/HeaderProfile';

export default function LandingPageHeader() {
    return (
        <div>
            <HeaderProfile/>
            <div className={`
            ${styles['landing-page-header']} 
            ${styles['landing-page-header__container']}`}>
            </div>

            <div className={`${styles['landing-page-header__container-divider']}`}>
            </div>
        </div>
    );
}
