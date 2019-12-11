import React from 'react';
import AppMain from './apps/main/AppMain';
import AppFigures from './apps/figures/AppFigures';
import AppItContainer from './containers/AppItContainer';

export const routes = {
    '/': () => <AppMain/>,
    '/it': () => <AppItContainer/>,
    '/figures': () => <AppFigures/>
};