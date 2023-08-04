import React, {useState} from 'react'
import '../styles/checkin.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import  {Button, Form}  from 'react-bootstrap';
import Header from '../utilities/Header';
import Navbar from './Navbar';


const LoginGuest= (props)=>{

const remote_server = process.env.REACT_APP_REMOTE_SERVER
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

            const response= await fetch(`${remote_server}/checkin/${code}`,{
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
    <Navbar/>
    
    <div className='login-container'>
       
        <h1>RSVP</h1>
       
         <form className='form-login'>
          <input className='input-login' placeholder='YOUR GUEST CODE' type="text" value={code} onChange={(e)=>{setCode(e.target.value)}}/>
          <button className='button-login'  onClick={handleAuthentication} >FIND MY INVITATION</button>
        </form> 
         
        
    </div>

    </>
    )
 
}

export default LoginGuest