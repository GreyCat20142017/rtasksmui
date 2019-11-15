import React from 'react';
import AppMain from './apps/main/AppMain';
import AppFigures from './apps/figures/AppFigures';
import AppIt from './apps/it/AppIt';

export const routes = {
    '/': () => <AppMain/>,
    '/it': () => <AppIt/>,
    '/figures': () => <AppFigures/>
};