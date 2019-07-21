import React from 'react';
import WorkContainer from './WorkContainer';

export default function WorkRowContainer(props) {
    return (
        <div className="tile">
            <div className="tile is-parent is-vertical">
                <div className="tile is-child">
                    <WorkContainer
                        workContainerSize="large"
                        workData={props.workItems[0]}/>
                </div>
                <div className="tile is-child">
                    {
                        props.workItems[1] &&
                        <WorkContainer
                            workContainerSize="large"
                            workData={props.workItems[1]}/>
                    }
                </div>
            </div>

            <div className="tile is-parent">
                {
                    props.workItems[2] &&
                    <WorkContainer
                        workContainerSize="large"
                        workData={props.workItems[2]}/>
                }
            </div>
        </div>
    )
}
