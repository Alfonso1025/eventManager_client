import React, {useState} from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import './App.css';
import About from "./Pages/Home";
import Login from "./Pages/Login";
import EventManager from "./Pages/EventManager";
import Registration from "./Pages/registration";
import CheckIn from './Pages/CheckIn';
import Notfound from "./Pages/Notfound";



function App() {

//manage state for registration form
const initialValue={guesstName:'Alan'}
const [eventInfo, setEventInfo]=useState({});
const [listOfGuesst, setListOfGuesst]= useState([initialValue]);
const [count, setCount]=useState(0);






  return (
    <>
    
    <Router>
    <div style={{width:100+"vw", height:80, background:"lightblue"}}>
      <Link to="/">Login</Link>
      <Link to="/about">About</Link>
      <Link to="/EventManager">EventManager</Link>
      <Link to="/checkin">CheckIn</Link>
      
      
    </div>
  
    <Switch>
      <Route path="/about" exact component={About}></Route>
      <Route path="/" exact  component={Login}></Route>
      <Route path="/registration" exact><Registration setEventInfo={setEventInfo}/></Route>
      <Route path="/EventManager" exact ><EventManager  setListOfGuesst={setListOfGuesst} listOfGuesst={listOfGuesst} count={count} eventInfo={eventInfo}/></Route>
      <Route path="/checkin"><CheckIn  listOfGuesst={listOfGuesst} count={count} setCount={setCount}/> </Route>
      <Route path="*" exact component={Notfound}></Route>
    </Switch>
  </Router>
  </>
  );
}

export default App;
