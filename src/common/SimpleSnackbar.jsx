import React from 'react';
import {Snackbar, IconButton} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import {makeStyles} from '@material-ui/core/styles';
import { amber } from '@material-ui/core/colors';
import {SNACK_OPEN_TIME} from '../constants';

const useStyles = makeStyles(theme => ({
    close: {
        padding: theme.spacing(0.5),
    },
    snack: {
        backgroundColor: amber[700]
    }
}));

const SimpleSnackbar = ({open, message, onSnackClose}) => {
    const classes = useStyles();
    return (<Snackbar
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        open={open}
        autoHideDuration={SNACK_OPEN_TIME}
        onClose={onSnackClose}
        ContentProps={{
            'aria-describedby': 'message-id',
            'className': classes.snack
        }}
        message={message}
        action={[
            <IconButton
                key="close"
                aria-label="close"
                color="inherit"
                className={classes.close}
                onClick={onSnackClose}
            >
                <CloseIcon/>
            </IconButton>,
        ]}
    />);
};

export default SimpleSnackbar;