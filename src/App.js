import logo from './logo.svg';
import './App.css';
import Persons from './component/Persons';
import { useState } from 'react';
import User from './component/User';


function App() {
  const [user, setUser] = useState()
  return (
    <div className='container'>
    {!user?"":
    <User user = {user}/>}
    <Persons setUser = {setUser} />
    </div>
  );
}

export default App;
