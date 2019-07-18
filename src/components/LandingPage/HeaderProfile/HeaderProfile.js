import React from 'react';

import profilePicture from './profile-picture.jpg'

import {ProfileContainerStyled, ProfileImageStyled} from './HeaderProfile.style';

export default function HeaderProfile() {
    return (
        <ProfileContainerStyled>
            <ProfileImageStyled>
                <img src={profilePicture} alt="Luke Babich Profile"/>
            </ProfileImageStyled>
            <h1 className="title is-1">
                Luke Babich
                <small className="subtitle is-6">Software Developer</small>
            </h1>
        </ProfileContainerStyled>
    );
}

