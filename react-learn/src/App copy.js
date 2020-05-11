import React, { Component } from 'react';
// import InputNumber from './components/InputNumber'
export default class App extends Component {

    state = {
        val: '123',
        checked: false,
        loves: ['篮球', '足球', '音乐', '其他'],
        chooseLoves: ['足球', '音乐'],
        setVal: 'beijing'
    }

    render() {
        // const cbArr = this.state.loves.map(item => (<label key={item}>
        //     <input type="checkbox" checked={
        //         this.state.chooseLoves.includes(item)
        //     }
        //     onChange={ e => {
        //         if (e.target.checked) {
        //             this.setState({
        //                 chooseLoves: [...this.state.chooseLoves, item]
        //             })
        //         } else {
        //             this.setState({
        //                 chooseLoves: this.state.chooseLoves.filter(it => it !== item)
        //             })
        //         }
        //     }}
        //     />
        //     {item}
        // </label>))
        return (
            <div>
                {/* 默认情况下，他是一个非受控组件 */}
                {/* <input type="text"/> */}

                {/* 受控组件 */}
                {/* <input type="text" value="123"/> */}
                {/* <input type="text" value="123" readOnly/> */}
                {/* <input type="text" defaultValue="123"/> */}
                {/* <input type="text" value={this.state.val} onChange={e => {
                    this.setState({
                        val: e.target.value
                    })
                }}/>
                <button onClick={() => {
                    console.log(this.state.val);
                }}>获取表单元素值</button> */}

                {/* 只能输入数字的input */}
                {/* <InputNumber/> */}

                {/* 多选框 */}
                {/* <input type="checkbox" checked={this.state.checked} onChange={e => {
                    this.setState({
                        checked: e.target.checked
                    })
                }}/> */}
                {/* {cbArr}
                <button onClick={() => {
                    console.log(this.state.chooseLoves);
                }}>获取表单元素值</button> */}

                {/* 下拉列表 */}
                <select value={this.state.setVal} onChange={e => {
                    this.setState({
                        setVal: e.target.value
                    })
                }}>
                    <option value="beijing">北京</option>
                    <option value="shanghai">上海</option>
                    <option value="guangzhou">广州</option>
                </select>
            </div>
        )
    }
}

