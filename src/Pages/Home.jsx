import React, {useState, useEffect} from "react"
import Navbar from "./Navbar"
import '../styles/Home.css'
import Header from "../utilities/Header"



function Home(props){

     const remote_server = process.env.REACT_APP_REMOTE_SERVER
    //recibe props
    const setAuth= props.setAuth
    //manage state for user
    const[user, setUser]=useState('') //{user_name:theo}
    

    
    const getUserFromDb=async()=>{
        try{
            const response= await fetch(`${remote_server}/dashboard`,{
            method:'GET',
            headers:{token:localStorage.token}
       })
            const parseResponse= await response.json()
            
            const {user_name}=parseResponse.data
            setUser(user_name)
        }
        catch(err){
            console.error(err.message)
        }    
    }

    useEffect(()=>{
        getUserFromDb()
    },[])



    return(

<>
<Navbar/>
<div className="component-container">
  
  <Header/>
  <p>Welcome {user}</p>

  <div className="button-container">
   

    <button
      className="create-event-button"
      type="button"
      onClick={(e) => {
        e.preventDefault();
        window.location.href = "Registration";
      }}
    >
      Create Event
    </button>

    <button
      className="my-events-button"
      type="button"
      onClick={(e) => {
        e.preventDefault();
        window.location.href = "EventManager";
      }}
    >
      My Events
    </button>
    <button
      className="logout-button"
      onClick={(e) => {
        e.preventDefault();
        localStorage.removeItem("token");
        setAuth(false);
      }}
    >
      Logout
    </button>
  </div>
</div>
</>
    )
}
export default Home