import React, {useState, useEffect, useContext} from "react"
import Navbar from "./Navbar"
import Event from './Event'
import '../styles/EventManager.css'
import { useNavigate } from 'react-router-dom'
import { EventContext } from "../Context/EventContext"

function EventManager(props){

    const remote_server = process.env.REACT_APP_REMOTE_SERVER
    const navigate = useNavigate()
    
    //manage state for event
    const [eventArray, setEventArray]=useState([])
    const [status, setStatus] = useState('')
    
    
    //get events from db
    const getEvent=async()=>{
        try {
            const response= await fetch(`${remote_server}/event/list`,{
                method:'GET',
                headers:{token:localStorage.token}
            })
            const parseResponse= await response.json()
            console.log(parseResponse)
            if(parseResponse.code ===! 200) return setStatus('ERROR')
            setEventArray(parseResponse.data)

        }
         catch (error) {
            console.log(error)
        }
    }
    console.log(eventArray)
    //the events are display once, when the page loads
    useEffect(()=>{
        getEvent()
    },[])
    if(status === 'ERROR'){
        return (
            <div>
                <p>There was an error</p>
            </div>
        )
    }
    if(eventArray.length < 1){
        return(
            <>
              <Navbar/>
              <div className="no-events-container">
                <p>You have no events yet</p>
                <button onClick={()=>navigate('/Registration')} >Register an event</button>
               </div>
            </>
            
        )
    }
    return(


        <div>
            <Navbar/>
            { eventArray.map(element=>
                ( 
                <Event wedding={element.wedding_name}
                 groom={element.groom_name} 
                 bride={element.bride_name} 
                 location={element.wedding_location}
                  date={element.wedding_date}
                  eventId={element.wedding_id} 
                 />
                )
            )} 
        
            
        
        </div>
        
    )
}
export default EventManager