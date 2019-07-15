import React from 'react';
import {FooterSocialLinksListStyled, FooterSocialLinkStyled, FooterStyled} from './Footer.style';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default function Footer() {
    return (
        <FooterStyled className="footer">
            <div className="content has-text-centered">
                <div className="columns u-justify-center">
                    <div className="column is-half">
                        <FooterSocialLinksListStyled>
                            <li>
                                <FooterSocialLinkStyled href="">
                                    <FontAwesomeIcon  icon={['fab', 'github']}/>
                                </FooterSocialLinkStyled>
                            </li>
                            <li>
                                <FooterSocialLinkStyled href="">
                                    <FontAwesomeIcon  icon={['fab', 'twitter']}/>
                                </FooterSocialLinkStyled>
                            </li>
                            <li>
                                <FooterSocialLinkStyled href="">
                                    <FontAwesomeIcon icon="envelope"/>
                                </FooterSocialLinkStyled>
                            </li>
                        </FooterSocialLinksListStyled>
                    </div>
                </div>
            </div>
        </FooterStyled>
    );
}


