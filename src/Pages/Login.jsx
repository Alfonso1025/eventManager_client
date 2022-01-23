import React, {useState} from "react"


function Login(props){
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
            
            //convert the response to json format
            const parseResponse= await response.json()
            
            //the response is a jwt token whis is stored in the local storage
            localStorage.setItem("token", parseResponse.data)
            
            //since a token was provided the user is authorized
            setAuth(true)
        }
        catch(err){
            console.log(err.message)
        }

    }

    
    return(

        <div>
            <form onSubmit={submitLoginForm}>
                <input type="email"
                  placeholder="Email"
                  value={userEmail}
                  onChange={e=>setUserEmail(e.target.value)}
                  />
                  
                <input 
                type="password" 
                 placeholder="password"
                 value={userPassword}
                 onChange={e=>setUserPassword(e.target.value)}
                 />
                <button>Sign in</button>
            </form>
           
        </div>
    )
}
export default Login