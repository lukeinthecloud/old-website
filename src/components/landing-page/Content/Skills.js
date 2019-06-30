import React from 'react';
import {
    IconSmallStyled,
    IconStyled,
    SectionAltStyled,
    SkillContainerStyled,
    SkillsStyled
} from './styles/Content.style';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default function Skills() {
    return (
        <SectionAltStyled className={'section'}>
            <div className="container is-fluid">
                <div className={"columns u-justify-center"}>
                    <SkillContainerStyled className={'column is-flex'}>
                        <IconStyled className={'icon column'}>
                            <FontAwesomeIcon icon={['fab', 'js']}/>
                        </IconStyled>

                        <SkillsStyled className={'columns'}>
                            <IconSmallStyled className={'icon column'}>
                                <FontAwesomeIcon icon={['fab', 'angular']}/>
                            </IconSmallStyled>
                            <IconSmallStyled className={'icon column'}>
                                <FontAwesomeIcon icon={['fab', 'vuejs']}/>
                            </IconSmallStyled>
                            <IconSmallStyled className={'icon column'}>
                                <FontAwesomeIcon icon={['fab', 'react']}/>
                            </IconSmallStyled>
                        </SkillsStyled>
                    </SkillContainerStyled>

                    <SkillContainerStyled className={'column is-flex'}>
                        <IconStyled className={'icon column'}>
                            <FontAwesomeIcon icon={['fab', 'python']}/>
                        </IconStyled>
                    </SkillContainerStyled>
                </div>
            </div>
        </SectionAltStyled>
    );
}
