import '../styles/Navbar.css'

import { Link} from "react-router-dom"
const Navbar= ()=>{
    return(

        <div className='navbar-wrapper'>

          
          <Link to="/login">Login</Link>
          <Link to="/registeruser">Sign Up</Link>
          <Link to="/EventManager">EventManager</Link>
          <Link to="/home">home</Link>

     
          
      
      </div> 
    
    )
}
export default Navbar