import React from 'react'
import { BsSnow2 } from 'react-icons/bs'
import { BsSun } from 'react-icons/bs'

import './SeasonDisplay.css'

//create a sort of configuration object
const seasonConfig = {
  winter: {
    text: 'Burr, it is chilly',
    iconName: 'snowflake',
  },
  summer: {
    text: "Let's hit the beach",
    iconName: 'sun',
  },
}

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter'
  } else {
    return lat > 0 ? 'winter' : 'summer'
  }
}

const SeasonDisplay = (props) => {
  //new Date().getMonth() - return different result depends on geolocation of the user
  const season = getSeason(props.lat, new Date().getMonth())
  //object destructuring
  const { text, iconName } = seasonConfig[season] //object notation

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`}></i>
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`}></i>
    </div>
  )
}

export default SeasonDisplay
