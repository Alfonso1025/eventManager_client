import React, {useState, useEffect} from "react"



function Home(props){
    //recibe props
    const setAuth= props.setAuth
    //manage state for user
    const[user, setUser]=useState('') //{user_name:theo}
    

    
    const getUserFromDb=async()=>{
        try{
            const response= await fetch('http://localhost:3001/dashboard',{
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
        <div>This is the Home Page
            <p>Welcome {user}</p>
            
            <button 
            onClick={(e)=>{
                e.preventDefault()
                localStorage.removeItem("token")
                setAuth(false)
            } }
            >logout
            </button>

            <button
                type="button"
                onClick={(e) => {
                e.preventDefault();
                window.location.href='Registration';
                    }}> 
               create event
            </button>
            <button
                type="button"
                onClick={(e) => {
                e.preventDefault();
                window.location.href='EventManager';}
                }> 
                My events
            </button>
        
        </div>
    )
}
export default Home