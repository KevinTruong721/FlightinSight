import React, {useState} from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import {Login} from './Login';
import {Register} from './Register';
import { FlightSearch } from './FlightSearch';
import { FlightDetail } from './FlightDetail';
import {Payment} from './Payment';
import {UserManagement} from './UserManagement'
import { UserDetail } from './UserDetail';
import {Home} from './Home';

import { UserContext } from './UserContexts/UserContext';
import {UserContext1} from './UserContexts/UserContext1';
import {UserContext2} from './UserContexts/UserContext2';
import {UserContext3} from './UserContexts/UserContext3';
import {UserContext4} from './UserContexts/UserContext4';
import {UserContext5} from './UserContexts/UserContext5';
import {UserContext6} from './UserContexts/UserContext6';
import {UserContext7} from './UserContexts/UserContext7';
import {UserContext8} from './UserContexts/UserContext8';
import {UserContext9} from './UserContexts/UserContext9';


function App() {

  const [id_user, setId_user] = useState(null);

  const [dCount ,setDCount] = useState(null);
  const [dCode, setDCode] = useState(null);
  const [dDate, setDDate] = useState(null);
  const [dTime, setDTime] = useState(null);
  const [dStop, setDStop] = useState(null);
  const [dTotal, setDTotal] = useState(null);
  const [dFare, setDFare] = useState(null);
  const [dTax, setDTax] = useState(null);
  const [dCurrency, setDCurrency] = useState(null);



  return (
    <Router>
      <div>
        <UserContext.Provider value = {{id_user, setId_user}}>
        <UserContext1.Provider value = {{dCount, setDCount}}>
        <UserContext2.Provider value = {{dCode, setDCode}}>
        <UserContext3.Provider value = {{dDate, setDDate}}>
        <UserContext4.Provider value = {{dTime, setDTime}}>
        <UserContext5.Provider value = {{dStop, setDStop}}>
        <UserContext6.Provider value = {{dTotal, setDTotal}}>
        <UserContext7.Provider value = {{dFare, setDFare}}>
        <UserContext8.Provider value = {{dTax, setDTax}}>
        <UserContext9.Provider value = {{dCurrency, setDCurrency}}>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/FlightDetail" element={<FlightDetail/>}/>
          <Route path="/Payment" element={<Payment/>}/>
          <Route path="/UserManagement" element={<UserManagement/>}/>
          <Route path="/UserDetail" element={<UserDetail/>}/>
        </Routes>
        </UserContext9.Provider>
        </UserContext8.Provider>
        </UserContext7.Provider>
        </UserContext6.Provider>
        </UserContext5.Provider>
        </UserContext4.Provider>
        </UserContext3.Provider>
        </UserContext2.Provider>
        </UserContext1.Provider>
        </UserContext.Provider>

      </div>
    </Router>
  
  );
}

export default App;
