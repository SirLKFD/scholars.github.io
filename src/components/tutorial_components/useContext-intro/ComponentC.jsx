import React, {useState, useContext}   from "react";
import "../../../styles/useContextStyles.scss";
import {UserContext} from "./ComponentA.jsx";
import ComponentD from "./ComponentD.jsx";

function ComponentC() {

    const user = useContext(UserContext);

    return (
        <div className="box">
            <h1>Component C</h1>
            <h2>Hello Again: {user}</h2>
            <ComponentD/>
        </div>
    );
}

export default ComponentC;