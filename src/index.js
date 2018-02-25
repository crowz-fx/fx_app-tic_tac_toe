import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TicTacToe from './tictactoe-app';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<TicTacToe />, document.getElementById('tictactoe-app'));
registerServiceWorker();