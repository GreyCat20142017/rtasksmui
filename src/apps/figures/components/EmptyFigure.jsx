import React from 'react';
import PropTypes from 'prop-types';

import {Paper, Tooltip} from '@material-ui/core';

import {MIN_SIDE_SIZE} from '../figuresconstants';

/**
 * Вариант onBoard для пустой фигуры оставлен для варианта сетки с возможностью добавления в последнюю пустую ячейку
 * @param onBoard
 * @returns {*}
 * @constructor
 */
const EmptyFigure = ({onBoard = false}) => {
    const kind = onBoard ? 'перемещенный' : 'сгенерированный';
    const title = 'Сюда будет добавлен ' + kind + ' элемент';
    const attributes = {
        style: {
            width: MIN_SIDE_SIZE,
            height: MIN_SIDE_SIZE,
            backgroundColor: 'white'
        }
    };
    return (
        <Tooltip title={title || '?'}>
            {onBoard ? <div {...attributes}/> : <Paper {...attributes}/>}
        </Tooltip>
    );
};

EmptyFigure.propTypes = {
    onBoard: PropTypes.bool
};

export default EmptyFigure;
