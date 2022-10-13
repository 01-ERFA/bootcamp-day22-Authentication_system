import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import Home from "./views/home";

import Details_people from "./views/details_people"
import Details_planets from "./views/details_planets"
import Details_vehicles from "./views/details_vehicles"
import Details_films from "./views/details_films"
import Details_species from "./views/details_species";
import Details_starship from "./views/details_starship";

import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						

						<Route exact path="/people/details/:theid">
							<Details_people />
						</Route>

						<Route exact path="/planet/details/:theid">
							<Details_planets />
						</Route>

						<Route exact path="/vehicle/details/:theid">
							<Details_vehicles />
						</Route>

						<Route exact path="/films/details/:theid">
							<Details_films />
						</Route>

						<Route exact path="/species/details/:theid">
							<Details_species />
						</Route>

						<Route exact path="/starships/details/:theid">
							<Details_starship />
						</Route>

						<Route>
							<h1 className="text-center text-danger" style={{display:"flex", alignItems:"center", height:"200px", justifyContent:"center"}}>Not found!</h1>
						</Route>
						
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
