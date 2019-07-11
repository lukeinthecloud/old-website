import React from 'react';
import {
    SectionAltStyled
} from '../Content.style';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {BorderStyled} from '../../../global.style';
import {IconStyled} from './Skills.style';

export default function Skills() {
    return (
        <SectionAltStyled className={'section'}>
            <div className="container is-full">
                <div className={'columns'}>
                    <div className={'column is-flex u-justify-center'}>
                        <IconStyled>
                            <FontAwesomeIcon icon={['fab', 'js']}/>
                        </IconStyled>
                    </div>

                    <div className={'column is-flex u-justify-center'}>
                        <IconStyled>
                            <FontAwesomeIcon icon={['fab', 'node-js']}/>
                        </IconStyled>
                    </div>

                    <div className={'column is-flex u-justify-center'}>
                        <IconStyled>
                            <FontAwesomeIcon icon={['fab', 'python']}/>
                        </IconStyled>
                    </div>
                </div>
                <BorderStyled/>
                <div className={'columns'}>
                    <div className={'column is-flex u-justify-end'}>
                        <IconStyled size='small'>
                            <FontAwesomeIcon icon={['fab', 'angular']}/>
                        </IconStyled>
                    </div>

                    <div className={'column is-flex u-justify-center'}>
                        <IconStyled size='small'>
                            <FontAwesomeIcon icon={['fab', 'vuejs']}/>
                        </IconStyled>
                    </div>

                    <div className={'column is-flex u-justify-start'}>
                        <IconStyled size='small'>
                            <FontAwesomeIcon icon={['fab', 'react']}/>
                        </IconStyled>
                    </div>
                </div>
            </div>
        </SectionAltStyled>
    );
}
