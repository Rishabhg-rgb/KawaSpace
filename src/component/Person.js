import React from 'react'

const Person = (props) => {
  
  const getUser = () => {
    props.setUser(props.data)
    let cards = document.querySelectorAll('.usercard')
    cards.forEach(card=>{
      card.addEventListener('click',()=>{
        cards.forEach(card=>card.className = "usercard")
        card.classList.add('active')
      })
    })
    
   
  }

  return (

    <div className='usercard' onClick={getUser}   >
      <div className="gender">{props.gender} . NL</div>
      <div className="name" style={{ fontSize: "1.3rem", fontWeight: 'bold' }}>{props.name.title} {props.name.first} {props.name.last} </div>
      <div className="email">{props.email}</div>
    </div>
  )
}

export default Person