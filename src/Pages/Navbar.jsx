import '../styles/Navbar.css'

import { Link} from "react-router-dom"
const Navbar= ()=>{
  const login = "/login"
    return(

        <div className='navbar-wrapper'>

          
          <Link to={login}>Login</Link>
          <Link to="/registeruser">Sign Up</Link>
          <Link to="/EventManager">EventManager</Link>
          <Link to="/checkin">RSVP</Link>

     
          
      
      </div> 
    
    )
}
export default Navbar