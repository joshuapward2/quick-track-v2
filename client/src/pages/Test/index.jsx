import axios from "axios";
import React, { useEffect, useState, useMemo } from 'react';
import {Table} from 'react-materialize';
import { useTable } from "react-table";


function Test(props) {
  const [inputEl, setInputEl] = useState({ foodName: "" });
  const [nutrition, setNutrition] = useState([]);

  const getFoodCalories = async (food) => {
      const apiKey = 'BFf0c964XzuYJiOFGty6ww==5ftngSIBwJD00OqT';
      const mealUrl = 'https://api.calorieninjas.com/v1/nutrition?query=' + food;
      const response = await axios.get(mealUrl, {
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



  const data = useMemo(
    () => [
      {
        "sugar_g": 0.0,
        "fiber_g": 0.0,
        "serving_size_g": 100.0,
        "sodium_mg": 72,
        "name": "chicken",
        "potassium_mg": 179,
        "fat_saturated_g": 3.7,
        "fat_total_g": 12.9,
        "calories": 222.6,
        "cholesterol_mg": 92,
        "protein_g": 23.7,
        "carbohydrates_total_g": 0.0
      },
      {
        "sugar_g": 0.0,
        "fiber_g": 0.0,
        "serving_size_g": 100.0,
        "sodium_mg": 72,
        "name": "chicken",
        "potassium_mg": 179,
        "fat_saturated_g": 3.7,
        "fat_total_g": 12.9,
        "calories": 222.6,
        "cholesterol_mg": 92,
        "protein_g": 23.7,
        "carbohydrates_total_g": 0.0
      },
      {
        "sugar_g": 0.0,
        "fiber_g": 0.0,
        "serving_size_g": 100.0,
        "sodium_mg": 72,
        "name": "chicken",
        "potassium_mg": 179,
        "fat_saturated_g": 3.7,
        "fat_total_g": 12.9,
        "calories": 222.6,
        "cholesterol_mg": 92,
        "protein_g": 23.7,
        "carbohydrates_total_g": 0.0
      }
    ], []
  )

  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accesor: "name"
      },
      {
        Header: "Calories",
        accesor: "calories"
      },
      {
        Header: "Protein",
        accesor: "protein_g"
      }
    ], []
  )
  
  const tableInstance = useTable({ columns, data});

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, } = tableInstance;

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

  useEffect(() => {
    getFoodCalories();
  }, []);


    return (
    <div>
      <div id='logBox' className='col s12 white'>
        <h2 className="brand-logo center"><i className="fa-solid fa-dumbbell fa-xl"></i></h2>
        <h3 className='purple-text center'> Today's log</h3>
        <h4 className='purple-text'> Total Calories: </h4>
        {/* <div className='container white'> */}
        <Table
          className="centered highlight responsive-table bordered"
          options={{ highlight: true }}
          {...getTableProps()}
        >
          <thead>
            {headerGroups.map((headerGroup,) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return <td {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </td>;
                  })}
                </tr>
              );
            })}
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
    </div>
  )
}
export default Test;