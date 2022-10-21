import axios from "axios";
import { string } from "prop-types";


const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			apiPeople_data: [], 
			apiPlanets_data: [],
			apiVehicles_data: [], 
			apiFilms_data: [], 
			apiSpecies_data: [],
			apiStarships_data: [],

			//id
			apiPeople_ID_data: {},
			apiPlanets_ID_data: {},
			apiVehicles_ID_data: {},
			apiFilms_ID_data: {},
			apiSpecies_ID_data: {}, 
			apiStarships_ID_data: {},


			favorites: [],
			colorFavorite: ["text-primary", "text-danger"],
			class_color: "",

			auth: false,

			id_user: ""

		},
		actions: {
			signUp: async (name, email, password)=>{
				try{

					const response = await axios.post('https://3000-4geeksacade-flaskresthe-qjruzvrio0r.ws-us72.gitpod.io/users', {
						"name": name,
						"email": email,
						"password": password,
						"is_active": "True"
					})

				}catch(error){

					if(error.code === "ERR_BAD_REQUEST"){
						alert(error.response?.data?.msg)
					}

				}

			},
			logOut: ()=>{
				localStorage.removeItem("token")
				setStore({auth: false})
				setStore({id_user:""})
			},
			login: async (email, password)=>{
				try{ 
					const response = await fetch('https://3000-4geeksacade-flaskresthe-qjruzvrio0r.ws-us72.gitpod.io/login', {

						method: "POST",
						body: JSON.stringify({
							email: email,
							password: password
						}),
						headers: {
							'Content-Type': 'application/json'
						}
					})
					if(response.status === 200){
						const data = await response.json()
 
						localStorage.setItem("token", data.access_token)
						setStore({auth: true})
						setStore({id_user: string(data.user.id)})
					}else{
						alert("Wrong email or password")
					}
					// return true;

				}catch(err){
					console.log(err)
					// return false;
				}


			},
			funFavorites: (favorite)=>{
				
				const store = getStore()
				const actions = getActions()

				if(store.favorites.includes(favorite)){
					//elimina
					actions.delFavorites(favorite)
				}else{
					//agrega
					setStore({favorites: [...store.favorites, favorite]})
				}
			},
			delFavorites: (favorite)=>{
				const store = getStore()
				setStore({favorites: [...store.favorites.filter((item)=>item !== favorite)]})
			},
			apiPeople: ()=>{
				fetch("https://www.swapi.tech/api/people")
				.then((response)=>response.json())
				.then((data)=>setStore({apiPeople_data: data.results}) )
			},
			apiPlanets: ()=>{
				fetch("https://www.swapi.tech/api/planets")
				.then((response)=>response.json())
				.then((data)=>setStore({apiPlanets_data: data.results}) )
			}, 
			apiVehicles: ()=>{
				fetch("https://www.swapi.tech/api/vehicles")
				.then((response)=>response.json())
				.then((data)=>setStore({apiVehicles_data: data.results}) )
			},
			apiFilms: ()=>{
				fetch("https://www.swapi.tech/api/films")
				.then((response)=>response.json())
				.then((data)=>setStore({apiFilms_data: data.result}) )
			},
			apiSpecies: ()=>{
				fetch("https://www.swapi.tech/api/species")
				.then((response)=>response.json())
				.then((data)=>setStore({apiSpecies_data: data.results}) )
			},
			apiStarships: ()=>{
				fetch("https://www.swapi.tech/api/starships")
				.then((response)=>response.json())
				.then((data)=>setStore({apiStarships_data: data.results}) )
			},


			// segun el ID
			apiPeople_ID: (id)=>{
				fetch("https://www.swapi.tech/api/people/"+id)
				.then((response)=>response.json())
				.then((data)=>setStore({apiPeople_ID_data: data.result}) )
			}, 
			apiPlanets_ID: (id)=>{
				fetch("https://www.swapi.tech/api/planets/"+id)
				.then((response)=>response.json())
				.then((data)=>setStore({apiPlanets_ID_data: data.result}) )
			}, 
			apiVehicles_ID: (id)=>{
				fetch("https://www.swapi.tech/api/vehicles/"+id)
				.then((response)=>response.json())
				.then((data)=>setStore({apiVehicles_ID_data: data.result}) )
			}, 
			apiFilms_ID: (id)=>{
				fetch("https://www.swapi.tech/api/films/"+id)
				.then((response)=>response.json())
				.then((data)=>setStore({apiFilms_ID_data: data.result}) )
			},
			apiSpecies_ID: (id)=>{
				fetch("https://www.swapi.tech/api/species/"+id)
				.then((response)=>response.json())
				.then((data)=>setStore({apiSpecies_ID_data: data.result}) )
			},
			apiStarships_ID: (id)=>{
				fetch("https://www.swapi.tech/api/starships/"+id)
				.then((response)=>response.json())
				.then((data)=>setStore({apiStarships_ID_data: data.result}) )
			}
	}
};
}

export default getState;
