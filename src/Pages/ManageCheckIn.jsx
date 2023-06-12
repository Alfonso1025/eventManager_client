import React, {useState} from 'react';
import { useEffect } from 'react';
import Navcheckin from '../utilities/Navcheckin'

const ManageCheckIn= (props)=>{

const remote_server = process.env.REACT_APP_REMOTE_SERVER
//recibe props
     const listOfGuesst= props.listOfGuesst
     const setCount= props.setCount
     const count = props.count;
     const guest=props.guest
     
     

//manage the updated isAttending state
const isAttending=guest[0].isattending
console.log(isAttending)
const[newIsAttending, setNewIsAttending]=useState('')

//guest id
const guestId=guest[0].guestlist_id 

//query to update the guest isAttending by id
const updateIsAttending=async(e)=>{
    e.preventDefault()
    const body={isAttending:newIsAttending}
    try {
        const response= await fetch(`${remote_server}/checkin/isattending/${guestId}`,{
            method:'PUT',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(body)
        })
        const parseResponse=await response.json()
        if(parseResponse.data===true) setShowConfirm(true)
    }
     catch (error) {
        
    }
}
//show attendace confirmation message
const[showConfirm, setShowConfirm]=useState(false)

//bring event by wedding_id
//manage state for event info
const[groom, setGroom]=useState('')
const[bride,setBride]=useState('')
const[date,setDate]=useState('')
const[location,setlocation]=useState('')
const[descr,setDescr]=useState('')

//wedding id
const weddingId=guest[0].wedding_id
const getEvent=async()=>{
    try {
       const response=await fetch(`http://localhost:3001/checkin/getevent/${weddingId}`) 
       const event=await response.json()
       console.log(event)
       setGroom(event[0].groom_name)
       setBride(event[0].bride_name)
       //parse date
       const d=new Date(event[0].wedding_date)
       setDate(d.toDateString())
       setlocation(event[0].wedding_location)
       setDescr(event[0].descr)
    }
     catch (error) {
        console.log(error)
    }
    
}
useEffect(()=>{
    getEvent()
},[])

//nested components
//rsvp
const Rsvp=(props)=>{
    
    
        return(
            <div>
                  {!showConfirm ?

                  <form onSubmit={updateIsAttending}>
                    <p>{guest[0].guest_name}</p>
                    <label htmlFor="">I am attending</label>
                    <input type="checkbox" value={newIsAttending} onChange={(e)=>setNewIsAttending(true)}/>
                    <button>Confirm</button>
                   </form>
                   
                   :

                   <h1>Attendace confirmed</h1>
                   }
            </div>
      
           
    )

}
//home: contains the main picture
const Home= ()=>{
    return (
        <h1>Home is comming soon</h1>
    )
}
//Details: contains wedding description
const Details =()=>{
    return(
        <h1>Details comming soon</h1>

    )
}
//q+a
const Questions=()=>{
    return(
        <h1>Questions comming soon</h1>
    )
}
//travel
const Travel=()=>{
    return(
        <h1>travel comming soon</h1>
    )
}
//registry
const Registry=()=>{
    return(
        <h1>Registry comming soon</h1>
    )
}
//party
const Party=()=>{
    return(
        <h1>Party comming soon</h1>
    )
}
//state for nested components
const[showHome, setShowHome]=useState(true)
const [showRsvp,setShowRsvp]=useState(false)
const [showDetails,setShowDetails]=useState(false)
const [showRegistry,setShowRegistry]=useState(false)
const [showQuestions,setShowQuestions]=useState(false)
const [showParty,setShowParty]=useState(false)
const [showTravel,setShowTravel]=useState(false)

console.log('Rsvp is:',showRsvp)


    return(

        <div>
            <header >
                <div className='header-manage-checkin'>
                <h1>{bride} & {groom}</h1>
                 <h3>{date}.{location}</h3>
                <p>{guest[0].guest_name} share this special moment with us</p> 
                </div>
                
            </header>
            
            <Navcheckin
             groom={groom}
              bride={bride}
               setShowRsvp={setShowRsvp}
               setShowDetails={setShowDetails}
               setShowRegistry={setShowRegistry}
               setShowHome={setShowHome}
               />

           { showRsvp && <Rsvp/>}
           { showHome && <Home/>}
           {showRegistry && <Registry/>}
           {showDetails && <Details/>}
           {showQuestions&&<Questions/>}
           
            
        </div>
    
        
        
        
        
        
        )
 
}

export default ManageCheckIn