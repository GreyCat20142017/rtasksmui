import React from 'react';
import PropTypes from 'prop-types';
import {useDrop} from 'react-dnd';

import {IconButton, Tooltip} from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import {DND_TYPES} from '../constants';

const TrashBin = ({classes, deleteFigure, deleteFixed}) => {

    const [, drop] = useDrop({
        accept: DND_TYPES.FIGURE,
        drop: (item) => {
            deleteFixed(item.id);
        }
    });

    return (
        <Tooltip title='Удалить элемент'>
            <IconButton className={classes.bin} onClick={deleteFigure} aria-label='Удалить элемент' ref={drop}>
                <DeleteForeverIcon fontSize='large' color={'primary'}/>
            </IconButton>
        </Tooltip>
    );
};

TrashBin.propTypes = {
    classes: PropTypes.object.isRequired,
    deleteFigure: PropTypes.func.isRequired,
    deleteFixed: PropTypes.func.isRequired
};

export default TrashBin;

