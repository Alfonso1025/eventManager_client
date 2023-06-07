import React, {useState} from "react"
import Navbar from "./Navbar"
import '../styles/checkin.css'
import { useNavigate } from 'react-router-dom'


function Login(props){
    const navigate = useNavigate()
    //props
    const setAuth=props.setAuth
    //manage state for login form
    const[userEmail, setUserEmail]=useState('')
    const[userPassword, setUserPassword]=useState('')

    const submitLoginForm= async(e)=>{
        e.preventDefault()
        const body={userEmail,userPassword}
        try{
            const response=await fetch('http://localhost:3001/users/login',{
               method:"POST",
               headers:{"Content-Type":"application/json"},
               body:JSON.stringify(body)

            })
            const parseResponse= await response.json()
            console.log(parseResponse)
            if(parseResponse.code === 200){
                console.log('logged in')
                localStorage.setItem("token", parseResponse.data)
                setAuth(true)
                navigate('/home')
            }
            
            
           
           
        }
        catch(err){
            console.log(err.message)
        }

    }

    
    return(
        <>
        <Navbar/>
        <div className="login-container">
            <form onSubmit={submitLoginForm}  className="form-login">
                <input type="email"
                  placeholder="Email"
                  value={userEmail}
                  onChange={e=>setUserEmail(e.target.value)}
                  className="input-login"
                  />
                  
                <input 
                type="password" 
                 placeholder="password"
                 value={userPassword}
                 onChange={e=>setUserPassword(e.target.value)}
                 className="input-login"
                 />
                <button className="button-login">Sign in</button>
            </form>
           
        </div>

        </>
    )
}
export default Login