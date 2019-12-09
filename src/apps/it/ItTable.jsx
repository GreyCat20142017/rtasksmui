import React from 'react';
import MUITable from '../../common/table/MUITable';
import {ROWS_LIMIT} from '../../constants';

const ItTable = ({data}) => (
    <>
        <MUITable data={data} columns={['date', 'total', 'remote', 'resume']} rowsLimit={ROWS_LIMIT} size={'small'}/>
    </>
);

export default ItTable;