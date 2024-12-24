import React, {useState, useContext}   from "react";
import "../../../styles/useContextStyles.scss";
import {UserContext} from "./ComponentA.jsx";

function ComponentD() {

    // "COMPONENT A" DIRECTLY TO "COMPONENT D", NO NEED TO PASS PROPS
    const user = useContext(UserContext);

    return (
        <div className="box">
            <h1>Component D</h1>
            <h2>Bye: {user}</h2>

        </div>
    );
}

export default ComponentD;