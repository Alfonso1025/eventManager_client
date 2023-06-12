import React, {useState, useEffect, useContext} from 'react'
import Guesslist from "./Guesslist"
import { EventContext } from '../Context/EventContext'
import { useNavigate } from 'react-router-dom'
import '../styles/Event.css'

const Event= (props)=>{

    const remote_server = process.env.REACT_APP_REMOTE_SERVER
    const navigate = useNavigate()
    //recibe props
    const wedding=props.wedding
    const groom=props.groom
    const bride=props.bride
    const location=props.location
    const date=props.date
    const eventId=props.eventId

    //manage list of guest state. This array of guest is passed down to 
    //guestlist component as props
    const [listOfGuest, setListOfGuest]=useState([])

    //update event
    const[updatedWedding,setUpdatedWedding]=useState(wedding)
    const[updatedGroom,setUpdatedGroom]=useState(groom)
    const[updatedBride,setUpdatedBride]=useState(bride)
    const[updatedLocation,setUpdatedLocation]=useState(location)
    const[updatedDate,setUpdatedDate]=useState(date)
   
    

   //function definitions

    const updateEvent=async(e)=>{
        e.preventDefault()
        try {
            const body={updatedWedding,updatedGroom,updatedBride,updatedLocation,updatedDate}
            const response=await fetch(`${remote_server}/event/update/${eventId}`,{
                method:"PUT",
            headers:{
                token:localStorage.token,
                "Content-Type":"application/json"
            },
            body:JSON.stringify(body)
            
            })

            console.log('hello')
             
        }
         catch (error) {
            console.log(error)
        }
    }

    const[isUpdateOpen,setIsUpdateOpen]=useState(false)
    const handleOpenUpdate=()=>{
        setIsUpdateOpen(!isUpdateOpen)
    }

    //Delete event

    const deleteEvent=async(e)=>{
        e.preventDefault()
        try {
        const deletedEvent=await fetch(`${remote_server}/event/delete/${eventId}`,
        { 
            method:"DELETE",
            headers:{token:localStorage.token}
        }) 

        window.location.href='home';    
        } 
        catch (error) {
            console.log(error)
        }
    }

//open guestlist

    function handleOpenGuessList(e){
         console.log('from event eventid: ', eventId)
        e.preventDefault();
        localStorage.setItem('locStorGroom', groom);
        localStorage.setItem('locStorBride', bride);
        localStorage.setItem('locStorEventId', eventId);
        navigate('/guestlist')

       
    }


return(
    <div className='event-container'>
        
        
        <h3>Congratulations!</h3> <p>{bride} and {groom}</p>
            <h4>Location: {location}</h4>
            <h4>Date{date}</h4>
           
        
        <div className='buttons-flex-container'>
            
            <button onClick={handleOpenGuessList} className='manage-guestlist-button'>
                Manage your guesslist
            </button>
           
            <button onClick={handleOpenUpdate} className='edit-event-button'>
                Edit event
            </button>
            {
                isUpdateOpen && 
                <form onSubmit={updateEvent}>
                    <label htmlFor="">Name the event</label>
                    <input type="text" onChange={(e)=>setUpdatedWedding(e.target.value)} value={updatedWedding} />
                <label htmlFor="">Groom</label>
                    <input type="text" onChange={(e)=>setUpdatedGroom(e.target.value)} value={updatedGroom} />
                <label htmlFor="">Bride</label>
                    <input type="text" onChange={(e)=>setUpdatedBride(e.target.value)}value={updatedBride} />
                <label htmlFor="">Location</label>
                    <input type="text" onChange={(e)=>setUpdatedLocation(e.target.value)}value={updatedLocation} />
                <label htmlFor="">Date</label>
                    <input type="date" onChange={(e)=>setUpdatedDate(e.target.value)} value={updatedDate} />

                <button >Edit</button>

                </form>
            }

            <button onClick={deleteEvent} className='delete-event-button'>Delete</button>
        </div>
           
    </div>


)
}

export default Event