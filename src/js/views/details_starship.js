import React, {useContext, useEffect, useState} from "react"
import { Link, useParams } from "react-router-dom";
import "../../styles/details.css";

import { Context } from "../store/appContext";

const Details_starship = ()=>{



    const { store, actions } = useContext(Context);

    const params = useParams()

    const [next, setNext] = useState("")
    const [down, setDown] = useState("")
    // const [like_favorite, set_like_favorite] = useState("text-primary")

    const [apiIMG_data, set_apiIMG_data] = useState()
    let apiIMG = (s_link)=>{
        fetch("https://starwars-visualguide.com/assets/img/starships/"+ s_link +".jpg")
        .then((response)=>response)
        .then((data)=>set_apiIMG_data(data))
    }

    useEffect(()=>{
        actions.apiStarships_ID(params.theid)
        apiIMG(params.theid)


        setDown(String(Number(params.theid)-1))
        setNext(String(Number(params.theid)+1))

        // set_like_favorite("text-primary")
    }, [params.theid])

    // botones
    // const press_like = ()=>{
    //     if(like_favorite === "text-primary"){
    //         set_like_favorite("text-danger")
    //     }else{
    //         set_like_favorite("text-primary")
    //     }
    // }


    return(
        <>
        <hr />
        <div className="d-flex container">
            <img src={apiIMG_data?.url} style={{maxHeight:"350px", maxWidth:"500px"}} />

            <div className="d-flex flex-column align-items-center" style={{width:"100%"}}>
                <h2 className="text-primary">
                    {store.apiStarships_ID_data?.properties?.name}
                </h2>
                <p className="text-info">
                    {store.apiStarships_ID_data?.description}
                </p>
            </div>
        </div>
        <hr />

        <div className="container text-center text-primary">
            <div className="row">
                <div className="col">
                    Name
                </div>
                <div className="col">
                    Model
                </div>
                <div className="col">
                    Manufacturer
                </div>
                <div className="col">
                    Cost in Credits
                </div>
                <div className="col">
                    Max Atmosphering Speed
                </div>
                <div className="col">
                    Cargo Capacity
                </div>
                
            </div>
        </div>

        <br />

        <div className="container text-center text-info">
            <div className="row">
                <div className="col">
                    {store.apiStarships_ID_data?.properties?.name}
                </div>
                <div className="col">
                    {store.apiStarships_ID_data?.properties?.model}
                </div>
                <div className="col">
                    {store.apiStarships_ID_data?.properties?.manufacturer}
                </div>
                <div className="col">
                    {store.apiStarships_ID_data?.properties?.cost_in_credits}
                </div>
                <div className="col">
                    {store.apiStarships_ID_data?.properties?.max_atmosphering_speed}
                </div>
                <div className="col">
                    {store.apiStarships_ID_data?.properties?.cargo_capacity}
                </div>
            </div>
        </div>



        <br />

        <div className="d-flex justify-content-end" style={{width:"90%"}}>
            
            <Link to={"/starships/details/"+down}>
                <button  className="btn border-warning mx-4 text-info">
                    previous
                </button>
            </Link>



            {/* <button onClick={press_like} className="btn border-warning mx-2">
                <i className={"fa fa-heart "+like_favorite} />
            </button> */}

            <Link to={"/starships/details/"+next}>
                <button  className="btn border-warning mx-4 text-info">
                    next
                </button>
            </Link>

        </div>
    
    </>
    )

}

export default Details_starship