import React from 'react'

import PropTypes from 'prop-types'

import './stats2.css'

const Stats2 = (props) => {
  return (
    <div className="stats2-container1 thq-section-padding">
      <div className="stats2-max-width thq-section-max-width">
        <div className="stats2-container2 thq-flex-column"></div>
        <img
          alt={props.image1Alt}
          src={props.image1Src}
          className="thq-img-ratio-1-1 stats2-image"
        />
        <div className="stats2-container3 thq-flex-column">
          <div className="stats2-container4 thq-grid-2">
            <div className="stats2-container5"></div>
            <div className="stats2-container6"></div>
          </div>
          <div className="stats2-container7 thq-grid-2">
            <div className="stats2-container8"></div>
            <div className="stats2-container9"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

Stats2.defaultProps = {
  image1Src:
    'https://images.unsplash.com/photo-1562859797-b63111162b8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MzI3NDkyOHw&ixlib=rb-4.1.0&q=80&w=1080',
  image1Alt: 'Sibou Voyages Travel Destinations',
}

Stats2.propTypes = {
  image1Src: PropTypes.string,
  image1Alt: PropTypes.string,
}

export default Stats2
