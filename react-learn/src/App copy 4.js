import React from 'react';
import { getStudents } from './services/student'

class AllStudents extends React.Component {

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
        if (typeof this.props.render === "function") {
            return this.props.render(this.state.stus)
        }
        return null;
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

export default function App() {
    return (
        <div>
            <AllStudents render={stus => <Test stus={stus} />} />
        </div>
    )
}
