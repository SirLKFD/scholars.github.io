//useState() = Re-renders the component when the state value changes

// useRef() = Does not re-render the component when the state value changes
//            Improves performance

// 1. Accessing/Interacting with DOM elements
// 2. Handling Focus, Animations, and Transitions
// 3. Managing Timers and Intervals

import React, { useRef, useEffect } from "react";

function UseRefIntro() {
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    useEffect(() => {
        console.log("COMPONENT RENDERED");
        console.log(inputRef1, inputRef2, inputRef3);
    });

    function handleClick1() {
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "red";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";

    }

    function handleClick2() {
        inputRef2.current.focus();
        inputRef2.current.style.backgroundColor = "red";
        inputRef1.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }

    function handleClick3() {
        inputRef3.current.focus();
        inputRef3.current.style.backgroundColor = "red";
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "";
    }

    return (
        <div style={{ padding: "20px" }}> {/* Add some padding for visibility */}
            <button onClick={handleClick1}>Click me!</button>
            <input ref={inputRef1} style={{ margin: "10px" }} />

            <button onClick={handleClick2}>Click me!</button>
            <input ref={inputRef2} style={{ margin: "10px" }} />

            <button onClick={handleClick3}>Click me!</button>
            <input ref={inputRef3} style={{ margin: "10px" }} />
        </div>
    );
}

export default UseRefIntro;

