import React from 'react';
import PropTypes from 'prop-types';
import {Grid, Typography} from '@material-ui/core';

import {FIX_BOARD_CELLS} from '../constants';
import Cell from './FixBoardCell';
import {useStyles} from './FixBoard.css';

const FixBoard = ({fixed = [], addFixed}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant={'h2'}>Сетка для размещения фигур</Typography>
            <Grid container spacing={3}>
                {FIX_BOARD_CELLS.map((cell, ind) => (
                    <Cell key={ind} classes={classes} cell={cell} fixed={fixed} addFixed={addFixed} ind={ind}/>
                ))}
            </Grid>
            <Typography variant={'caption'}>Фигуры можно перемещать в пустые ячейки и отправлять в корзину</Typography>
        </div>
    );
};

FixBoard.propTypes = {
    fixed: PropTypes.arrayOf(PropTypes.object),
    addFixed: PropTypes.func.isRequired
};

export default FixBoard;
