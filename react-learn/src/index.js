import React from 'react';
import ReactDOM from 'react-dom';
// import Tick from './components/Tick';
import TickControl from './components/TickControl';

// function handelClick(e) {
//     console.log('点击了', e);
// }

// const btn = <button 
//                 onClick={handelClick}
//                 onMouseEnter={e => {
//                     console.log('移入了', e)
//                 }}
//             >按钮</button>;

// ReactDOM.render(btn, document.getElementById('root'));

// ReactDOM.render(<Tick number={10} />, document.getElementById('root'));

const obj = new TickControl();
console.log(obj);

ReactDOM.render(<TickControl/>, document.getElementById('root'));
