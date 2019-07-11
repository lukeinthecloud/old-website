import React from 'react';
import WorkContainer from './WorkContainer';
import {WorkSectionStyled} from './Work.style';

export default function WorkSection() {
    return (
        <section className="section">
            <WorkSectionStyled className="tile is-ancestor">
                <div className="tile is-parent">
                    <WorkContainer workContainerSize="large"/>
                </div>
                <div className="tile is-vertical is-8">
                    <div className="tile">
                        <div className="tile is-parent">
                            <WorkContainer workContainerSize="large"/>
                        </div>
                        <div className="tile is-parent is-vertical">
                            <WorkContainer/>
                            <WorkContainer/>
                        </div>
                    </div>
                </div>
            </WorkSectionStyled>
        </section>
    );
}
