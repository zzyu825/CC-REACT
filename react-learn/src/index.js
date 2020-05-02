import React from 'react';
import ReactDOM from 'react-dom';
import src1 from './assets/1.jpg';
import src2 from './assets/2.jpg';
import src3 from './assets/3.jpg';
import './index.css';

let index = 0; // 显示图片的索引
const srcs = [src1, src2, src3]; // 保存图片路径的数组
const root = document.getElementById('root');
let timer; // 计时器

/**
 * 根据index的值，渲染图片
 */
function render() {
    ReactDOM.render(<img src={srcs[index]} />, root);
}

/**
 * 启动计时器，每隔一段时间切换图片
 */
function start() {
    clearInterval(timer);
    timer = setInterval(() => {
        index = (index + 1) % 3;
        render();
    }, 2000)
}

/**
 * 停止计时器
 */
function stop() {
    clearInterval(timer);
}

render();

start();

root.onmouseenter = () => {
    stop();
}

root.onmouseleave = () => {
    start();
}
