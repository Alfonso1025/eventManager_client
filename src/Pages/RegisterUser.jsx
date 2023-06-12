import React, {Fragment, useState} from 'react'
import Navbar from './Navbar'
import '../styles/checkin.css'

const RegisterUser= (props)=>{
    
    const remote_server = process.env.REACT_APP_REMOTE_SERVER
    //recibe props
    const setAuth=props.setAuth

    ///manage state for registration form
    const [userName, setName]=useState('')
    const [userEmail, setEmail]=useState('')
    const [userPassword, setPassword]=useState('')

    //function that submit the user data to the db
    const submitForm= async(e)=>{
        e.preventDefault()
        try {
            const body= {userName, userEmail, userPassword}
            const response= await fetch(`${remote_server}/users/registeruser`,
            {
                method:'POST',
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(body)
            })

            const parseResponse= await response.json()
            console.log(parseResponse)
            if(parseResponse.code === 200){
                if(parseResponse.data)
                localStorage.setItem("token", parseResponse.data)
                setAuth(true)
            }
            
        } 
        catch (error) {
            console.log(error.message)
        }
    }
    return(
        <>
            <Navbar/>
            <div className='login-container'>
            <form onSubmit={submitForm} className='form-login'>
            <input type="text"
                placeholder="name"
                value={userName}
                onChange={(e)=>setName(e.target.value)}
                className='input-login'
             />
            <input type="email"
                placeholder="email"
                value={userEmail}
                onChange={(e)=>setEmail(e.target.value)}
                className='input-login'
             />
              <input type="password"
                placeholder="password"
                value={userPassword}
                onChange={(e)=>setPassword(e.target.value)}
                className='input-login'
             />
             <input type="submit" value="sign up" className='button-login'/>
            </form>

            </div>
        </>
    )
}

export default RegisterUser