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
    
    const handleShowComponent = (componentName) => {
        setShowHome(false);
        setShowRsvp(false);
        setShowRegistry(false);
        setShowDetails(false);
        setShowQuestions(false);
    
        if (componentName === 'home') setShowHome(true);
        else if (componentName === 'rsvp') setShowRsvp(true);
        else if (componentName === 'registry') setShowRegistry(true);
        else if (componentName === 'details') setShowDetails(true);
        else if (componentName === 'questions') setShowQuestions(true);
        else if (componentName === 'travel') setShowTravel(true);
        else if (componentName === 'party') setShowParty(true);
      };
    return(
        <nav className="navbar">
            
            <ul 
            className= "nav-links">
               <li onClick={() => handleShowComponent('home')}>Home</li> 
               <li onClick={() => handleShowComponent('details')}>Deatils</li>
               <li onClick={() => handleShowComponent('registry')}>Registry</li>
               <li onClick={() => handleShowComponent('rsvp')}>RSVP</li>
               <li onClick={() => handleShowComponent('questions')}>Q+A</li>
               <li onClick={() => handleShowComponent('travel')}>Travel</li>
               <li onClick={() => handleShowComponent('party')}>Party</li>
               
            </ul>
            
        </nav>
    )
}
export default NavCheckin