import React from 'react';
import ReactDOM from 'react-dom';
// import Tick from './components/Tick';
import Test from './components/Test';

// let num = 10,
//     timer = null;
/**
 * 倒计时函数
 */
// function tick() {
//     timer = setInterval(() => {
//         num--;
//         if (num <= 0) {
//             clearInterval(timer);
//         }
//         ReactDOM.render(<Tick number={num} />, document.getElementById('root'));
//     }, 1000);
// }

// tick();

// ReactDOM.render(<Tick number={10} />, document.getElementById('root'));
ReactDOM.render(<Test />, document.getElementById('root'));
