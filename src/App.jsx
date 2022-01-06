import React, {useState,useEffect} from 'react'
import {BrowserRouter as Router, Routes, Route, Link,} from "react-router-dom"
import './App.css';
import Home from "./Pages/Home";
import RegisterUser from './Pages/RegisterUser';
import Login from "./Pages/Login";
import EventManager from "./Pages/EventManager";
import Registration from "./Pages/Registration";
import CheckIn from './Pages/CheckIn';
import Notfound from "./Pages/Notfound";



function App() {

//manage authentication state
const[isAuthenticated, setIsAuthenticated]=useState(false)
const setAuth=(boolean)=>{
  setIsAuthenticated(boolean);
  
}
//validate authentication state 
const checkIsAuthenticated=async()=>{
try {
  const response=await fetch('http://localhost:3001/users/isverified',{
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

//manage state for guest list
const initialValue={guesstName:'Alan'}
const [listOfGuesst, setListOfGuesst]= useState([initialValue]);
//manage state for registration form
const defaultValue={weddingName:'juan and juana', groom:'juan', bride:'juana', location:'naucalpan', date:'01/09/23'}
const [eventInfo, setEventInfo]=useState(defaultValue);
//manage state for count of guests attending
const [count, setCount]=useState(0);






  return (
    <>
    
    <Router>
    <div style={{width:100+"vw", height:80, background:"lightblue"}}>
      <Link to="/login">Login</Link>
      <Link to="/about">About</Link>
      <Link to="/EventManager">EventManager</Link>
      <Link to="/checkin">CheckIn</Link>
      
      
    </div>
  
    <Routes>
      
      <Route path="/login" exact  element={
        <>
        { !isAuthenticated ? <Login setAuth={setAuth}/> : <Home setAuth={setAuth}/>   }
     
        </>
      }>
      </Route>

      <Route path="/registeruser" exact  element={

        <>
          {!isAuthenticated ? <RegisterUser setAuth={setAuth}/>  : <Login/>}

        </>
      }>

      </Route>

      <Route path="/EventManager" exact element={
        <>
        { isAuthenticated ? 
             <EventManager setAuth={setAuth}  setListOfGuesst={setListOfGuesst} listOfGuesst={listOfGuesst} count={count} eventInfo={eventInfo}/>
          :
          <Login  setAuth={setAuth}/>
          
      }
        </>
        }>
      </Route>

      <Route path="/home" exact element={
         <>
         { !isAuthenticated ? <Login setAuth={setAuth}/> : <Home setAuth={setAuth}/>   }
      
         </>

      }>

      </Route>
      <Route path="/registration" exact element ={<Registration setEventInfo={setEventInfo}/>}></Route>
      <Route path="/checkin" exact element={<CheckIn count={count} setCount={setCount}/>}></Route>
      <Route path="*" exact element={Notfound}></Route>
    </Routes>
  </Router>
  </>
  );
}

export default App;
