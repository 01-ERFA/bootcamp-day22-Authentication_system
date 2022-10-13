import React, {useState, useEffect, useContext} from "react";
 
import {Link} from "react-router-dom"

import {Context} from "../store/appContext"

const Card = (props)=>{

    let {store, actions} = useContext(Context)

    const [apiIMG_data, set_apiIMG_data] = useState()

    let apiIMG = (p_link, s_link)=>{
        fetch("https://starwars-visualguide.com/assets/img/"+ p_link +"/"+ s_link +".jpg")
        .then((response)=>response)
        .then((data)=>set_apiIMG_data(data))
    }


    const [like_favorite, set_like_favorite] = useState("text-primary")
    const press_like = ()=>{
        actions.funFavorites(props.name)
        if(like_favorite === "text-primary"){  
            set_like_favorite("text-danger")  
        }else{
            set_like_favorite("text-primary")
        }
    }

    let [subDom, setSubDom] = useState("")

    let [titile_card, setTitle_card] = useState("")

    useEffect(()=>{
    
        if(props.title == "People"){

            setSubDom("/people")
            apiIMG("characters", props.uid)

            setTitle_card(props.name)

        } else if(props.title == "Planets"){

            setSubDom("/planet")
            apiIMG("planets", props.uid)

            setTitle_card(props.name)
 
        }else if(props.title == "Vehicles"){

            setSubDom("/vehicle")
            apiIMG("vehicles", props.uid)

            setTitle_card(props.name)
        }
        else if(props.title == "Films"){

            setSubDom("/films")
            apiIMG("films", props.uid)

            setTitle_card(props?.title_f.title)
        }
        else if(props.title == "Species"){

            setSubDom("/species")
            apiIMG("species", props.uid)

            setTitle_card(props.name)
        }
        else if(props.title == "Starship"){

            setSubDom("/starships")
            apiIMG("starships", props.uid)

            setTitle_card(props.name)
        }
        
    }, [])
 

    return (<div className="mx-4" style={{width: "22rem", background:"#474787", borderRadius:"10px"}}>
                <img src={apiIMG_data?.url} className="card-img-top" style={{borderRadius:"10px"}} />
                <div className="card-body">
                    <Link to={subDom+"/details/"+props.uid} style={{textDecoration: "none"}}>
                        <h5 className="card-title text-info" style={{maxWidth: "22rem"}}>{titile_card}</h5>
                    </Link>
                    <hr />
                    
                    
                    <div className="d-flex justify-content-between align-items-end" style={{height:"100%"}}>
                        <Link to={subDom+"/details/"+props.uid}>
                            <button className="btn btn-primary">
                                Learn more!
                            </button>
                        </Link>
     
                        <button onClick={()=>press_like()} className="btn btn-warning ms-4">
                            <i className={"fa fa-heart "+like_favorite} />
                        </button>
            
                    </div>

                </div>
            </div>
)}

export default Card;