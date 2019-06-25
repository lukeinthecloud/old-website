import React from 'react';
import styles from './HeaderProfile.module.scss';
import profilePicture from './profile-picture.jpg'

export default function HeaderProfile() {
    const styling = {
        headerProfile: styles['header-profile'],
        headerProfileContainer: styles['header-profile__container'],
    };

    return (
        <div className={`
            ${styling.headerProfile}
            ${styling.headerProfileContainer}
        `}>
            <img src={profilePicture} alt="Luke Babich Profile"/>
        </div>
    );
}
