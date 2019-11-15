import React, {useState} from 'react';
import {Typography, Divider} from '@material-ui/core';
import MoodBadIcon from '@material-ui/icons/MoodBad';

import MUILineChart from './chart/MUILineChart';
import SimpleSnackbar from '../../common/SimpleSnackbar';
import {getPreparedData, NF} from './chartfunctions';
import data from './data.js';


const getMessage = (row) => (
    row ?
        <>
            <Typography>На {row['date']} было вакансий: {NF.format(row['total'])}</Typography>
            <Typography>Из них с воможностью работать удаленно: {row['remote']}</Typography>
            <Divider/>
            <Typography>И совершенно жуткое количество резюме: {NF.format(row['resume'])}</Typography>
            <MoodBadIcon/>
        </> :
        null
);

const AppIt = () => {
    const [message, setMessage] = useState(null);
    const [chart, setChart] = useState(null);

    const preparedData = getPreparedData(data);

    const onLegendClick = (ind) => {
        setMessage(data[ind] ? getMessage(data[ind]) : null);
    };

    const onSnackClose = (event, reason) => {
        if (reason && (reason === 'clickaway')) {
            return;
        }

        setMessage(null);
    };

    return (<>
            <MUILineChart chart={chart} setChart={setChart}
                          data={preparedData}
                          chartTitle={'График по числу вакансий'}
                          chartFooter={''}
                          onLegendClick={onLegendClick}
                          hidden={false}/>
            <SimpleSnackbar open={!!(message)} message={message} onSnackClose={onSnackClose}/>
            <Typography variant={'caption'}>Для просмотра детальной информации по одной точке графика нужно кликнуть по
                ней мышью</Typography>
        </>
    );
};

export default AppIt;