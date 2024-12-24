import React, { useState, useEffect } from 'react';

function BrowserWidthHeightUseEffect() {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    function handleResize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    // BAD PERFORMANCE BECAUSE IT ADDS AN EVENT LISTENER EVERY TIME THE COMPONENT RENDERS
   // window.addEventListener('resize', handleResize);
   // console.log("EVENT LISTENER ADDED");

    // INSTEAD, USE useEffect TO ADD THE EVENT LISTENER ONLY ONCE
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        console.log("EVENT LISTENER ADDED");

        // CLEAN UP FUNCTION
    return () => {
        window.removeEventListener('resize', handleResize);
        console.log("EVENT LISTENER REMOVED");
    }

    }, []);

    // UPDATE THE TITLE OF THE PAGE
    useEffect(() => {
        document.title = `Width: ${width} Height: ${height}`;
    }, [width, height]);





    return (
        <div>
            <p>Window Width: {width}</p>
            <p>Window Height: {height}</p>

        </div>
    );
}

export default BrowserWidthHeightUseEffect;