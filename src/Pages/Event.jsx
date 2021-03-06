import React, {useState, useEffect} from 'react'
import Guesslist from "./Guesslist"

const Event= (props)=>{
    //recibe props
    const wedding=props.weddingName
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

    const updateEvent=async(e)=>{
        e.preventDefault()
        try {
            const body={updatedWedding,updatedGroom,updatedBride,updatedLocation,updatedDate}
            const response=await fetch(`http://localhost:3001/event/update/${eventId}`,{
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
        const deletedEvent=await fetch(`http://localhost:3001/event/delete/${eventId}`,
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


    //open component guesslist
    const[isGuesslistOpen, setisGueslistOpen]=useState(false)
    function handleOpenGuessList(e){
        e.preventDefault();
        setisGueslistOpen(!isGuesslistOpen)
    }

//count guessts with isAttending as true

//manage count state
const[count, setCount]=useState(0)

//helper function. Takes the array of guests that belong to an event
//and counts how many objects have isattending as true. 
const handleCount= (list)=>{
    
    let counter=0
     for(let i=0; i<list.length; i++){
         
         if(list[i].isattending===true) {
             counter=counter+1
                 
        }    
    }
    
    setCount(counter)
 }
 //request all guest that belong to event

const getGuests=async()=>{
    try {
      const response = await fetch(`http://localhost:3001/guestlist/${eventId}`)
      const jsonData= await response.json()
      const arrayGuest=await jsonData.data
      handleCount(arrayGuest)
      setListOfGuest(arrayGuest)
      console.log('this is count after function',count)

    } 
    catch (error) {
        console.log(error)
    }
}

//execute getGuest when the Event component mounts
useEffect(()=>{
    getGuests()
  },[]) 
  
//Upload image 

const uploadImage=async(e)=>{
e.preventDefault()
try {
 //get secure url from server
 
 //post image to s3 bucket
 
}
 catch (error){
   console.log(error) 
}
}

return(
    <div>
        
        <h1>{wedding}!</h1>
        <h3>Congratulations</h3> <p>{bride} and {groom}</p>
            <h4>Location: {location}</h4>
            <h4>Date{date}</h4>
            <h5>{count} people are attending your event</h5>
            
        <form>
            <input type="file" accept='image/*' />
            <button type='submit'>Upload</button>
        </form>

            <button onClick={handleOpenGuessList}>Manage your guesslist</button>
            {isGuesslistOpen && <Guesslist eventId={eventId} groom={groom} bride={bride} listOfGuest={listOfGuest}/> }
    
            <button onClick={handleOpenUpdate}>Edit event</button>
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

            <button onClick={deleteEvent}>Delete</button>
    </div>


)
}

export default Event