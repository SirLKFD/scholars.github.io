import React, {useState} from "react";

function updateArrays_stateIntro(){

    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

    function handleAddFood() {
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = ""

        // Validate that the input is not empty
        if (newFood === "") {
            alert("Food name cannot be empty!");
            return;
        }

        // using updater function to add new food
        setFoods(prevfoods =>[...prevfoods, newFood]);

    }

    // using index to remove food
    function handleRemoveFood(index) {

        setFoods(foods.filter((ignoreParameter, i) => i !== index));

    }


    return(
        <div>
        <h2>List of Food</h2>
            <ul>
                {foods.map((food, index) => <li onClick={() => handleRemoveFood(index)} key={index}>{food}</li>)}
            </ul>
            <input type="text" id="foodInput" placeholder="Enter food name"/>
            <button onClick={handleAddFood}>Add Food</button>
        </div>
    )
}

export default updateArrays_stateIntro;