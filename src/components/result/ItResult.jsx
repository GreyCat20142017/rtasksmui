import React from 'react';
import {Container, Typography} from '@material-ui/core';
import {MoodBad} from '@material-ui/icons';

import {MUITable} from '../components';
import {ROWS_LIMIT} from '../../constants';
import {calculatedColumns, defaultByMonth, getTotalData} from './itFunctions';
import {useStyles} from './ItResult.css';


export const ItResult = ({data}) => {
    const classes = useStyles();

    const transformedData = getTotalData(data);
    return (
        <Container>
            <Typography variant={'h6'} className={classes.title}>Печалька...</Typography>
            <div className={classes.tableWrapper}>
                <MUITable data={transformedData} columns={[...calculatedColumns, ...Object.keys(defaultByMonth)]}
                          aligns={{'month': 'left'}} defaultAlign={'right'}
                          rowsLimit={ROWS_LIMIT} size={'small'}/>
                <Typography variant={'caption'}></Typography>
            </div>
            <Typography variant={'caption'}>
                Данные не претендуют на точность. В один из месяцев, вероятно, имело место удаление большого количества
                резюме.
            </Typography>
            <div className={classes.textWrapper}>
                <Typography variant={'caption'} className={'text'}>
                    Но в общем, все как-то так.
                </Typography>
                <MoodBad fontSize={'small'}/>
            </div>
        </Container>
    )
};