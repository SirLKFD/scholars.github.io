import React, {useState, createContext}   from "react";
import "../../../styles/useContextStyles.scss";
import ComponentC from "./ComponentC.jsx";

function ComponentB() {



    return (
        <div className="box">
            <h1>Component B</h1>
            <ComponentC />
        </div>
    );
}

export default ComponentB;