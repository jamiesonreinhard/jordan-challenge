import './App.css';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Nav from './components/Nav';
import Home from './components/Home';
import Contacts from './components/Contacts';
import userData from './data/user';

const App = () => {
  const [user, setUser] = useState({});
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    setUser(userData);
    fetch('https://random-data-api.com/api/users/random_user?size=20')
      .then(response => response.json())
      .then(data => setContacts(data))
      .catch(() => console.log('unable to load contacts!'));
  }, [])

  return (
    <Router>
      <div className='App'>
        <Nav user={user}/>
      </div>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts contacts={contacts} />} />
        </Routes>
    </Router>
  );
}

export default App;
