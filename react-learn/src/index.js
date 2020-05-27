import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App"

ReactDOM.render(<App />, document.getElementById('root'));

document.addEventListener("click", e => {
    console.log("真实dom：document被点击了")
})
