import React,{useState} from 'react'
import '../styles/Header.css'
import Logo from '../styles/media/eveman1.png'

const Header =(props)=>{



    return(
        <div className='header-wrapper'>
            <img src={Logo} alt="JoyHub logo" className='header-logo'/>
        </div>
    )
}
export default Header