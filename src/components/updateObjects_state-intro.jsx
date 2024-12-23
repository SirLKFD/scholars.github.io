import React, {useState} from "react";

function updateObjects_stateIntro() {

    const [car, setCar] = useState(
        {year: 2024,
            make: "Ford",
            model: "Mustang",});

    // use the updater function to update the make property of the car object

    function handleYearChange(e){
        //retain the other values of car object using the spread operator which is "..."
        setCar(carUpdate =>({...carUpdate, year: e.target.value}));
    }

    function handleMakeChange(e){
        setCar(carUpdate =>({...carUpdate, make: e.target.value}));
    }

    function handleModelChange(e){
        setCar(carUpdate =>({...carUpdate, model: e.target.value}));
    }

    return(
        <div>
            <p>Your favorite car is: {car.year} {car.make} {car.model}</p>
            <input type="number" value={car.year} onChange={handleYearChange}/><br/>
            <input type="text" value={car.make} onChange={handleMakeChange}/><br/>
            <input type="text" value={car.model} onChange={handleModelChange}/><br/>

        </div>

    )
}

export default updateObjects_stateIntro;