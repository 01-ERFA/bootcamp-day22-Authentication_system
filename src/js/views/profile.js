import React, {useState, useContext, useEffect} from 'react'

import "../../styles/details.css";

import {Context} from "../store/appContext"

const Profile = ()=>{

    let {store, actions} = useContext(Context)



    return (
        <>
        
            <h1 className='text-leght'>{store.id_user}</h1>
            

        
        
        </>
    )
}

export default Profile