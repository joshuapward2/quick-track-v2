import React,{useState} from 'react';
import {Button} from "react-materialize"
import { useParams } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_CALORIES } from '../../utils/queries';

function Home(props) {
    const [inputEl, setInputEl] = useState({ foodName: "" });
	const { id: userId } = useParams();

	const { loading, data } = useQuery(QUERY_CALORIES, {
		variables: { id: userId},
	});

	const calories = data?.calories || {};
	console.log(calories);

	if (loading) {
		return <div>Loading...</div>;
	}


    const getFoodCalories = function(food) {
        const apiKey = 'BFf0c964XzuYJiOFGty6ww==5ftngSIBwJD00OqT';
        const mealUrl = 'https://api.calorieninjas.com/v1/nutrition?query=' + food;
        fetch(mealUrl, {
            method: 'GET',
            headers: { 'X-Api-Key': apiKey},
            contentType: 'application/json'
        })
            .then(response => response.json())
            .then(data => {
                if(data.items) {
                console.log(data.items);
                data.items.forEach(item => {
                    console.log(item)
					listApiData(item);
                });
            }
        })
        .catch(err => console.error(err));
    }
    const handleChange = (event) => {
        const {name, value} = event.target;
        setInputEl({
            ...inputEl,
            [name]: value,
        })
    };
    const formSubmitHandler = (event) => {
        event.preventDefault();
        const food = inputEl.foodName;
        getFoodCalories(food);
    };

	const listApiData = (item) => {
		let cal = item.calories
		console.log(cal);
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
                    <form onSubmit={formSubmitHandler}>
                        <input
                            type="name"
                            placeholder='Search for foods'
                            id='food-input'
                            name="foodName"
                            value={inputEl.foodName}
                            onChange={handleChange}
                            />
                        <button className='btn' type='submit'> Search </button>
                    </form>
                    {/* <input type="text" placeholder='Search for foods' id='food-input'></input> */}
                    {/* <button className='btn' onClick={formSubmitHandler}> Search </button> */}
                </div>
                <ul id='list'>
				</ul>
            </div>
        </div>
    )
}
export default Home;