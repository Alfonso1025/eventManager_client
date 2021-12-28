import React, {Fragment, useState} from 'react'

const RegisterUser= (props)=>{

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
            const response= await fetch('http://localhost:3001/users/registeruser',
            {
                method:'POST',
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(body)
            })

            const parseResponse= await response.json()
            localStorage.setItem("token", parseResponse.token)
            setAuth(true)
        } 
        catch (error) {
            console.log(error.message)
        }
    }
    return(
        <Fragment>
            <h1>Register</h1>

            <form onSubmit={submitForm}>
            <input type="text"
                placeholder="name"
                value={userName}
                onChange={(e)=>setName(e.target.value)}
             />
            <input type="email"
                placeholder="email"
                value={userEmail}
                onChange={(e)=>setEmail(e.target.value)}
             />
              <input type="password"
                placeholder="password"
                value={userPassword}
                onChange={(e)=>setPassword(e.target.value)}
             />
             <input type="submit" value="sign up"/>
            </form>
        </Fragment>
    )
}

export default RegisterUser