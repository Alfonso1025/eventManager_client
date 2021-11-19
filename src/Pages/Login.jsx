import React from "react"
import {useHistory} from "react-router-dom"

function Login(){
    let history=useHistory()
    return(

        <div>
            <form action="">
                <input type="email"  placeholder="Email"/>
                <input type="password"  placeholder="password"/>
                <button onClick={()=>history.push('/gueslist')}>Go to Projects</button>
            </form>
           
        </div>
    )
}
export default Login