import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {DndProvider} from 'react-dnd';

import App from './App';
import {APP_ROOT} from './constants';

import HTML5Backend from 'react-dnd-html5-backend';
import {setBasepath} from 'hookrouter';

setBasepath(APP_ROOT);

ReactDOM.render(<DndProvider backend={HTML5Backend}><App/></DndProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
