import React from 'react';

import {MUITable} from '../components';
import {ROWS_LIMIT} from '../../constants';

export const ItTable = ({data}) => (
    <>
        <MUITable data={data} columns={['date', 'total', 'remote', 'resume']}
                  aligns={{'total': 'right', 'remote': 'right', 'resume': 'right'}}
                  rowsLimit={ROWS_LIMIT} size={'small'}/>
    </>
);
