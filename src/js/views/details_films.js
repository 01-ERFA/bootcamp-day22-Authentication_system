import React, {useContext, useEffect, useState} from "react"
import { Link, useParams } from "react-router-dom";
import "../../styles/details.css";

import { Context } from "../store/appContext";

// import Body_c from "../component/body_component";


const Details_films = ()=>{

    const { store, actions } = useContext(Context);

    const params = useParams()

    const [next, setNext] = useState("")
    const [down, setDown] = useState("")
    const [like_favorite, set_like_favorite] = useState("text-info")

    const [apiIMG_data, set_apiIMG_data] = useState()
    let apiIMG = (s_link)=>{
        fetch("https://starwars-visualguide.com/assets/img/films/"+ s_link +".jpg")
        .then((response)=>response)
        .then((data)=>set_apiIMG_data(data))
    }



    // obteniendo el contenido y filtrandolo

    // let [obj, setObj] = useState({})

    // let obj_characters_f = ()=>{


    //     let temp = store.apiPeople_data.filter((item)=>{
    //     return item.url !== null
    //     })


    // }


    useEffect(()=>{
        actions.apiFilms_ID(params.theid)
        apiIMG(params.theid)


        setDown(String(Number(params.theid)-1))
        setNext(String(Number(params.theid)+1))

        set_like_favorite("text-info")
    }, [params.theid])

    // botones
    // const press_like = ()=>{
    //     actions.funFavorites(props.name)
    //     if(like_favorite === "text-info"){
    //         set_like_favorite("text-danger")
    //     }else{
    //         set_like_favorite("text-info")
    //     }
    // }


    return (
        <>

            <hr />
            <div className="d-flex container">

            <img src={apiIMG_data?.url}style={{maxHeight:"450px", maxWidth:"700px"}} />

            <div className="d-flex flex-column align-items-center" style={{width:"100%"}}>
                <h4 className="text-primary">
                    {store.apiFilms_ID_data?.properties?.title}
                </h4>
                <p className="text-light">
                    {store.apiFilms_ID_data?.description}
                </p>
                <hr />

                <br />

                <p className="text-info ms-4">
                    {store.apiFilms_ID_data?.properties?.opening_crawl}
                </p>

                <p className="text-light" style={{fontSize:"15px"}}> 
                    {store.apiFilms_ID_data?.properties?.release_date}
                </p>

                {/* <div className="container text-center text-info">
      
                    <Body_c title="Characters" obj={{}} />
                     <br />

                    <Body_c title="Starships" obj={{}} />
                    <br />

                </div> */}

                <hr />

                <div className="d-flex justify-content-end fixed-bottom mb-4" style={{width:"90%"}}>
                
                <Link to={"/films/details/"+down}>
                    <button  className="btn border-warning mx-3 text-info">
                        previous
                    </button>
                </Link>

                {/* <button onClick={()=>press_like()} className="btn border-warning mx-2">
                    <i className={"fa fa-heart "+like_favorite} />
                </button> */}

                <Link to={"/films/details/"+next}>
                    <button  className="btn border-warning mx-3 text-info">
                        next
                    </button>
                </Link>

            </div>


            </div>


            </div>
        
        </>

    )

}

export default Details_films