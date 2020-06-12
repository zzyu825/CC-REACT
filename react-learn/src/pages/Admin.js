import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Menu from '../components/Menu';
import { Route } from 'react-router-dom';
import StudentList from '../pages/student/StudentList';
import StudentAdd from '../pages/student/StudentAdd';
import CourseList from '../pages/course/CourseList';
import CourseAdd from '../pages/course/CourseAdd';
import Welcome from './Welcome';

export default function Admin() {
    return (
        <Layout 
            header={<Header/>}
            aside={<Menu/>}
        >
            <Route path="/" exact component={Welcome} />
            <Route path="/students" exact component={StudentList} />
            <Route path="/students/add" exact component={StudentAdd} />
            <Route path="/courses" exact component={CourseList} />
            <Route path="/courses/add" exact component={CourseAdd} />
        </Layout>
    )
}
