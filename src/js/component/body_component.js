import React, {useEffect} from "react";

import Card from "../component/card"


const Body_c = (props)=>{

    // map de las cards
 
    const map_obj = props?.obj.map((item, index)=>{
        return <Card key={index} name={item?.name} uid={item?.uid} title={props?.title} title_f={item?.properties} />
    })

    return(
 
    <>
    
        <h2 className="mb-3 card-title text-primary">{props?.title}</h2>

        <pre className="d-flex mx-4 chroma">

            {map_obj}

        </pre>
    
    </>


)}

export default Body_c;