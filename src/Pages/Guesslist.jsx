import React, {useState, useEffect} from 'react'
import useCreateCode from '../CustomHooks/useCreateCode';


const Guesslist=(props)=>{

//manage input state
   const [guestName, setGuestName]=useState('');
   const [guestLastName, setGuestLastName]=useState('');
   const [guestEmail, setGuesstEmail]= useState('')

//manage state of array of guests
const[arrayGuest,setArrayGuest]=useState([])

   
   
//recibe props
   const listOfGuest=props.listOfGuest;
   const setListOfGuesst=props.setListOfGuesst
   const groom=props.groom
   const bride=props.bride
   const eventId=props.eventId
  
console.log(listOfGuest)
   const code=useCreateCode(groom, bride)
   
  //Post 
const addGuest= async (ev)=>{
  ev.preventDefault()
  const guesst={
    guestName:guestName,
    guestLastName:guestLastName, 
    guestEmail:guestEmail,
    code:code,
    isAttending:false
}

  try {

    const response= await fetch(`http://localhost:3001/guestlist/${eventId}`,{
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
/* const getGuests= async ()=>{
  try{
      const response = await fetch(`http://localhost:3001/guestlist/${eventId}`)
      const jsonData= await response.json()
      
      setArrayGuest(jsonData.data);
      console.log('this is the guestlist from get',jsonData.data)
      
      
  }
  catch(e){
      console.log(e)
  }
}
 useEffect(()=>{
  getGuests()
},[])  */

//update guest

//manage state from update form
const[updatedGuestName,setUpdatedGuestName]=useState(guestName)
const[updatedGuestLastName,setUpdatedGuestLastName]=useState(guestLastName)
const[updatedGuestEmail,setUpdatedGuestEmail]=useState(guestEmail)
//manage open update form
const[isUpdateOpen, setIsUpdateOpen]=useState(false)
const openUpdate=()=>{
  setIsUpdateOpen(!isUpdateOpen)
}


const updateGuest=async(e,guestId)=>{
  
  e.preventDefault()
  try {
    const body={updatedGuestName,setUpdatedGuestLastName,setUpdatedGuestEmail}
    const response=await fetch(`http://localhost:3001/guestlist/${guestId}`,{
      method:"PUT",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(body)
    })
    //window.location.href='home';  
  } 
  catch (error) {
    console.log(error)
  } 
}
//delete
const deleteGuesst= async(guestId)=>{
   try {
     const deletedGuest=await fetch(`http://localhost:3001/guestlist/${guestId}`,{
       method:'DELETE'
     })
     window.location.href='home'; 
   }
    catch (error) {
     
   } 
}
 

  
   
  
    return(
    
            <div>
              <form onSubmit={addGuest}>
              <label htmlFor="">First Name</label>
                          <input type="text" onChange={(e)=>setGuestName(e.target.value)} value={guestName} />
                        <label htmlFor="">Last Name</label>
                          <input type="text" onChange={(e)=>setGuestLastName(e.target.value)} value={guestLastName} />
                        <label htmlFor="">Email</label>
                          <input type="text" onChange={(e)=>setGuesstEmail(e.target.value)} value={guestEmail} />
                        
                        <button>add</button>


             </form>
             {listOfGuest.length!==0 &&
                <ul> 
                {listOfGuest.map(element=>{
            
                  return   <li>
                            {element.isattending===true && <p>Attending</p> }
                             {element.guest_name}
                             {element.code}
                              <button onClick={()=>deleteGuesst(element.guestlist_id)}>Eliminate</button>
                              <button onClick={openUpdate}>Edit Guest</button>

                                   {isUpdateOpen &&

                                    <form onSubmit={()=>updateGuest(element.guestlist_id)}>
                                      <label>Name</label>
                                      <input type="text"value={updatedGuestName} onChange={(e)=>setUpdatedGuestName(e.target.value)} />
                                      <label>Last Name</label>
                                      <input type="text"value={updatedGuestLastName} onChange={(e)=>setUpdatedGuestLastName(e.target.value)} />
                                      <label>Email</label>
                                      <input type="email"value={updatedGuestEmail} onChange={(e)=>setUpdatedGuestEmail(e.target.value)} />
                                      <button>Edit</button>
                                    </form>
                                   }         
                            </li>
                            })}
                            
                        </ul>
             
             }           

             
                    </div>

    )

}
export default Guesslist