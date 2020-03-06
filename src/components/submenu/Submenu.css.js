import {makeStyles} from '@material-ui/core/styles';

import {MDB_COLOR} from '../../theme';

export const useStyles = makeStyles(theme => ({
    link: {
        textDecoration: 'none',
        color: 'white'
    },
    linkDark: {
        textDecoration: 'none',
        color: MDB_COLOR
    }
}));