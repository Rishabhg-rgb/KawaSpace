import React from 'react'

const User = (props) => {  
  return (
    <div className="card my-5 " style={{maxWidth: "800px",height:"250px",border:"4px ", margin:"auto",justifyContent:"center",borderRadius:"2rem"}}>
  <div className="row g-0">
    <div className="col-md-4" >
      <img src={props.user.picture.large} style={{marginLeft:"4rem"}} className="img-fluid rounded-circle" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h3 className="card-title "><u style={{color:"red"}}>{props.user.name.title}. {props.user.name.first} {props.user.name.last}</u></h3>
        <p className="card-text"><span className='number'>{props.user.location.street.number}</span>, {props.user.location.street.name}, <b>{props.user.location.state}</b>,{props.user.location.postcode} <br />{props.user.location.timezone.offset}-{props.user.location.timezone.description}</p>
        <p className="card-text"><small className="text-muted">{props.user.gender}</small></p>
      </div>
    </div>
  </div>
</div>
    
  )
}

export default User