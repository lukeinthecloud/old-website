import React from 'react';
import profilePicture from './profile-picture.jpg'
import {ProfileContainer, ProfileImage} from './styles/header-profile.style';

export default function HeaderProfile() {
    return (
        <ProfileContainer>
            <ProfileImage>
                <img src={profilePicture} alt="Luke Babich Profile"/>
            </ProfileImage>
            <h1 className={`title is-1`}>
                Luke Babich
                <small className={'subtitle is-6'}>Software Developer</small>
            </h1>
        </ProfileContainer>
    );
}

