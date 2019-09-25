import React, {useState} from 'react';
import {ThemeProvider} from '@material-ui/styles';
import {Container, Typography} from '@material-ui/core';

import {theme} from './theme';
import {useStyles} from './App.css';
import FixBoard from './components/FixBoard';
import FiguresCreator from './components/FiguresCreator';
import {FIX_BOARD_CELLS} from './constants';

const App = () => {
    const classes = useStyles();
    const [last, setLast] = useState(null);
    const [fixed, setFixed] = useState(FIX_BOARD_CELLS.map(cell => null));

    const deleteFigure = () => {
        setLast(null);
    };

    const addFixed = (ind, id) => {
        if (typeof id !== 'object') {
            const dragged = Object.assign({}, fixed[id], {id: ind});
            const newFixed = fixed.map((item, index) => (index === id ? null : item));
            newFixed[ind] = Object.assign({}, dragged);
            setFixed(newFixed);
        } else if (last) {
            setFixed(fixed.map((item, index) => index === ind ? Object.assign({}, last, {id: id}) : item));
            setLast(null);
        }
    };

    const deleleFixed = (id) => {
        if (typeof id !== 'object' && id) {
            setFixed(fixed.map((item, index) => index === id ? null : item));
        } else if (!id && last) {
            setLast(null);
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <Container className={classes.app}>
                <Typography variant={'h1'}>Генератор квадратов и прямоугольников</Typography>
                <FiguresCreator classes={classes} last={last} setLast={setLast}
                                deleteFigure={deleteFigure} deleteFixed={deleleFixed}/>
                <FixBoard fixed={fixed} addFixed={addFixed}/>
            </Container>
        </ThemeProvider>
    );
};

export default App;