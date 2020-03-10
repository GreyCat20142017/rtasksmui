import React, {useCallback, useEffect, useState} from 'react';
import {Typography, Divider, Slider, Container} from '@material-ui/core';
import MoodBadIcon from '@material-ui/icons/MoodBad';

import MUILineChart from './MUILineChart';
import {SimpleSnackbar} from '../components';
import {getPreparedData, NF} from './chartfunctions';
import {LABELS_LIMIT, POINT_LIMIT} from '../../constants';
import {isValidIndex} from '../../functions';
import {useStyles} from './ItChart.css';

const getLabelIndexes = (data) => {
    const limitFactor = data.length > LABELS_LIMIT ? Math.ceil(data.length / 3) : 1;
    const result = (limitFactor === 1) ? null :
        [...data.map((item, ind) => (ind % limitFactor === 0) ? ind : -1).filter(item => (item !== -1)),
            data.length - 1
        ];
    return result;
};

const getSlicedData = (data, [first, last]) => (
    isValidIndex(first - 1, data) && isValidIndex(last - 1, data) ?
        data.slice(first - 1, last) : [...data]
);

const getComment = (data, [first, last]) => (
    isValidIndex(first - 1, data) && isValidIndex(last - 1, data) ?
        `Выбран период с ${data[first - 1]['date']} по ${data[last - 1]['date']}. Количество точек: ${last - first + 1}` :
        ''
);

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

export const ItChart = ({data, columns, chartTitle = 'График', minY = 0}) => {
    const [message, setMessage] = useState(null);
    const [chart, setChart] = useState(null);
    const [marks, setMarks] = useState([]);
    const [limits, setLimits] = useState([1, Math.min(POINT_LIMIT, data.length)]);
    const [preparedData, setPreparedData] = useState(getPreparedData(data, columns, minY));
    const classes = useStyles();

    const refreshData = useCallback((first, last) => {
        const filteredData = getSlicedData(data, [first, last]);
        setPreparedData(getPreparedData(filteredData, columns, minY));
        const labelIndexes = getLabelIndexes(data);
        const preparedMarks = data.map((item, ind) => ({
            value: ind + 1,
            label: !labelIndexes || (labelIndexes.indexOf(ind) === -1) ? '' : item['date']
        }));
        setMarks(preparedMarks);
    }, [data, columns, minY])

    useEffect(() => {
        setLimits([1, Math.min(POINT_LIMIT, data.length)]);
        refreshData([1, Math.min(POINT_LIMIT, data.length)]);
    }, [data, refreshData]);

    const onLegendClick = (ind) => {
        setMessage(data[ind] ? getMessage(data[ind]) : null);
    };

    const onSnackClose = (event, reason) => {
        if (reason && (reason === 'clickaway')) {
            return;
        }
        setMessage(null);
    };

    const onSliderChange = (evt, newValue) => {
        setLimits(() => [...newValue]);
        const filteredData = getSlicedData(data, newValue);
        setPreparedData(getPreparedData(filteredData, columns, minY));
    };

    return (
        <Container>
            <MUILineChart chart={chart} setChart={setChart}
                          data={preparedData} minY={minY}
                          chartTitle={chartTitle}
                          chartFooter={''}
                          onLegendClick={onLegendClick}
                          hidden={false}
            />
            <SimpleSnackbar open={!!(message)} message={message} onSnackClose={onSnackClose}/>
            <Typography variant={'caption'}>
                Для просмотра детальной информации по одной точке графика нужно кликнуть по ней мышью
            </Typography>
            <div className={classes.sliderWrapper}>
                <Slider classes={{markLabel: classes.mark}}
                        track="inverted"
                        aria-labelledby="slider"
                        title={'Слайдер для ограничения точек графика'}
                        value={[...limits]}
                        valueLabelDisplay={'auto'}
                        min={1}
                        max={data.length}
                        marks={marks}
                        onChangeCommitted={onSliderChange}
                />
            </div>
            <Typography className={classes.comment} variant={'subtitle2'}
                        color={'primary'}>{getComment(data, limits)}</Typography>

        </Container>
    );
};