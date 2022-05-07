import React, { useEffect, useState } from 'react'
import Person from './Person'

const Persons = (props) => {
    const [users, setUsers] = useState([])
    const fetchUser = async()=>{
        const data = await fetch("https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=20")
        const parsedData = await data.json()
        setUsers(parsedData.results)
    }
    useEffect(() => {
        fetchUser();
         
    },[])
    
    
    
  return (
  <div className='Persons'>
  {users.map((user)=>{
      return <Person key={user.email} gender = {user.gender} name={user.name} email = {user.email} data = {user} setUser = {props.setUser} />
  })}
  
  </div>
  )
}

export default Persons