import {makeStyles} from '@material-ui/core/styles';
import {MIN_SIDE_SIZE} from './constants';
import {BACK_COLOR} from './theme';

export const useStyles = makeStyles(theme => ({
    app: {
        textAlign: 'center',
        padding: theme.spacing(2)
    },
    paper: {
        padding: theme.spacing(1),
        width: 'auto'
    },
    btn: {
        margin: theme.spacing(1)
    },
    bin: {
        marginLeft: theme.spacing(3)
    },
    grid: {
        display: 'flex',
        flexWrap: 'wrap',
        padding: theme.spacing(1),
        marginTop: theme.spacing(2),
        minHeight: `${MIN_SIDE_SIZE}px`,
        border: '1px solid lightgrey'
    },
    wrapper: {
        minHeight: `${MIN_SIDE_SIZE}px`,
        display: 'flex',
        justifyContent: 'center',
        backgroundColor:BACK_COLOR,
        padding: theme.spacing(2),
        marginBottom: theme.spacing(2)
    },
    btnGroup: {
        margin: theme.spacing(1)
    }
}));