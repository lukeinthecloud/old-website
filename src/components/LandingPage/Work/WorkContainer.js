import React from 'react';

import WorkContainerLarge from './WorkContainerLarge';
import WorkContainerSmall from './WorkContainerSmall';

export default function WorkContainer(props) {
    return (
        <>
            {
                props.workContainerSize === 'large' ?
                    <WorkContainerLarge workData={props.workData}/> :
                    <WorkContainerSmall workData={props.workData}/>
            }
        </>
    )
}
