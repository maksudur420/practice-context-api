import React, { useEffect, useState,createContext } from 'react';
import Users from './components/Users';
import NewUser from './components/NewUser';
import './App.css';

export const usersContext = createContext({});


function App() {
  const [users, setUsers] =useState([]);

  useEffect(()=>{
    fetch('fakedata.json')
    .then(res=>res.json())
    .then(data=>setUsers(data))
  },[])

  return (
    <usersContext.Provider value={{users,setUsers}}>
      <div>
          <NewUser></NewUser>
          <Users></Users>
      </div>
    </usersContext.Provider>
   
  );
}

export default App;
