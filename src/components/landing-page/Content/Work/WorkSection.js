import React from 'react';
import WorkContainer from './WorkContainer';
import {WorkSectionStyled} from './Work.style';

export default function WorkSection() {
    return (
        <section className="section">
            <div className="container">
                <WorkSectionStyled className="tile is-ancestor">
                    <div className="tile is-parent">
                        <WorkContainer
                            workContainerSize="large"
                            title='Project 1'
                        />
                    </div>
                    <div className="tile is-vertical is-8">
                        <div className="tile">
                            <div className="tile is-parent">
                                <WorkContainer
                                    workContainerSize="large"
                                    title='Project 2'
                                />
                            </div>
                            <div className="tile is-parent is-vertical">
                                <WorkContainer title='Project 3'/>
                                <WorkContainer title='Project 4'/>
                            </div>
                        </div>
                    </div>
                </WorkSectionStyled>
            </div>
        </section>
    );
}
