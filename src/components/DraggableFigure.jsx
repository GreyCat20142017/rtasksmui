import React from 'react';
import PropTypes from 'prop-types';

import {useDrag} from 'react-dnd';
import {Paper, Tooltip} from '@material-ui/core';

import {DND_TYPES, MIN_SIDE_SIZE} from '../constants';
import {DEFAULT_COLOR} from '../theme';

const DraggableFigure = ({
                                    width = MIN_SIDE_SIZE,
                                    height = MIN_SIDE_SIZE,
                                    color = DEFAULT_COLOR,
                                    title = 'Новый элемент. Нужно переместить на сетку.',
                                    isDragging = false,
                                    id = null
                                }) => {

    const [, dragRef] = useDrag({
        item: {type: DND_TYPES.FIGURE, id: id},
        collect: monitor => ({
            opacity: monitor.isDragging() ? 0.2 : 1,
        }),
    });

    return (
        <Tooltip title={title}>
            <Paper ref={dragRef} className='draggable'
                   style={{
                       width: MIN_SIDE_SIZE * width / height,
                       height: MIN_SIDE_SIZE,
                       backgroundColor: color,
                       cursor: 'pointer'
                   }}/>
        </Tooltip>
    );
};

DraggableFigure.propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    color: PropTypes.string,
    title: PropTypes.string,
    isDragging: PropTypes.bool,
    id: PropTypes.any
};

export default DraggableFigure;