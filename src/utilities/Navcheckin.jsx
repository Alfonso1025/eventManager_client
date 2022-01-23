import React,{useState} from 'react'
import '../styles/Navcheckin.css'
import {HiMenu} from 'react-icons/hi'
import {GrClose} from 'react-icons/gr'
const NavCheckin=(props)=>{


    //recibe props
    const setShowRsvp=props.setShowRsvp
    const setShowHome=props.setShowHome
    const setShowRegistry=props.setShowRegistry
    const setShowQuestions=props.setShowQuestions
    const setShowDetails=props.setShowDetails
    const setShowTravel=props.setShowTravel
    const setShowParty=props.setShowParty
    
    
    return(
        <nav className="navbar">
            
            <ul 
            className= "nav-links">
               <li onClick={()=>setShowHome(true)}>Home</li> 
               <li onClick={()=>setShowDetails(true)}>Deatils</li>
               <li onClick={()=>setShowRegistry(true)}>Registry</li>
               <li onClick={()=>setShowRsvp(true)}>RSVP</li>
               <li onClick={()=>setShowQuestions(true)}>Q+A</li>
               <li onClick={()=>setShowTravel(true)}>Travel</li>
               <li onClick={()=>setShowParty(true)}>Party</li>
               
            </ul>
            
        </nav>
    )
}
export default NavCheckin