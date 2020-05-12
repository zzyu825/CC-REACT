import React, { Component } from 'react'
import RadioGroup from './index';
import { getStudents } from '../../../services/student'

export default class Test extends Component {

    state = {
        datas: [],
        value: ""
    }

    async componentDidMount() {
        const stus = await getStudents();
        this.setState({
            datas: stus.map(it => ({ value: it.id.toString(), text: it.name }))
        })
    }
    

    render() {
        return (
            <div>
                <RadioGroup 
                    {...this.state}
                    name="stu"
                    onChange={val => {
                        this.setState({
                            value: val
                        })
                    }}
                />
            </div>
        )
    }
}
