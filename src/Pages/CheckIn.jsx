import React, {useState} from 'react';
import ManageCheckIn from './ManageCheckIn';
import LoginGuest from './LoginGuest';


const CheckIn= (props)=>{
//recibe props
const setCount= props.setCount;
const count= props.count
const listOfGuesst=props.listOfGuesst;




//Guesst Authentication
const [isAuthenticated, setIsAuthenticated] =useState(false)

//State that manages the guest-object that has been authenticated
const [guesstAuthenticated, setGuestAuthenticated]=useState({})


return(
     
        
<div>
  {!isAuthenticated ? <LoginGuest setGuestAuthenticated={setGuestAuthenticated} setIsAuthenticated={setIsAuthenticated} listOfGuesst={listOfGuesst}/>: <ManageCheckIn listOfGuesst={listOfGuesst} count={count} setCount={setCount} guesstAuthenticated={guesstAuthenticated}/>}
</div>

        
         
        
    )

}

export default CheckIn