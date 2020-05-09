import React from 'react';
import ThreeLayout from './components/common/ThreeLayout';

export default function App() {
    return (
        <div>
            <ThreeLayout
                gap={50} 
                left={<div style={{
                    border: "2px solid #008c8c",
                    height: "100%"
                }}>
                    左边栏
                </div>}
                right={<div style={{
                    border: "2px solid #008c8c",
                    height: "100%"
                }}>
                    右边栏
                </div>}
            >
                <div style={{
                    border: "2px solid #f40"
                }}>
                    <h1>主区域</h1>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, laborum quasi maxime facere aut vero in esse nam optio quibusdam architecto explicabo error ratione deleniti doloremque modi cupiditate, alias ab.
                    </p>
                </div>
            </ThreeLayout>
        </div>
    )
}
