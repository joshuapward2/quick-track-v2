import React from 'react';
import {Button} from "react-materialize"

function Home() {
    const inputEl = document.getElementById("food-input");
    const listEl = document.getElementById('list');
    const getFoodCalories = function(foodName) {
        const apiKey = 'BFf0c964XzuYJiOFGty6ww==5ftngSIBwJD00OqT';
        const mealUrl = 'https://api.calorieninjas.com/v1/nutrition?query=' + foodName;
        fetch(mealUrl, {
            method: 'GET',
            headers: { 'X-Api-Key': apiKey},
            contentType: 'application/json'
        })
            .then(response => response.json())
            .then(data => {
                let html = "";
                if(data.items) {
                console.log(data.items);
                data.items.forEach(item => {
                    console.log(item.calories)
                });
            }
            listEl.innerHTML = html;
            listEl.classList.remove('hidden')
        })
    }
    const formSubmitHandler = function(event) {
        event.preventDefault();
        var foodName = inputEl.value.trim();
        getFoodCalories(foodName);
        inputEl.value = "";
    }
    return (
        <div className="homeContainer">
            <div className="container">
            {/* <div>Hello world from Login</div> */}
                <div>
                    <div className="card">
                        <div className="card-content">
                            <h3 className="total-calories center-align">
                                Total Calories:
                            </h3>
                            <div style= {{margin:"auto; width: 300px; height: 300px;"}}>
                                <canvas id="myChart"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="card">
                        <div className="card-content">
                            <span className="card-title">Add Meal/ Food Item</span>
                            <form className="" class="col">
                                <div className="row">
                                    <label for="item-name">Meal</label>
                                    <div className="input-field col s6">
                                        <input
                                            name="post-title"
                                            type="text"
                                            placeholder="Add Item"
                                            id="item-name"
                                        />
                                    </div>
                                    <label for="item-name">Calorie</label>
                                    <div cclassName="input-field col s6">
                                        <input
                                            name="post-calories"
                                            type="number"
                                            placeholder="Add Calories"
                                            id="item-calorie"
                                        />
                                    </div>
                                    <Button className="add-btn btn">
                                        <i className="fa fa-plus"></i>
                                        &nbsp; Add Meal
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <input type="text" placeholder='Search for foods' id='food-input'></input>
                    <button className='btn' onClick={formSubmitHandler}> Search </button>
                </div>
                <ul id='list'></ul>
            </div>
        </div>
    )
}
export default Home;