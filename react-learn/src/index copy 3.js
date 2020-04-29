import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const src = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588163123922&di=10d7190e462d9bd8ff9e478295c8c7e6&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn%2Fw960h540%2F20180111%2Fc761-fyqnick6770796.jpg";
const cls = "image";

const div = (
  <div>
    <img src={src} alt="" className={cls} style={{
      marginLeft: '100px'
    }}/>
  </div>
)

ReactDOM.render(div, document.getElementById('root'));
