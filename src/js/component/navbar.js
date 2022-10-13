import React, {useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";

import logoImage from "../../img/logo.png"

import {Context} from "../store/appContext"

export const Navbar = () => {


	let {store} = useContext(Context)

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

			<Link to="" className="me-4 nav-item dropdown">
				<button className="btn btn-primary nav-link dropdown-toggle text-light" data-bs-toggle="dropdown" aria-expanded="false">
					Favorites 
				</button>
				<ul className="dropdown-menu bg-dark me-4">

					{screen_list}

					{/* <hr />
					<button onClick={()=>button_delete_all()} className="btn btn-danger ms-3">
						Delete all
					</button> */}

          		</ul>
			</Link>

		</nav>
	);
};
