import React, {useState, useContext, useEffect} from 'react'

import "../../styles/details.css";

import {Context} from "../store/appContext"

const Profile = ()=>{

    let {store} = useContext(Context)

    console.log(store.profile)

    return (
        <>
        
            <div className='d-flex justify-content-center text-light'>
                <h1 className='text-leght'>{store?.profile?.name}</h1>
            </div>
            
            <div className={'bg-primary ms-5'} style={{height:"450px", width:"400px", borderRadius:"15px"}}>

                <h3 className='text-center text-light'>
                    Your perfil {store?.profile?.name}
                </h3>

                <hr />
                <div className='ms-4 text-warning'>
                    <p>Your email: {store?.profile?.email}</p>
                    <p>Your email: {store?.profile?.id}</p>
                </div>

            </div>
        
        
        </>
    )
}

export default Profile