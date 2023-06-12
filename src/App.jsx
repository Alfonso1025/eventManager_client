import React, {useState,useEffect} from 'react'
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';
import Home from "./Pages/Home";
import RegisterUser from './Pages/RegisterUser';
import Login from "./Pages/Login";
import EventManager from "./Pages/EventManager";
import Registration from './Pages/Registration'
import CheckIn from './Pages/CheckIn';
import Welcolme from './Pages/Welcolme';
import Notfound from "./Pages/Notfound";
import Guesslist from './Pages/Guesslist';




function App() {

const remote_server = process.env.REACT_APP_REMOTE_SERVER

//manage authentication state
const[isAuthenticated, setIsAuthenticated]= useState(false)

//validate authentication state 
const checkIsAuthenticated=async()=>{
try {
  const response=await fetch(`${remote_server}/users/isverified`,{
    method:"GET",
    headers:{token:localStorage.token}
  })
  const parseResponse= await response.json()
  parseResponse===true? setIsAuthenticated(true):setIsAuthenticated(false)
}
 catch (error) {
  console.log(error)
}
}
useEffect(()=>{
  checkIsAuthenticated()
})






  return (
    <>
  
    <Router>
     
  
    <Routes>
      
      <Route path="/login" exact  element={
        <>
        { !isAuthenticated ? <Login setAuth={setIsAuthenticated}/> :
                             <Home setAuth={setIsAuthenticated}/>  }
     
        </>
      }>
      </Route>

      <Route path="/registeruser" exact  element={

        <>
          {!isAuthenticated ? <RegisterUser setAuth={setIsAuthenticated}/> 
                             : <Login setAuth={setIsAuthenticated}/>}

        </>
      }>

      </Route>

      <Route path="/EventManager" exact element={
        <>
        { isAuthenticated ? 
             <EventManager setAuth={setIsAuthenticated}/>
          :
          <Login  setAuth={setIsAuthenticated}/>
          
      }
        </>
        }>
      </Route>

      <Route path="/home" exact element={
         <>
         { !isAuthenticated ? <Login setAuth={setIsAuthenticated}/> : <Home setAuth={setIsAuthenticated}/>   }
      
         </>

      }>
      </Route>

      <Route path="/guestlist" exact element={
         <>
         { !isAuthenticated ? <Login setAuth={setIsAuthenticated}/> : <Guesslist/>   }
      
         </>

      }></Route>

     <Route path="/registration" exact element ={<Registration/>}></Route> 

      <Route path="/checkin" exact element={<CheckIn/>}></Route>
      <Route path="/" exact element={<Welcolme/>}></Route>
      <Route path="*" exact element={Notfound}></Route>
    </Routes>
  </Router>
  
  </>
  );
}

export default App;
