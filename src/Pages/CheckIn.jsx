import React, {useState} from 'react';
import ManageCheckIn from './ManageCheckIn';
import LoginGuest from './LoginGuest';


const CheckIn= (props)=>{
//recibe props
const setCount= props.setCount;
const count= props.count
const listOfGuesst=props.listOfGuesst;




//Guesst Authentication
const [isGuestVerified, setIsGuestVerified] =useState(false)

//State that manages the guest-object that has been authenticated
const [guest, setGuest]=useState({})


return(
     
        
<div>
  
  
    {!isGuestVerified
    ?
      <LoginGuest setGuest={setGuest} setIsGuestVerified={setIsGuestVerified} listOfGuesst={listOfGuesst}/>
    : 
      <ManageCheckIn listOfGuesst={listOfGuesst} count={count} setCount={setCount} guest={guest}/>
    
    }

</div>

        
         
        
    )

}

export default CheckIn