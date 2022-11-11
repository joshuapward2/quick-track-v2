import React from 'react';


function Home() {
return (
<div className="homeContainer">
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
							<div className="input-field col s6">
								<input
									name="post-title"
									type="text"
									placeholder="Add Item"
									id="item-name"
								/>
								<label for="item-name">Meal</label>
							</div>
							<div cclassName="input-field col s6">
								<input
									name="post-calories"
									type="number"
									placeholder="Add Calories"
									id="item-calorie"
								/>
								<label for="item-name">Calorie</label>
							</div>

							
							<button className="add-btn btn green darken-3">
								<i className="fa fa-plus"></i>
								&nbsp; Add Meal
							</button>

						</div>
					</form>
				</div>
			</div>
        </div>
     </div>
          
)

}

export default Home;