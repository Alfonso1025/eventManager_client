import React, {useState} from "react"
import Guesslist from "./Guesslist"

function EventManager(props){
    //recibe guesslist and setGuesslist
    const listOfGuesst= props.listOfGuesst;
    const setListOfGuesst=props.setListOfGuesst;
    const count= props.count
    
    //open component guesslist
    const[isGuesslistOpen, setisGueslistOpen]=useState(false)
    function handleOpenGuessList(e){
        e.preventDefault();
        setisGueslistOpen(!isGuesslistOpen)

    }
    return(
        <div>
            <h1>{props.eventInfo.weddingName}!</h1>
            <h3>Congratulations</h3> <p>{props.eventInfo.bride} and {props.eventInfo.groom}</p>
            <h4>Location: {props.eventInfo.location}</h4>
            <h4>Date{props.eventInfo.date}</h4>
            <h5>{count} people are attending your event</h5>
            <button onClick={handleOpenGuessList}>Manage your guesslist</button>
            {isGuesslistOpen && <Guesslist listOfGuesst={listOfGuesst} setListOfGuesst={setListOfGuesst} eventInfo={props.eventInfo}/> }
        </div>
        
    )
}
export default EventManager