import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {

    IconStyled,
    SkillContainerStyled,
    SkillWrapperStyled,
} from './Skills.style';

import {SectionAltStyled} from '../LandingPage.style';

export default function Skills() {
    return (
        <SectionAltStyled className="section">
            <div className="container is-full">
                <SkillWrapperStyled className="level-item has-text-centered">
                    <SkillContainerStyled className="columns u-flex-column u-with-100">
                        <div className="column">
                            <div className="columns is-multiline is-flex u-align-start">
                                <div className="column is-one-quarter-desktop is-half-tablet is-full-mobile is-flex u-flex-column u-justify-center u-align-center">
                                    <h4 className="subtitle is-4 is-flex u-align-center">
                                        Languages
                                        <IconStyled className="is-flex u-justify-center">
                                            <FontAwesomeIcon icon="code"/>
                                        </IconStyled>
                                    </h4>

                                    <div className="columns">
                                        <div className="column">
                                            <ul>
                                                <li>
                                                    <span className="subtitle is-6">Javascript/NodeJS</span>
                                                </li>
                                                <li>
                                                    <span className="subtitle is-6">Python</span>
                                                </li>
                                                <li>
                                                    <span className="subtitle is-6">NoSQL</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="column is-one-quarter-desktop is-half-tablet is-full-mobile is-flex u-flex-column u-justify-center u-align-center">
                                    <h4 className="subtitle is-4 is-flex u-align-center">
                                        Frameworks
                                        <IconStyled className="is-flex u-justify-center">
                                            <FontAwesomeIcon icon="crop-alt"/>
                                        </IconStyled>
                                    </h4>

                                    <div className="columns">
                                        <div className="column">
                                            <ul>
                                                <li>
                                                    <span className="subtitle is-6">Angular/React/Vue</span>
                                                </li>
                                                <li>
                                                    <span className="subtitle is-6">Express/Koa</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="column is-one-quarter-desktop is-half-tablet is-full-mobile is-flex u-flex-column u-justify-center u-align-center">
                                    <h4 className="subtitle is-4 is-flex u-align-center">
                                        Libraries
                                        <IconStyled className="is-flex u-justify-center">
                                            <FontAwesomeIcon icon="book-open"/>
                                        </IconStyled>
                                    </h4>

                                    <div className="columns">
                                        <div className="column">
                                            <ul>
                                                <li>
                                                    <span className="subtitle is-6">Redux/NRGX</span>
                                                </li>
                                                <li>
                                                    <span className="subtitle is-6">Nuxt/Gatsby</span>
                                                </li>
                                                <li>
                                                    <span className="subtitle is-6">RxJS</span>
                                                </li>
                                                <li>
                                                    <span className="subtitle is-6">Socket.io</span>
                                                </li>
                                                <li>
                                                    <span className="subtitle is-6">PassportJS</span>
                                                </li>
                                                <li>
                                                    <span className="subtitle is-6">Pixi.js</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="column is-one-quarter-desktop is-half-tablet is-full-mobile is-flex u-flex-column u-justify-center u-align-center">
                                    <h4 className="subtitle is-4 is-flex u-align-center">
                                        Database
                                        <IconStyled className="is-flex u-justify-center">
                                            <FontAwesomeIcon icon="database"/>
                                        </IconStyled>
                                    </h4>

                                    <div className="columns">
                                        <div className="column">
                                            <ul>
                                                <li>
                                                    <span className="subtitle is-6">MongoDB</span>
                                                </li>
                                                <li>
                                                    <span className="subtitle is-6">Firebase</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SkillContainerStyled>
                </SkillWrapperStyled>
            </div>
        </SectionAltStyled>
    );
}
