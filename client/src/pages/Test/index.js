import React from 'react';
import {Table} from 'react-materialize';


function Test() {
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
</body>
    )
}
export default Test;