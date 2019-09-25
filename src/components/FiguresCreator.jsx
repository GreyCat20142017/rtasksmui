import React from 'react';
import PropTypes from 'prop-types';

import {Button, ButtonGroup, Paper} from '@material-ui/core';

import DraggableFigure from './DraggableFigure';
import EmptyFigure from './EmptyFigure';
import TrashBin from './TrashBin';
import {FIGURE_TYPES, MAX_SIDE_RATIO, MIN_SIDE_SIZE} from '../constants';
import {getRandomColor} from '../functions';

const FiguresCreator = ({classes = {}, last = null, setLast, deleteFigure, deleteFixed}) => {

    const createSquare = () => {
        setLast({
            width: MIN_SIDE_SIZE,
            height: MIN_SIDE_SIZE,
            color: getRandomColor(),
            type: FIGURE_TYPES.SQUARE
        });
    };

    const createRectangle = () => {
        const isVertical = false;
        setLast({
            width: MIN_SIDE_SIZE * (isVertical ? 1 : MAX_SIDE_RATIO),
            height: MIN_SIDE_SIZE * (isVertical ? MAX_SIDE_RATIO : 1),
            color: getRandomColor(),
            type: FIGURE_TYPES.RECTANGLE
        });
    };

    return (
        <Paper className={classes.paper}>
            <ButtonGroup className={classes.btnGroup} variant={'contained'} color={'primary'}
                         aria-label='кнопки создания фигур'>
                <Button className={classes.btn} onClick={createSquare}
                        title={'Создает квадрат для последующего перетаскивания'}>
                    Создать квадрат
                </Button>

                <Button className={classes.btn} onClick={createRectangle}
                        title={'Создает прямоугольник для последующего перетаскивания'}>
                    Создать прямоугольник
                </Button>
            </ButtonGroup>

            <div className={classes.wrapper}>
                {last ? <DraggableFigure {...last}/> : <EmptyFigure/>}
                <TrashBin classes={classes} deleteFigure={deleteFigure} deleteFixed={deleteFixed} />
            </div>
        </Paper>
    );
};

FiguresCreator.propTypes = {
    classes: PropTypes.object,
    last: PropTypes.object,
    setLast: PropTypes.func.isRequired,
    deleteFigure: PropTypes.func.isRequired,
    deleteFixed: PropTypes.func.isRequired
};

export default FiguresCreator;
