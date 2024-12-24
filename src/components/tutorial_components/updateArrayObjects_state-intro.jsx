import React, {useState} from "react";

function UpdateArrayObjects_stateIntro() {

    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    function handleAddCar(){
        const newCar = {
            year: carYear,
            make: carMake,
            model: carModel
        }

        // Validate the input is not empty
        if (!carMake.trim() || !carModel.trim()) {
            alert("Car make and model cannot be empty!");
            return;
        }


        // using updater function to update the state
        setCars(PrevCars =>[...PrevCars, newCar]);

        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");



    }

    function handleRemoveCar(index){
        setCars(cars => cars.filter((ignoreParameter, i) => i !== index));

    }

    function handleYearChange(event){
        setCarYear(event.target.value);
    }

    function handleMakeChange(event){
        setCarMake(event.target.value);
    }

    function handleModelChange(event){
        setCarModel(event.target.value);
    }


    return(
        <div>

            <h2>List of Car Objects</h2>
            <ul>
                {cars.map((car, index) =>
                    <li key={index} onClick={() => handleRemoveCar(index)}>
                        {car.year} {car.make} {car.model}
                    </li>
                )}
            </ul>
            <input type="number" placeholder="Year" value={carYear} onChange={handleYearChange}/><br/>
            <input type="text"  placeholder="Enter Car Make" value={carMake} onChange={handleMakeChange}/><br/>
            <input type="text"  placeholder="Enter Car Model" value={carModel} onChange={handleModelChange}/><br/>
            <button onClick={handleAddCar}>Add Car</button>


        </div>
    )
}

export default UpdateArrayObjects_stateIntro;
