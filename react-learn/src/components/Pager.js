import React from 'react';
import './Pager.css'

export default function Pager({current, total, limit, number, onPageChange}) {

    // 需要传递的属性
    // current：当前页码
    // total：总数据量
    // limit：每页显示的数量
    // number：最多显示的页码数量

    const all = getAll(total, limit);
    if (all === 0) {
        return null;
    }
    const min = getMin(current, number);
    const max = getMax(min, number, all);
    const arr = [];
    for (let i = min; i <= max; i++) {
        arr.push(<span key={i} className={i === current ? "item active" : "item"} onClick={() => { toPage(i, current, onPageChange) }}>{i}</span>);
    }

    return (
        <>
            <span 
                className={
                    current === 1 ? "item disabled" : "item"
                }
                onClick={() => { toPage(1, current, onPageChange) }}
            >首页</span>
            <span 
                className={
                    current === 1 ? "item disabled" : "item"
                }
                onClick={() => { toPage(current - 1 < 1 ? 1 : current - 1, current, onPageChange) }}
            >上一页</span>
            {/* 中间页码 */}
            {arr}
            <span 
                className={
                    current === all ? "item disabled" : "item"
                }
                onClick={() => { toPage(current + 1 > all ? all : current + 1, current, onPageChange) }}
            >下一页</span>
            <span 
                className={
                    current === all ? "item disabled" : "item"
                }
                onClick={() => { toPage(all, current, onPageChange) }}
            >尾页</span>
            <span className="current">{current}</span>
            /
            <span>{total}</span>
        </>
    )
}

/**
 * 获取总页码数
 * @param {*} total 总数据量
 * @param {*} number 展示的页码数量
 */
function getAll(total, number) {
    return Math.ceil(total / number);
}

/**
 * 跳转到指定页
 * @param {*} target 指定页码
 * @param {*} current 当前页码
 * @param {*} onPageChange 跳转处理函数
 */
function toPage(target, current, onPageChange) {
    if (current === target) {
        return; // 目标页码和当前页码相同
    }
    onPageChange && onPageChange(target);
}

/**
 * 获取最小数字
 * @param {*} current 当前页码
 * @param {*} number 最多显示的页码数量
 */
function getMin(current, number) {
    let min = current - Math.floor(number / 2);
    // 防止越界
    if (min < 1) {
        min = 1
    }
    return min;
}

/**
 * 获取最大数字
 * @param {*} min 最小数字
 * @param {*} number 最多显示的页码数量
 * @param {*} all 总页数
 */
function getMax(min, number, all) {
    let max = min + number - 1;
    if (max > all) {
        max = all;
    }
    return max;
}