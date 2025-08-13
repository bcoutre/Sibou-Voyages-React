import React from 'react'

import { Helmet } from 'react-helmet'

import './temp.css'

const TEMP = (props) => {
  return (
    <div className="temp-container1">
      <Helmet>
        <title>TEMP - Sibou Voyages</title>
        <meta property="og:title" content="TEMP - Sibou Voyages" />
      </Helmet>
      <span className="temp-sibou-voyages">
        <span>Sibou Voyages</span>
        <br></br>
      </span>
      <div className="temp-container2">
        <span className="temp-text3">
          A très vite sur le net pour des voyages inoubliables !!!!!
        </span>
      </div>
    </div>
  )
}

export default TEMP
