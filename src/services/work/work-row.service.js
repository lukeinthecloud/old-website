import React from 'react';

import WorkRowContainer from '../../components/LandingPage/Work/WorkRowContainer';
import WorkRowContainerSingle from '../../components/LandingPage/Work/WorkRowContainerSingle';

export function createRows(data) {
    const rows = _splitDataIntoRows(data);
    const rowContainers = _populateRowsWithData(rows);
    return rowContainers;
}

function _splitDataIntoRows(data) {
    let workItems = [...data];
    let rows = [];
    let items = [];
    let counter = 0;

    workItems.forEach((workItem) => {
        items.push(workItem);
        counter++;

        if (counter === 4) {
            rows.push(items);
            items = [];
            counter = 0;
        }
    });

    return rows;
}

function _populateRowsWithData(containerRowsItems) {
    const rowContainers = containerRowsItems.map((containerRow, index) => {
        return _createRowContainers(containerRow, index);
    });
    return rowContainers;
}

function _createRowContainers(containerRow, index) {
    const [firstWorkItem, secondWorkItem, thirdWorkItem, fourthWorkItem] = containerRow;

    const multipleRow = <WorkRowContainer key={index.toString()}
                                          workItems={[firstWorkItem, secondWorkItem, thirdWorkItem]}/>;
    index++;
    const singleRow = <WorkRowContainerSingle key={index.toString()} workItem={fourthWorkItem}/>;

    return [multipleRow, singleRow]
}
