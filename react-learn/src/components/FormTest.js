import React, { Component } from 'react'

export default class FormTest extends Component {

    state = {
        loginId: '',
        loginPwd: '',
        sex: 'male',
        loves: [
            { value: "football", text: "足球" },
            { value: "basetball", text: "篮球" },
            { value: "movie", text: "电影" },
            { value: "music", text: "音乐" },
            { value: "other", text: "其他" }
        ],
        chooseLoves: [],
        city: 'beijing'
    }

    handelChange = e => {
        let val = e.target.value;
        let name = e.target.name;

        if (e.target.type === 'checkbox') {
            // 如果是多选框，对val进行特殊处理
            if (e.target.checked) {
                val = [...this.state.chooseLoves, val]
            } else {
                val = this.state.chooseLoves.filter(it => it !== val)
            }
        }

        this.setState({
            [name]: val
        })
    }

    /**
     * 映射多选框数组
     */
    getCbArr() {
        const arr = this.state.loves.map(item => (
            <label key={item.value}>
                <input type="checkbox" name="chooseLoves"
                    value={item.value}
                    checked={this.state.chooseLoves.includes(item.value)}
                    onChange={this.handelChange}
                />
                {item.text}
            </label>
        ))
        return arr;
    }

    render() {
        const cbArr = this.getCbArr();
        return (
            <div>
                <p>
                    <input type="text"
                        name="loginId"
                        value={this.state.loginId}
                        onChange={this.handelChange}
                    />
                </p>
                <p>
                    <input type="password"
                        name="loginPwd"
                        value={this.state.loginPwd}
                        onChange={this.handelChange}
                    />
                </p>
                <p>
                    <label>
                        <input type="radio"
                            name="sex"
                            value="male"
                            checked={this.state.sex === 'male'}
                            onChange={this.handelChange}
                        />
                        男
                    </label>
                    <label>
                        <input type="radio"
                            name="sex"
                            value="female"
                            checked={this.state.sex === 'female'}
                            onChange={this.handelChange}
                        />
                        女
                    </label>
                </p>
                <p>
                    {cbArr}
                </p>
                <p>
                    <select name="city" value={this.state.city}
                        onChange={this.handelChange}
                    >
                        <option value="beijing">北京</option>
                        <option value="shanghai">上海</option>
                        <option value="chengdu">成都</option>
                    </select>
                </p>
                <p>
                    <button onClick={() => {
                        console.log(this.state)
                    }}>获取表单数据</button>
                </p>
            </div>
        )
    }
}
