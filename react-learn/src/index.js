import React from 'react';
import ReactDOM from 'react-dom';

let num = 1;

setInterval(() => {
  num ++;
  const div = (
    <div title="标题">
      {num}
    </div>
  );
  ReactDOM.render(div, document.getElementById('root'));
}, 1000);

// const div = (
//   <div title="标题">
//     {num}
//   </div>
// );

// console.log(div);

// div.props.children = 2;
// div.props.title = '标题2';

// ReactDOM.render(div, document.getElementById('root'));
