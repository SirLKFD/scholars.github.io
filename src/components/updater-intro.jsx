import React, { useState } from "react";

function updaterIntro() {

    const [count, setCount] = useState(0);

    function increment() {
        // Takes the previous count and adds 1 to it
        // React puts the updater function in a queue FCFS
        // During the next render, React will process the queue and update the state
        // RECOMMENDED AND BEST PRACTICE to use the updater function when updating state

        setCount(c =>c + 1);
        setCount(c =>c + 1);
        setCount(c =>c + 1);
    }

    function decrement() {
        setCount(c=> c - 1);
        setCount(c=> c - 1);
        setCount(c=> c - 1);

    }

    function reset() {
        setCount(c=>c=0); // using the updater function to reset the count to 0
        setCount(0); // works the same as the line above
    }


    return (
    <div>
     <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </div>
  );
}

export default updaterIntro;