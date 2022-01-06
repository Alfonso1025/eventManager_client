import React, {useState} from 'react'


const LoginGuest= (props)=>{


//recibe props
    const setIsGuestVerified= props.setIsGuestVerified;
    const setGuest=props.setGuest;
    const listOfGuesst=props.listOfGuesst;
   
//manage state for code
    const[code, setCode]=useState('')
    

    //login function
    const handleAuthentication=async(e)=>{
        e.preventDefault()
        try {

            const response= await fetch(`http://localhost:3001/checkin/${code}`,{
                method:'GET'
            })
            const guest=await response.json()
            setGuest(guest)
            setIsGuestVerified(true)
            
        }
         catch (error) {
            console.log(error)
             }
       
        }

    
    return(

    
    <div>
        
        <form>
        <label htmlFor="">Please enter your code</label>
          <input type="text" value={code} onChange={(e)=>{setCode(e.target.value)}}/>
          <button onClick={handleAuthentication} >Send</button>
        </form>
         
    
    </div>
    
    )
 
}

export default LoginGuest