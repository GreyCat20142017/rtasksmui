import {createMuiTheme} from '@material-ui/core/styles';

import {blueGrey, deepOrange, indigo, pink} from '@material-ui/core/colors';

export const BACK_COLOR = 'rgba(242, 242, 242, 0.3)';
export const DEFAULT_COLOR = 'rgba(122, 144, 244, 0.2)';
export const MDB_COLOR = 'rgba(89, 105, 141, 1)';
export const PINK_COLOR = pink[100];
export const DARKPINK_COLOR = pink[800];

export const theme = createMuiTheme({

    palette: {
        primary: {
            // light: will be calculated from palette.primary.main,
            main: MDB_COLOR
        },
        secondary: {
            main: blueGrey[200],
            // dark: will be calculated from palette.secondary.main,
        },
        error: {main: DARKPINK_COLOR},
        contrastThreshold: 3,
        tonalOffset: 0.2,
    },

    fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        'Arial',
        'sans-serif'
    ].join(','),
    typography: {
        h1: {
            fontSize: 24,
            color: MDB_COLOR,
            fontWeight: 'bold'
        },
        h2: {
            fontSize: 20,
            color: MDB_COLOR,
            fontWeight: 'bold',
            padding: '0.5em'
        }
    }
});

export const colorArray = [
    blueGrey[200], deepOrange[100],
    blueGrey[500], deepOrange[200], MDB_COLOR, indigo[100], indigo[200]
];
