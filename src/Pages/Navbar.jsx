import '../styles/Navbar.css'

import { Link} from "react-router-dom"
const Navbar= ()=>{
    return(

        <div className='navbar-wrapper'>

          <ul className='main-navbar'>
          <Link to="/login">Login</Link>
          <Link to="/registeruser">Sign Up</Link>
          <Link to="/EventManager">EventManager</Link>
          <Link to="/home">home</Link>

     
          </ul>
      
      </div> 
    
    )
}
export default Navbar