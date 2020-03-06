import {makeStyles} from '@material-ui/core/styles';
import {PINK_COLOR} from './theme';

export const useStyles = makeStyles(theme => ({
    app: {
        textAlign: 'center',
        padding: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
    },
    paper: {
        padding: theme.spacing(1),
        width: 'auto'
    },
    paperMain: {
        width: '100%',
        flexGrow: 1
    },
    btn: {
        margin: theme.spacing(1)
    },
    bin: {
        marginLeft: theme.spacing(3)
    },
    btnGroup: {
        margin: theme.spacing(1)
    },
    firstButton: {
        marginLeft: 'auto'
    },
    active: {
        textDecoration: 'none',
        color: PINK_COLOR
    },
    normal: {
        textDecoration: 'none',
        color: 'white',
    }
}));