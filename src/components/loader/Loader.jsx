import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import {Typography} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(1),
        justifyContent: 'center',
        '& > * + *': {
            margin: theme.spacing(2),
        },
    },
}));

export const Loader = ({message = 'Загрузка...'}) => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                <CircularProgress thickness={2}/>
            </div>
            <Typography variant='caption' color={'primary'}>{message}</Typography>
        </>
    );
};