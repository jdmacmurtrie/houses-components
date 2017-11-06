import React from 'react'
import Room from './Room'

const House = props => {
  let rooms = [{name: "kitchen"}, {name: "bathroom"}, {name: "bedroom"}]
  let roomsArray = rooms.map(room => {
    return(
    <Room
      name={room.name}
      color={props.color}
    />
    )
  })

  return(
    <div className="box">
      <h2>{props.address}</h2>
      <h3>{props.color}</h3>
      <h3>My rooms:</h3>
      <ul>
        {roomsArray}
      </ul>
    </div>
  )
}


export default House
