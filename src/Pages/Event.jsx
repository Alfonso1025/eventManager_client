import React,{useState} from "react"
import Guesslist from "./Guesslist"

const Event= (props)=>{
    //recibe props
    const wedding=props.weddingName
    const groom=props.groom
    const bride=props.bride
    const location=props.location
    const date=props.date
    const count=props.count
    const eventId=props.eventId

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
// const handleCount= ()=>{
    
//     let counter=0
//     for(let i=0; i<listOfGuesst.length; i++){
//         if(listOfGuesst[i].isAttending===true) {
//             counter=counter+1
//             setCount(counter)
//             setIsAttending(true)
//         }
//     }

// }
    
return(
    <div>
        
        <h1>{wedding}!</h1>
        <h3>Congratulations</h3> <p>{bride} and {groom}</p>
            <h4>Location: {location}</h4>
            <h4>Date{date}</h4>
            <h5>{count} people are attending your event</h5>
            <button onClick={handleOpenGuessList}>Manage your guesslist</button>
            {isGuesslistOpen && <Guesslist eventId={eventId} groom={groom} bride={bride}/> }
    
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