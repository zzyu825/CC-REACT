import React, { Component } from 'react';
import ValidationComp, { A } from './ValidationComp';
import Comp from './Comp';
export default class App extends Component {

    render() {
        
        return (
            <ValidationComp 
                a={123} 
                b="abc" 
                c 
                d={"123"}
                // d={null}
                e={<h1>react元素</h1>}
                f={Comp}
                g={new A()}
                sex="男"
                h={[2, 3]}
                i={{
                    a: 2
                }}
                j={{
                    a: 3,
                    name: "abc",
                    age: 233,
                    address: {
                        province: "asdfa",
                        city: "adsfasdf"
                    }
                }}
                k={[{name:"asdf", age:33}]}
                m={23}
                score={"33"}
            />
        )
    }
}

