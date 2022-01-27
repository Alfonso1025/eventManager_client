import Navbar from './Navbar'
import '../styles/Welcolme.css'

const Welcolme = ()=>{
    
    return(
<>

<Navbar/>
<div className="main-wrapper">
<div className='section1'>
    <h1>Dear user</h1>
    <h2>Welcome to Event Manager a web app by</h2>
    <h3>Alfonso Ramirez</h3>
</div>

<div className='section2'>
    <h3 className='text'>Event Manager allows you to create your weeding event and manage 
        your guest-list. Your guestS can  RSVP and see the details of their
        invitations. 
    </h3>
</div>

<div className='section3'>
    <div className='section3-text'>
    <h4>Note from the developer</h4>
    <h5>To my dear potential users:</h5>
    <h6 className='text'>I created this web application for my own wedding as a mean to
        express my devotion to my upcomming marriage in the best way I can: with
        JavaScript. <br />
        Event Manager was designed for those who, like me, prefer rather simple
        interfaces that are eassy to use. It does not have advetising left and right
        and goes straight to the point. So you dont have to break your head around how
        to use the damn app. 
        Wether you decide to use Event Manager to plan your or go with the competence, I sincerely
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