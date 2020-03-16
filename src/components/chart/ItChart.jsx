import React, {useEffect, useState} from 'react';
import {Container, Divider, Slider, Typography} from '@material-ui/core';

import MUILineChart from './MUILineChart';
import {MUISelect, SimpleSnackbar} from '../components';
import {
    getComment,
    getFormattedMonth,
    getLabelIndexes,
    getMonths,
    getPreparedData,
    getSlicedData,
    NF
} from './chartfunctions';
import {FILTER_ALL, POINT_LIMIT} from '../../constants';
import {useStyles} from './ItChart.css';
import MoodBadIcon from '@material-ui/core/SvgIcon/SvgIcon';

export const getMessage = (row) => (
    row ?
        <>
            <Typography>На {getFormattedMonth(row['date'], true)} было вакансий: {NF.format(row['total'])}</Typography>
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
    const [filter, setFilter] = useState(FILTER_ALL);
    const [limits, setLimits] = useState([1, Math.min(POINT_LIMIT, data.length)]);
    const [preparedData, setPreparedData] = useState(getPreparedData(data, columns, minY));
    const classes = useStyles();

    const filters = getMonths(data);

    useEffect(() => {
        setLimits(() => [1, Math.min(POINT_LIMIT, data.length)]);
        const labelIndexes = getLabelIndexes(data);
        const preparedMarks = data.map((item, ind) => ({
            value: ind + 1,
            label: !labelIndexes || (labelIndexes.indexOf(ind) === -1) ? '' : item['date']
        }));
        setMarks(preparedMarks);
    }, [data]);

    useEffect(() => {
        const filteredData = getSlicedData(data, limits, filter);
        setPreparedData(getPreparedData(filteredData, columns, minY));
    }, [data, limits, columns, minY, filter]);

    const onLegendClick = (ind) => {
        const filteredData = getSlicedData(data, limits);
        setMessage(filteredData[ind] ? getMessage(filteredData[ind]) : null);
    };

    const onSnackClose = (event, reason) => {
        if (reason && (reason === 'clickaway')) {
            return;
        }
        setMessage(null);
    };

    const onSliderChange = (evt, newValue) => {
        setLimits(() => [...newValue]);
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
                        disabled={filter !== FILTER_ALL}
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
                <MUISelect items={filters} callback={setFilter}/>
            </div>
            <Typography className={classes.comment} variant={'subtitle2'}
                        color={'primary'}>{getComment(data, limits, filter)}</Typography>

        </Container>
    );
};