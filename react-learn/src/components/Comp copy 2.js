import React, { Component } from 'react'

export default class Comp extends Component {

    state = {
        n: 0
    }

    handelClick = () => {

        this.setState({
            n: this.state.n + 1
        }, () => {
            this.setState({
                n: this.state.n + 1
            }, () => {
                this.setState({
                    n: this.state.n + 1
                });
            });
        })

        // this.setState({
        //     n: this.state.n + 1
        // });

        // this.setState({
        //     n: this.state.n + 1
        // });

        // this.setState({
        //     n: this.state.n + 1
        // });
    }

    render() {
        console.log('render');
        return (
            <div>
                <p>{this.state.n}</p>
                <button onClick={this.handelClick}>点击+1</button>
            </div>
        )
    }
}
