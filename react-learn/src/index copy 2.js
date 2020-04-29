import React from 'react';
import ReactDOM from 'react-dom';

const a = 12, b = 5;

// const obj = {
//   a: 1,
//   b: 2
// }

const obj = <span>这是span元素</span>;

// const arr = [1, 2, 3, 4, 5];
// const arr = [1, false, 3, null, 5, undefined];
// const arr = [1, false, 3, null, 5, {a: 1}];

const array = new Array(30);
array.fill(0);
const arr = array.map((item, i) => <li key={i}>{i}</li>);

const div = (
  <div>
    {a} * {b} = {a * b}
    {/* 这是注释 */}
    <p>
      {/* 以下不会产生任何输出 */}
      {null}
      {undefined}
      {false}
    </p>
    <p>
      {0}
    </p>
    <p>
      {/* 普通对象无法放置 */}
      {/* {obj} */}
    </p>
    <p>
      {obj}
    </p>
    <p>
      {arr}
    </p>
  </div>
);
console.log(div);

// const div = React.createElement('div', {}, `${a} * ${b} = ${a * b}`)

ReactDOM.render(div, document.getElementById('root'))

