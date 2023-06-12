// EventContext.js

import React, { createContext, useState } from 'react';

// Create a new context
const EventContext = createContext();

// Create a provider component
const EventContextProvider = ({ children }) => {
  // State variables
  const [ctxtEventId, setCtxEventId] = useState('');
  const [ctxWedding,setCtxWedding] = useState('')
  const [ctxGroom, setCtxGroom] = useState('');
  const [ctxBride, setCtxBride] = useState('');
  const [ctxLocation, setCtxLocation] = useState('')
  const [ctxDate, setCtxDate] = useState('')
  const [count, setCount] = useState(0)
  const [listOfGuest, setListOfGuest] = useState([]);
  

 

  // Provide the context value to its children components
  return (
    <EventContext.Provider value={{
        ctxtEventId, setCtxEventId, ctxWedding, setCtxWedding,ctxGroom, setCtxGroom, ctxBride, setCtxBride, listOfGuest, 
        setListOfGuest, ctxLocation, setCtxLocation, ctxDate, setCtxDate, count, setCount}}>
      {children}
    </EventContext.Provider>
  );
};

export { EventContext, EventContextProvider };
