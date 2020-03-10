import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    comment: {
        padding: '1rem',
        marginTop: '0.7rem',
        fontWeight: 'bold'
    },
    sliderWrapper: {
        paddingLeft: '1rem',
        paddingRight: '1rem'
    },
    mark: {
            fontSize: '0.7rem',
            marginTop: '1rem'
        },
    pin: {
        width: '80px',
        height: '80px'
    },
    pinOffset: {
        top: '-84px',
        left: 'calc(-50% + -28px)'
    }
}));