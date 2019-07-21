import React from 'react';
import WorkContainer from './WorkContainer';

export default function WorkRowContainerSingle(props) {
    return(
        <div className="tile is-parent">
            <WorkContainer
                workContainerSize="large"
                workData={props.workItem}/>
        </div>
    )
}
