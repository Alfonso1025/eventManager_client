import React, {useState, useEffect} from 'react'
import useCreateCode from '../CustomHooks/useCreateCode';
import Navbar from './Navbar';
import '../styles/GuestList.css'


const Guesslist=(props)=>{

//global statebbbbbmlm
const groom = localStorage.getItem('locStorGroom');
const bride = localStorage.getItem('locStorBride');
const eventId = localStorage.getItem('locStorEventId');
  
  //recibe props
  

//local state
   const [guestName, setGuestName]=useState('');
   const [guestLastName, setGuestLastName]=useState('');
   const [guestEmail, setGuesstEmail]= useState('')
   const[count, setCount]=useState(0)
   const[listOfGuest, setListOfGuest] = useState([])
   const[isUpdateOpen, setIsUpdateOpen]=useState(false)
   const [listStatus, setListStatus] = useState('')

//manage state from update form
  const[guestIdToUpdate, setGuestIdToUpdate] = useState('')
  const[updatedGuestName,setUpdatedGuestName]=useState('')
  const[updatedGuestLastName,setUpdatedGuestLastName]=useState('')
  const[updatedGuestEmail,setUpdatedGuestEmail]=useState('')
  const[hasUpdateFailed, setHasUpdateFailed] = useState(false)
  
  
//function definitions

const remote_server = process.env.REACT_APP_REMOTE_SERVER
const code=useCreateCode(groom, bride)

const handleCount= (list)=>{
    
  let counter=0
   for(let i=0; i<list.length; i++){
       
       if(list[i].isattending===true) {
           counter=counter+1
               
      }    
  }
  
  setCount(counter)
} 

const getGuests=async()=>{
  try {
    if(eventId !== undefined){
      console.log('eventid: ', eventId)
      const response = await fetch(`${remote_server}/guestlist/${eventId}`)
      const jsonData= await response.json()
      console.log('json data',jsonData)
      if(jsonData.code ===! 200) return setListStatus('ERROR')
      handleCount(jsonData.data)
      setListOfGuest(jsonData.data)
    } 

  } 
  catch (error) {
      console.log(error)
      setListStatus('ERROR')
  }
} 

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

    const response= await fetch(`${remote_server}/guestlist/${eventId}`,{
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
const openUpdate=(id)=>{
  setIsUpdateOpen(!isUpdateOpen)
  setGuestIdToUpdate(id)

}


const updateGuest=async(e)=>{
  
  e.preventDefault()
  if(guestIdToUpdate === '') return
  try {
    const body={updatedGuestName,setUpdatedGuestLastName,setUpdatedGuestEmail}
    const response=await fetch(`${remote_server}/guestlist/${guestIdToUpdate}`,{
      method:"PUT",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(body)
    })
    const jsonData = await response.json()
    if(jsonData.data !== 200){
        setHasUpdateFailed(true)
        setTimeout(()=>{ window.location.href='home'}, 3000)
    }
    window.location.href='home';  
  } 
  catch (error) {
    console.log(error)
  } 
}
//delete
const deleteGuesst= async(guestId)=>{
   try {
     const deletedGuest=await fetch(`${remote_server}/guestlist/${guestId}`,{
       method:'DELETE'
     })
     window.location.href='home'; 
   }
    catch (error) {
     
   } 
}
 

  
useEffect(()=>{
  getGuests()
},[]) 
  
    return(
    <>
    <Navbar/>
      <div className="guest-container">
      <div className="form-container">
        <h2>Add a New Guest</h2>
        <form onSubmit={addGuest}>
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            onChange={(e) => setGuestName(e.target.value)}
            value={guestName}
          />
    
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            onChange={(e) => setGuestLastName(e.target.value)}
            value={guestLastName}
          />
    
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            onChange={(e) => setGuesstEmail(e.target.value)}
            value={guestEmail}
          />
    
          <button type="submit">Add</button>
        </form>
      </div>
     {
      isUpdateOpen && !hasUpdateFailed &&
      
        <div className='update-guest-container'>
          <h1>Edit guest information</h1>
        
          <form>
            <label>Name</label>
            <input type="text"value={updatedGuestName} onChange={(e)=>setUpdatedGuestName(e.target.value)} />
            <label>Last Name</label>
            <input type="text"value={updatedGuestLastName} onChange={(e)=>setUpdatedGuestLastName(e.target.value)} />
            <label>Email</label>
            <input type="email"value={updatedGuestEmail} onChange={(e)=>setUpdatedGuestEmail(e.target.value)} />
            <div className="button-container">
              <button onClick={updateGuest}>Save Changes</button>
              <button onClick={() => setIsUpdateOpen(false)}>Cancel</button>
            </div>
          </form>
        </div>
     }
     {isUpdateOpen && hasUpdateFailed &&
        <div><p>We could not update this guest try later</p></div>
     }

     {!isUpdateOpen &&
      
      <div className="guest-list-container">
        {listOfGuest.length !== 0 && (
          
          <ul>
            {listOfGuest.map((element) => (
              <li key={element.guestlist_id}>
                {element.isattending === true && <p>Attending</p>}
                <p>{element.guest_name}</p>
                <p> {element.code}</p>
               
               
                <button onClick={() => deleteGuesst(element.guestlist_id)}>Eliminate</button>
                <button onClick={()=>openUpdate(element.guestlist_id)}>Edit Guest</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    }
    </div>
           
    </>

    )

}
export default Guesslist