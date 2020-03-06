import React from 'react';
import {ThemeProvider} from '@material-ui/styles';
import {Container, CssBaseline} from '@material-ui/core';
import {MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import ruLocale from 'date-fns/locale/ru';

import AppSwitcher from './pages/AppSwitcher';
import {Header, Footer} from './components/components';
import {UserContextProvider} from './contexts/user/UserContext';
import {DataContextProvider} from './contexts/data/DataContext';
import {UserChecker} from './services/UserChecker';
import {theme} from './theme';
import {useStyles} from './App.css';

const localeMap = {
    ru: ruLocale,
};

const App = () => {
    const classes = useStyles();

    return (
        <>
            <CssBaseline/>
            <MuiPickersUtilsProvider utils={DateFnsUtils} locale={localeMap['ru']}>
                <UserContextProvider>
                    <UserChecker>
                    <DataContextProvider>
                        <ThemeProvider theme={theme}>
                            <Container className={classes.app}>
                                <Header/>
                                <AppSwitcher classes={classes}/>
                                <Footer/>
                            </Container>
                        </ThemeProvider>
                    </DataContextProvider>
                    </UserChecker>
                </UserContextProvider>
            </MuiPickersUtilsProvider>
        </>
    );
};

export default App;