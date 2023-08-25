import Navbar from './Navbar'
import '../styles/Welcolme.css'
import Logo from '../styles/media/eveman1.png'

const Welcolme = ()=>{
    
    return(
<>
<Navbar/>
<div className="main-wrapper">
<div className='section1'>
    
    <div className='logo-container'>
            <img src={Logo} alt="" className='logo'/> 
     </div>
    <div>  
        <h1>Dear user</h1>
        <h2>Welcome to JoyHub a web app by</h2>
        <h3>Alfonso SoftTech</h3>
    </div>
    
</div>

<div className='section2'>
    <h3 className='text'>Planning your wedding has never been easier. JoyHub allows you to create your weeding event and manage 
        your guest-list. Your guests can  RSVP and see the details of their
        invitations. 
    </h3>
</div>

<div className='section3'>
    <div className='section3-text'>
    

    <h6 className='text'> 
        JoyHub was designed for those who, like me, prefer rather simple
        interfaces that are eassy to use. It does not have advetising left and right
        and goes straight to the point. So you dont have to break your head around how
        to use the damn app. 
        Wether you decide to use JoyHub to plan your or go with the competence, I sincerely
        wish you a happy wedding and well to your family!
         
        
    </h6>
    
    <p>Regards,</p>
    <p>Alfonso</p>
    </div>
    
    <div className='section3-image'></div>
</div>

</div>
</>

    )
}

export default Welcolme