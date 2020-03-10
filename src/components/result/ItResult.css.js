import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    title: {
        marginTop: '1rem',
        marginBottom: '1rem',
    },
    tableWrapper: {
        maxWidth: '100%',
        overflowX: 'auto',
        marginTop: '1rem',
        marginBottom: '1rem'
    },
    textWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    }
}));