import React from 'react';
import House from './House'

const Neighborhood = props => {
  let houses = [{address: 1, color: "navy-blue"}, {address: 2, color: "periwinkle"}]
  let housesArray = houses.map(house => {
    return(
    <House
      address={house.address}
      color={house.color}
    />
    )
  })

  return (
    <div className="goodStuff">
      <h1>It is a beautiful day in the Neighborhood</h1>
      {housesArray}
    </div>
  );
}

export default Neighborhood;
