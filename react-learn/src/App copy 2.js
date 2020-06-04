import React from 'react';
import { getStudents } from './services/student'

function withAllStudents(Comp) {
    return class AllStidentsWrapper extends React.Component {

        state = {
            stus: []
        }

        async componentDidMount() {
            const stus = await getStudents();
            this.setState({
                stus
            })
        }

        render() {
            return <Comp {...this.props} stus={this.state.stus} />
        }
        
    }
}

function Test(props) {

    const stusArr = props.stus.map(it => <li key={it.id}>{it.name}</li>)

    return (
        <ul>
            {stusArr}
        </ul>
    )
}

const TestStudents = withAllStudents(Test);

export default function App() {
    return (
        <div>
            <TestStudents />
        </div>
    )
}
