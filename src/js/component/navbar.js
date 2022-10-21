import React, {useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";

import logoImage from "../../img/logo.png"

import {Context} from "../store/appContext"

import "../../styles/details.css";

export const Navbar = () => {


	let {store, actions} = useContext(Context)

	const [visibility_button_favorite, setVisibility_button_favorite] = useState("hidden")
	const [visibility_button_login, setVisibility_button_login] = useState("show")

	useEffect(()=>{
		if(store.auth === true){
			setVisibility_button_favorite("show")
			setVisibility_button_login("hidden")
		}else{
			setVisibility_button_favorite("hidden")
			setVisibility_button_login("show")
		}
	},[store.auth])



	// let button_delete = (id)=>{
    //     setDelete_color("btn btn-danger")
    //     setTimeout(() => {
    //         setList(list.filter((item, index)=>index !== id))
    //     }, 100);
    //     if (list_null === "" && list.length == 1){
    //         setList_null("No hay favoritos!")
    //     }
    // }

	// let button_delete_all = ()=>{
    //     setTimeout(() => {
    //         setList([])
    //     }, 200);
    //     if (list_null === ""){
    //         setList_null("No hay favoritos!")
    //     }
    // }

	const screen_list = store.favorites.map((item, index)=>
    {return(
	<div key={item}>
		{/* <Link to=""> */}
		<div className="d-flex align-items-center">
			<li className="mx-2 text-light">{index+1}</li>
            <li className="text-info ms-3 my-1">
				{item}
			</li>
		</div>
        {/* </Link> */}
		{/* <button onClick={()=>button_delete(index)} className={delete_color}>X</button> */}
		<br />
    </div>)}
    )

	return (
		<nav className="navbar navbar-light bg-dark p-3" >
			<Link to="/" className="ms-4">
				<img className="img-fluid img-thumbnail" src={logoImage} style={{maxWidth:"100px", maxHeigth:"100px"}} />
			</Link>

			{/* login */}
			<Link to="/login" className={visibility_button_login}>
				<button className="btn btn-primary me-3">
					Login
				</button>
			</Link>

			{/* favorites */}
			<Link to="" className={"me-4 nav-item dropdown d-flex "+visibility_button_favorite} style={{textDecoration: "none"}} >
				<div className="d-flex flex-column">
					<button className="btn btn-primary nav-link dropdown-toggle text-light mx-2" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites 
					</button>
					<ul className="dropdown-menu bg-dark me-4">

						{screen_list}
						{/* <hr />
						<button onClick={()=>button_delete_all()} className="btn btn-danger ms-3">
						Delete all
					</button> */}
					</ul>
				</div>

				<button onClick={()=>actions.logOut()} className="btn border-info btn-secondary mx-2">
					Log Out
				</button>
			</Link>

		</nav>
	);
};
