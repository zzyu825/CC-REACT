import React from 'react';
import ReactDOM from 'react-dom';
import Ball from './components/Ball';
import BallList from './components/BallList';

// ReactDOM.render(<Ball xSpeed={300} ySpeed={200} left={100} top={100} bg={"#ff0"}/>, document.getElementById('root'));
ReactDOM.render(<BallList />, document.getElementById('root'));
