import React, { Component } from 'react'
import CheckboxGroup from './index';
import { getStudents } from '../../../services/student'

export default class Test extends Component {

    state = {
        datas: [],
        chooseDatas: []
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
                <CheckboxGroup 
                    {...this.state}
                    name="stu"
                    onChange={newArr => {
                        this.setState({
                            chooseDatas: newArr
                        })
                    }}
                />
            </div>
        )
    }
}
