import React, {useRef} from 'react'
const LoginGuest= (props)=>{
    //recibe props
    const setIsAuthenticated= props.setIsAuthenticated;
    const setGuestAuthenticated=props.setGuestAuthenticated;
    const listOfGuesst=props.listOfGuesst;
   
    //Point to the input value
    const input= useRef('')
    

    //login 
    const handleAuthentication=(e)=>{
        e.preventDefault()
       
        
         for(let i=0; i<listOfGuesst.length; i++){
            
            
            if(listOfGuesst[i].code===input.current.value){
                
                setGuestAuthenticated(listOfGuesst[i]);
                setIsAuthenticated(true) 
            }  
        }  
        

        }

    
    return(
    <div>
        <label htmlFor="">Please enter your code</label>
       
          <input ref={input} type="text"/>
          <button onClick={handleAuthentication} >Send</button>
        
     
     
    </div>
    
    )
 
}

export default LoginGuest