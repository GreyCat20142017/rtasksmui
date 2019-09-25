import {makeStyles} from '@material-ui/core';
import {BACK_COLOR} from '../theme';

export const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(1),
        marginTop: theme.spacing(2),
        backgroundColor: BACK_COLOR,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cell: {
        alignItems: 'stretch'
    }
}));