import React, { useState, useEffect, use } from 'react';

import './playground.css';

const PlayGround = () => {
    const [isPressed, setIsPressed] = useState(false);
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `Button Clicked ${count}`;
    })
    return (
        <div>
            <span>PlayGround</span>
            <span>You clicked the button {count}</span>
            <div className="button-wrapper">
                <div
                    className={(isPressed) ? "circle one" : "circle" }
                />
                <div
                    className="circle two"
                />
                <div
                    className="circle three"
                />
                <div
                    className="circle four"
                />
                <button
                    className="button"
                    onMouseDown={() => {
                        setIsPressed(true);
                    }}
                    onMouseUp={() => {
                        setTimeout(() => {
                            setIsPressed(false);
                        }, 500);
                    }}
                    onClick={() => {
                        setCount(count + 1)
                    }}
                >
                    Click
                </button>
            </div>
        </div>
    )
};

export default PlayGround;
