import React from 'react';
import {ROWS_LIMIT} from '../../constants';
import MUITable from '../../common/table/MUITable';

const ItTable = ({data}) => (
    <>
        <MUITable data={data} columns={['date', 'total', 'remote', 'resume']}
                  aligns={{'total': 'right', 'remote': 'right', 'resume': 'right'}}
                  rowsLimit={ROWS_LIMIT} size={'small'}/>
    </>
);

export default ItTable;