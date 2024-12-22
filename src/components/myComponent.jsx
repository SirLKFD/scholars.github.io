import React, {useState} from 'react';

function MyComponent() {

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        setName("John Doe");
        console.log(name);
    }

    const incrementAge = () => {
        setAge(age + 1);
        console.log(age);
    }

    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed);
        console.log(isEmployed);
    }

    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={incrementAge}>Increment Age</button>

            <p>IsEmployed: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={toggleEmployedStatus}>Is Employed</button>

        </div>
    );

}

export default MyComponent;