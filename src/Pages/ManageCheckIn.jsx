import React, {useState} from 'react';
const ManageCheckIn= (props)=>{

    //recibe props
    const listOfGuesst= props.listOfGuesst
    const setCount= props.setCount
    const guesstAuthenticated=props.guesstAuthenticated
    const count = props.count;

    //State manages if the guesst is attending
    const [isAttending, setIsAttending]=useState(false)

    //count guessts with isAttending as true onclick
const handleCount= ()=>{
    
    let counter=0
    for(let i=0; i<listOfGuesst.length; i++){
        if(listOfGuesst[i].isAttending===true) {
            counter=counter+1
            setCount(counter)
            setIsAttending(true)
        }
    }

}

const handleOnChange= ()=>{
    guesstAuthenticated.isAttending=!guesstAuthenticated.isAttending
    console.log('guest has checked the box')
}

console.log(guesstAuthenticated)
    return(
        
        <div>
        <label>I am attending</label>
        <input onChange={handleOnChange} type="checkbox" />
        <button onClick={handleCount}>Send</button>
        <div>The amount of people attending is {count}</div>
        
        
        <div>{isAttending &&
        
        <h2>Thanks for checking in</h2>}
        </div>
        
        
        </div>
        )
 
}

export default ManageCheckIn