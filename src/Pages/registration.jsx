import  React, {useState} from "react"

import {useNavigate} from "react-router-dom"

function Registration(props){

    const navigate = useNavigate();
    
    const [weddingName, setWeddingName]=useState('');
    const [groom, setGroom]=useState('');
    const [bride, setBride]=useState('');
    const [location, setLocation]=useState('');
    const[date, setDate]= useState('');

    const handleSubmit= async(e)=>{
    e.preventDefault()
    const body={weddingName,groom,bride,location,date}
    console.log(body)

    /* try {
        const response= await fetch('http://localhost:3001/event/create',{
            method:"POST",
            headers:{token:localStorage.token},
            body:JSON.stringify(body)
        })

       
        console.log(response) */

        
    /* }
     catch (error) {
        console.log(error)
    } */
    }
    


    return(

        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Name the event</label>
                    <input type="text" onChange={(e)=>setWeddingName(e.target.value)} value={weddingName} placeholder="Joe and Jane Wedding" />
                <label htmlFor="">Groom</label>
                    <input type="text" onChange={(e)=>setGroom(e.target.value)} value={groom} />
                <label htmlFor="">Bride</label>
                    <input type="text" onChange={(e)=>setBride(e.target.value)}value={bride} />
                <label htmlFor="">Location</label>
                    <input type="text" onChange={(e)=>setLocation(e.target.value)}value={location} />
                <label htmlFor="">Date</label>
                    <input type="date" onChange={(e)=>setDate(e.target.value)} value={date} />


                 <button>Get Started</button>
            </form>
           
        </div>
    )
}
export default Registration