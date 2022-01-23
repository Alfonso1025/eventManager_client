import React, {useState} from 'react'
import '../styles/checkin.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import  {Button, Form}  from 'react-bootstrap';


const LoginGuest= (props)=>{


//recibe props
    const setIsGuestVerified= props.setIsGuestVerified;
    const setGuest=props.setGuest;
    const listOfGuesst=props.listOfGuesst;
   
//manage state for code
    const[code, setCode]=useState('')
    

    //login function
    const handleAuthentication=async(e)=>{
        e.preventDefault()
        try {

            const response= await fetch(`http://localhost:3001/checkin/${code}`,{
                method:'GET'
            })
            const guest=await response.json()
            if(guest.length===0) return false
            setGuest(guest)
            setIsGuestVerified(true)
            
        }
         catch (error) {
            console.log(error)
             }
       
        }

    
    return(

    <>
    <div className='header-login'><h1>RSVP</h1></div>
    
    <div className='login-container'>
        
         <form className='form-login'>
          <input className='input-login' placeholder='YOUR GUEST CODE' type="text" value={code} onChange={(e)=>{setCode(e.target.value)}}/>
          <button className='button-login'  onClick={handleAuthentication} >FIND MY INVITATION</button>
        </form> 
         
        
    </div>

    </>
    )
 
}

export default LoginGuest