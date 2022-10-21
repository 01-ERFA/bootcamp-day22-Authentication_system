import React, {useState, useContext} from 'react'

import "../../styles/details.css";

import {Context} from "../store/appContext"

import {useHistory} from "react-router-dom"

const Login = ()=>{

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")

    const [visibility_signup, setVisibility_signup] = useState("hidden")
    const [visibility_login, setVisibility_login] = useState("show")

    const {store, actions} = useContext(Context)

    const history = useHistory()

    function cleanInputs(){
        setEmail("")
        setPassword("")
        setName("")
    }

    function button_login(){
        actions.login(email, password)
        
        setTimeout(() => {
            if(store.auth === true){
                history.push("/")
            }    
        }, 1000);

        cleanInputs()
    }

    function visibility(screen){
        if(screen === "login"){
            setVisibility_signup("show")
            setVisibility_login("hidden")
            cleanInputs()
        }else if (screen === "signup"){
            setVisibility_signup("hidden")
            setVisibility_login("show")
            cleanInputs()
        }
    }

    function button_signup(){

        if(name != "" && email != "" && password != ""){
            actions.signUp(name, email, password)
            cleanInputs()
            visibility("signup")
        }else{
            alert("fill in all the fields")
        }
        
        // setTimeout(() => {
        //     if(store.auth === true){
        //         history.push("/")
        //     }    
        // }, 1000);

        // DENTRO DE LA VALIDACION DE SI EL USUARIO EXISTE O NO
    }


    return (
        
            <div className='d-flex align-items-center flex-column mt-4' style={{width:"100%"}}>

                {/* login */}
                <div className={'bg-primary '+visibility_login} style={{height:"450px", width:"400px", borderRadius:"15px"}}>

                    <div className='text-center text-light mt-3'>
                        <h1>
                            Login
                        </h1>
                    </div>
                    <hr />

                    <div className='d-flex flex-column justify-content-center align-items-center mt-5' style={{width:"100%"}}>
                        <label className='d-flex justify-content-start' style={{width:"60%"}}>Email</label>
                        <input value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control my-2" placeholder="Your email" style={{width:"60%"}}/>

                        <label className='d-flex justify-content-start mt-3' style={{width:"60%"}}>Password</label>
                        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control my-2" placeholder="Your password" style={{width:"60%"}}/>
                        <div className='d-flex'>
                            <button onClick={button_login} className='btn mt-4 border-success btn-info mx-2'>Login</button>
                            <button onClick={()=>visibility("login")} className='btn mt-4 border-success btn-primary mx-2'>Sign up</button>
                        </div>
                    </div>
                </div> 

                {/* sign up */}
                <div className={'bg-primary '+visibility_signup} style={{height:"450px", width:"400px", borderRadius:"15px"}}>

                    <div className='text-center text-light mt-3'>
                        <h1>
                            Sign Up
                        </h1>
                    </div>
                    <hr />

                    <div className='d-flex flex-column justify-content-center align-items-center mt-3' style={{width:"100%"}}>
                        
                        <label className='d-flex justify-content-start' style={{width:"60%"}}>Username</label>
                        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control my-2" placeholder="Your name" style={{width:"60%"}}/>
                        
                        <label className='d-flex justify-content-start' style={{width:"60%"}}>Email</label>
                        <input value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control my-2" placeholder="Your email" style={{width:"60%"}}/>

                        <label className='d-flex justify-content-start' style={{width:"60%"}}>Password</label>
                        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control my-2" placeholder="Your password" style={{width:"60%"}}/>
                        
                        
                        <div className='d-flex'>
                            <button onClick={()=>visibility("signup")} className='btn mt-4 border-success btn-primary mx-2'>Login</button>
                            <button onClick={button_signup} className='btn mt-4 border-success btn-info mx-2'>Sign up</button>
                        </div>
                    </div>

                </div> 





            </div>

            



    )

}

export default Login