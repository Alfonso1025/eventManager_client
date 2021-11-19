import React, {useState, useEffect} from 'react'
import useCreateCode from '../CustomHooks/useCreateCode';


const Guesslist=(props)=>{
   const [guestName, setGuestName]=useState('');
   const [guestLastName, setGuestLastName]=useState('');
   const [guestEmail, setGuesstEmail]= useState('')
   
   
   //recibe guesslist and setGuesslist
   const listOfGuesst=props.listOfGuesst;
   const setListOfGuesst=props.setListOfGuesst

   

   //recibe eventInfo props
   const groom=props.eventInfo.groom
   const bride=props.eventInfo.bride
  

   const code=useCreateCode(groom, bride)
   
  //Post 
const addGuest= async (ev)=>{
  ev.preventDefault()
  const guesst={
    guestName:guestName,
    guestLastname:guestLastName, 
    guestEmail:guestEmail,
    code:code,
    isAttending:false
}

  try {

    const response= await fetch('http://localhost:5000/createguest',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(guesst)
        })
      

    setGuestName('');
    setGuestLastName('');
    setGuesstEmail('');

  } catch (error) {
    console.log(error)
  }
    }
//get
const getGuests= async ()=>{
  try{
      const response = await fetch("http://localhost:5000/guests")
      const jsonData= await response.json()
      console.log(jsonData)
      setListOfGuesst(jsonData);
      
  }catch(e){
      console.log(e)
  }
}
useEffect(()=>{
  getGuests()
},[])
//delete
const deleteGuesst= (guesstId)=>{
    setListOfGuesst(listOfGuesst.filter(element=>element.id!==guesstId))
}
 

  
   
  
    return(
    
                    <div>
                        <label htmlFor="">First Name</label>
                          <input type="text" onChange={(e)=>setGuestName(e.target.value)} value={guestName} />
                        <label htmlFor="">Last Name</label>
                          <input type="text" onChange={(e)=>setGuestLastName(e.target.value)} value={guestLastName} />
                        <label htmlFor="">Email</label>
                          <input type="text" onChange={(e)=>setGuesstEmail(e.target.value)} value={guestEmail} />
                        
                        <button onClick={addGuest}>
                            add
                        </button>

                         <ul>
                            {listOfGuesst.map(element=>{
            
                                 return   <li>
                                            {element.guestname}
                                            {element.code}
                                            

                                            <button onClick={()=>deleteGuesst(element.id)}>Eliminate</button>
                                            
                                          </li>
                            })}
                            
                        </ul>  
                    </div>

    )

}
export default Guesslist