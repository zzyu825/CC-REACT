import React, { useState } from 'react'

export default function App() {

    console.log("App render");
    const [data, setdata] = useState({
        x: 1,
        y: 2
    })

    return (
        <div>
            <span>x:{data.x},y:{data.y}</span>
            <button onClick={() => {
                setdata({
                    ...data,
                    x: data.x + 1
                })
            }}>x + 1</button>
        </div>
    )
}

