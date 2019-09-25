import {createMuiTheme} from '@material-ui/core/styles';

import {blueGrey, deepOrange, indigo} from '@material-ui/core/colors';

export const theme = createMuiTheme({
    palette: {
        primary: indigo,
        secondary: blueGrey,
        error: deepOrange,
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
            color: indigo[500],
            fontWeight: 'bold'
        } ,
        h2: {
            fontSize: 20,
            color: indigo[500],
            fontWeight: 'bold',
            padding: '0.5em'
        }
    },
});

export const colorArray = [
    indigo[100], blueGrey[200], deepOrange[100],
    indigo[300], blueGrey[400], deepOrange[200],
    indigo[500], blueGrey[600], blueGrey[100], indigo[700]
];

export const BACK_COLOR = 'rgba(242, 242, 242, 0.3)';
export const DEFAULT_COLOR = 'rgba(122, 144, 244, 0.2)';