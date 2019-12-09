import React, {useEffect, useState} from 'react';
import {Typography, Divider, TablePagination} from '@material-ui/core';
import MoodBadIcon from '@material-ui/icons/MoodBad';

import MUILineChart from './chart/MUILineChart';
import SimpleSnackbar from '../../common/SimpleSnackbar';
import {getPreparedData, NF} from './chartfunctions';
import {POINT_LIMIT, ROWS_PER_PAGE_OPTIONS} from '../../constants';

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

const ItChart = ({data, columns, chartTitle= 'График', minY = 0}) => {
    const [message, setMessage] = useState(null);
    const [chart, setChart] = useState(null);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(POINT_LIMIT);
    const [preparedData, setPreparedData] = useState(getPreparedData(data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage), columns, minY));

    useEffect(() => {
        setPreparedData(
            getPreparedData(data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage), columns, minY)
        );

    }, [data, page, rowsPerPage, setPreparedData, columns, minY]);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const onLegendClick = (ind) => {
        setMessage(data[ind] ? getMessage(data[ind]) : null);
    };

    const onSnackClose = (event, reason) => {
        if (reason && (reason === 'clickaway')) {
            return;
        }
        setMessage(null);
    };

    return (
        <>
            <MUILineChart chart={chart} setChart={setChart}
                          data={preparedData} minY={minY}
                          chartTitle={chartTitle}
                          chartFooter={''}
                          onLegendClick={onLegendClick}
                          hidden={false}/>
            <SimpleSnackbar open={!!(message)} message={message} onSnackClose={onSnackClose}/>
            <Typography variant={'caption'}>
                Для просмотра детальной информации по одной точке графика нужно кликнуть по ней мышью
            </Typography>
            <TablePagination size={'small'}
                             rowsPerPageOptions={ROWS_PER_PAGE_OPTIONS}
                             labelRowsPerPage={'Точек на страницу:'}
                             component="div"
                             count={data.length}
                             rowsPerPage={rowsPerPage}
                             page={page}
                             onChangePage={handleChangePage}
                             onChangeRowsPerPage={handleChangeRowsPerPage}/>

        </>
    );
};

export default ItChart;