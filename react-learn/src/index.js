import React from 'react';
import ReactDOM from 'react-dom';
import MyFuncComp from './MyFuncComp';
import MyClassComp from './MyClassComp'

// function MyFuncComp() {
//     return <h1>函数组件的内容</h1>
// }
// function myFuncComp() {
//     return <h1>函数组件的内容</h1>
// }

// const comp = <MyFuncComp title="abc/>; // 使用组件，生成的仍然是一个react元素
// const comp = <myFuncComp/>;
// console.log(comp);

const div = <div title="abc"></div>
console.log(div);

ReactDOM.render(<div>
    {/* {MyFuncComp()} */}
    {/* <MyFuncComp/> */}
    {/* {comp} */}
    <MyFuncComp number="aaa" enable />
    <MyFuncComp number={123} enable={true} />
    <MyFuncComp />
    <MyClassComp obj={{
        name: 'abc',
        age: 18
    }} />
    <MyClassComp number={123} ui={<h2>这是我传递的属性</h2>} />
    <MyClassComp number={123} />
</div>, document.getElementById('root'));