import React from 'react';
import PropTypes from 'prop-types';
import {useDrop} from 'react-dnd';

import {Grid, Paper} from '@material-ui/core';
import {Skeleton} from '@material-ui/lab';

import DraggableFigure from './DraggableFigure';
import {DND_TYPES, MIN_SIDE_SIZE} from '../constants';

const Cell = ({classes = {}, cell, fixed, addFixed, ind}) => {

    const [, drop] = useDrop({
        accept: DND_TYPES.FIGURE,
        drop: (item) => {
            if (!fixed[ind]) {
                addFixed(ind, item.id);
            }
        }
    });

    return (
        <Grid className={classes.cell} item xs={cell.xs} sm={cell.sm} key={ind} ref={drop}>
            <Paper className={classes.paper}>
                {fixed[ind] ?
                    <DraggableFigure classes={classes} {...fixed[ind]} id={ind}
                                     title={`Фигура из ячейки № ${ind + 1}: ${fixed[ind]['type'] || ''}`}/> :
                    <Skeleton height={MIN_SIDE_SIZE} variant={'rect'}/>
                }
            </Paper>
        </Grid>
    );
};

Cell.propTypes = {
    classes: PropTypes.object,
    cell: PropTypes.object.isRequired,
    fixed: PropTypes.arrayOf(PropTypes.object),
    addFixed: PropTypes.func.isRequired,
    ind: PropTypes.number.isRequired
};

export default Cell;