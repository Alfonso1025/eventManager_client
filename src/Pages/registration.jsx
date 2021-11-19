import  React, {useState} from "react"

import {useHistory} from "react-router-dom"

function Registration(props){
    let history=useHistory()
    const [weddingName, setWeddingName]=useState('');
    const [groom, setGroom]=useState('');
    const [bride, setBride]=useState('');
    const [location, setLocation]=useState('');
    const[date, setDate]= useState('');

    const handleSubmit= (e)=>{

        e.preventDefault()
       props.setEventInfo({
           weddingName:weddingName,
           groom:groom,
           bride:bride,
           location:location,
           date:date

       })
       history.push('/EventManager')

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