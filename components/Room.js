import React from 'react'

const Room = props => {
  return(
    <li className="circle">
      Name: {props.name}, Room color:{props.color}
    </li>
  )
}

export default Room
