//useContext() = React Hook that allows you to share values
//               between multiple levels of components without having
//               to pass props down manually at every level.

// VERY USEFUL WHEN PASSING DATA TO MULTIPLE COMPONENTS IMMEDIATELY WITHOUT
// HAVING TO PASS PROPS DOWN MANUALLY AT EVERY LEVEL

// EXAMPLE OF USECONTEXT() IN ACTION
// 1. User Authentication
// 2. User Theme
// 3. User Language
// 4. User Preferences


// FIRST STEP: PROVIDER COMPONENT
// 1. import {createContext} from "react";
// 2. export const MyContext = createContext();
// 3. <MyContext.Provider value={value}>
//         <ChildComponent />
//    </MyContext.Provider>

// SECOND STEP: CONSUMER COMPONENT
// 1. import React, {useContext} from "react";
//    import {MyContext} from "./ComponentA";
// 2. const value = useContext(MyContext);

{/*
  Using Props to Pass "Hello Lord Kent" to Component D
   from ComponentA
   <ComponentB user={user} />
  to ComponentB
  <ComponentC user={props.user} />
   to ComponentC
  <ComponentD user={props.user} />
  from ComponentD
   <h2>Context Value: {props.user}</h2>

    VERY TEDIOUS!!!

     */}

import React, {useState, createContext}   from "react";
import "../../../styles/useContextStyles.scss";
import ComponentB from "./ComponentB.jsx";

export const UserContext = createContext();

function ComponentA() {


    const [user, setUser] = useState("Lord Kent");

    return (
        <div className="box">
            <h1>Component A</h1>
            <h2>{`Hello ${user}`}</h2>
            <UserContext.Provider value={user}>
                <ComponentB user={user} />
            </UserContext.Provider>

        </div>
    );
}

export default ComponentA;