import React, {useState, useEffect, useContext} from "react";
import "../../styles/home.css";

import {Context} from "../store/appContext"

import Body_c from "../component/body_component"

const Home = () => {

	let {store} = useContext(Context)

	return (
		<>
			<hr />
			<div className="container">

				<Body_c title="People" obj={store.apiPeople_data}/>
				<br />

				<Body_c title="Planets" obj={store.apiPlanets_data} />
				<br />

				<Body_c title="Films" obj={store.apiFilms_data} />
				<br />

				<Body_c title="Species" obj={store.apiSpecies_data} />
				<br />

				<Body_c title="Starship" obj={store.apiStarships_data} />
				<br />

				<Body_c title="Vehicles" obj={store.apiVehicles_data} />
				<br />

			</div>
	

		</>
	)

};

export default Home;