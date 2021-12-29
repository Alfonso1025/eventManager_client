import React, {useState, useEffect} from "react"
import Event from './Event'

function EventManager(props){

    //recibe props
    const count= props.count
    //manage state for event
    const [eventArray, setEventArray]=useState([])
    
    
    
    //get events from db
    const getEvent=async()=>{
        try {
            const response= await fetch('http://localhost:3001/event/list',{
                method:'GET',
                headers:{token:localStorage.token}
            })
            const parseResponse= await response.json()
            
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

    return(


        <div>
            { eventArray.map(element=>
                ( 
                <Event wedding={element.wedding_name}
                 groom={element.groom_name} 
                 bride={element.bride_name} 
                 location={element.wedding_location}
                  date={element.wedding_date}
                  eventId={element.wedding_id} 
                  count={count} />
                )
            )} 
        
            
        
        </div>
        
    )
}
export default EventManager