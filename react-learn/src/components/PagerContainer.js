import React, { Component } from 'react';
import Pager from './Pager';
import StudentList from './StudentList';
import Modal from './Modal'

export default class PagerContainer extends Component {

    state = {
        current: 1,
        total: 0,
        limit: 1,
        number: 5,
        studentList: [],
        isLoading: false
    }

    constructor(props) {
        super(props);
        this.getStudents();
        console.log(1)
    }

    onPageChange = (target) => {
        this.setState({
            current: target
        }, () => {
            this.getStudents();
        });
    }

    async getStudents() {
        console.log(2)
        this.setState({
            isLoading: true
        });
        const resp = await fetch(`http://open.duyiedu.com/api/student/findByPage?appkey=zzyu_1564402433694&page=${this.state.current}&size=${this.state.limit}`)
                                .then(resp => resp.json())
                                .then(resp => resp.data);
        console.log(3)
        this.setState({
            total: resp.cont,
            studentList: resp.findByPage,
            isLoading: false
        })
    }

    render() {
        return (
            <div className="container">
                <StudentList studentList={this.state.studentList} />
                <div className="pager">
                    <Pager {...this.state} onPageChange={this.onPageChange} />
                </div>
                <Modal isLoading={this.state.isLoading}/>
            </div>
        )
    }
}
