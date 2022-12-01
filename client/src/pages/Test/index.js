import React, { useEffect, useState } from 'react';
import {Table} from 'react-materialize';


function Test(props) {
  const [inputEl, setInputEl] = useState({ foodName: "" });
  const [nutrition, setNutrition] = useState([]);

  const getFoodCalories = async (food) => {
      const apiKey = 'BFf0c964XzuYJiOFGty6ww==5ftngSIBwJD00OqT';
      const mealUrl = 'https://api.calorieninjas.com/v1/nutrition?query=' + food;
      const response = await fetch(mealUrl, {
          method: 'GET',
          headers: { 'X-Api-Key': apiKey},
          contentType: 'application/json'
      })
      .catch(err => console.error(err));

      if(response) {
        const nutrition = response.data;

        console.log('Nutrition:', nutrition);
        setNutrition(nutrition);
      }
  };

  useEffect(() => {
    getFoodCalories();
  }, []);

  const handleChange = (event) => {
      const {name, value} = event.target;
      setInputEl({
          ...inputEl,
          [name]: value,
      })
  };

  const formSubmitHandler = async (event) => {
      event.preventDefault();
      const food = inputEl.foodName;
      getFoodCalories(food);
  };

  


    return (
<body>
<div id='logBox' className='col s12 white'>
<h2 className="brand-logo center"><i className="fa-solid fa-dumbbell fa-xl"></i></h2>
<h3 className='purple-text center'> Today's log</h3>
<h4 className='purple-text'> Total Calories: </h4>
{/* <div className='container white'> */}
<Table 
className="centered highlight responsive-table bordered"
options={{
highlight: true
  }}
>
  <thead>
    <tr>
      <th data-field="id">
        Food
      </th>
      <th data-field="name">
        Calories
      </th>
      <th data-field="price">
        Protein
      </th>
      <th data-field="price">
        Carbs
      </th>
      <th data-field="price">
        Fats
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        Chicken sandwhich
      </td>
      <td>
        750 kcal
      </td>
      <td>
        36g
      </td>
    </tr>
    <tr>
      <td>
        Alan
      </td>
      <td>
        Jellybean
      </td>
      <td>
        $3.76
      </td>
    </tr>
    <tr>
      <td>
        Jonathan
      </td>
      <td>
        Lollipop
      </td>
      <td>
        $7.00
      </td>
    </tr>
  </tbody>
</Table>
</div>
{/* </div> */}
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
</body>
    )
}
export default Test;