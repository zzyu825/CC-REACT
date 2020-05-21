import React, { Component, forwardRef } from 'react';

// function A(props, ref) {
//     return (
//         <h1 ref={ref}>
//             组件A
//             <span>{props.a}</span>
//         </h1>
//     )
// }

class A extends Component {
    render() {
        return (
            <h1 ref={this.props.ref1}>
                组件A
                <span>{this.props.a}</span>
            </h1>
        )
    }
}

// const NewA = React.forwardRef(A);

const NewA = React.forwardRef((props, ref) => {
    return <A {...props} ref1={ref} />
});
export default class App extends Component {

    ARef = React.createRef();

    componentDidMount() {
        console.log(this.ARef)
    }
    
    render() {
        return (
            <div>
                {/* <NewA ref={this.ARef} a="123"/> */}
                {/* <A ref1={this.ARef} a="123"/> */}
                <NewA ref={this.ARef} a="123"/>
                {/* this.ARef.current: h1 */}
            </div>
        )
    }
}

