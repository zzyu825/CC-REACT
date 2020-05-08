import React from 'react';
import ReactDOM from 'react-dom';
import Comp from './Comp';

ReactDOM.render((
    // <Comp children={<h2>传递的元素内容</h2>}/>
    // <Comp>
    //     <h2>传递的元素内容</h2>
    // </Comp>
    <Comp content1={<h2>元素内容2</h2>} content2={<h2>元素内容3</h2>}>
        <h2>元素内容1</h2>
    </Comp>
), document.getElementById('root'));

