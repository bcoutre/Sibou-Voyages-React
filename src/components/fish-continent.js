import React from 'react'

import PropTypes from 'prop-types'

import OutlineButton from './outline-button'
import './fish-continent.css'

const FishContinent = (props) => {
  return (
    <div className={`fish-continent-container1 ${props.rootClassName} `}>
      <img
        alt={props.imageAlt}
        src={props.image}
        className="fish-continent-image"
      />
      <div className="fish-continent-container2">
        <span className="fish-continent-text">{props.city}</span>
        <OutlineButton button1="Destinations à venir"></OutlineButton>
      </div>
    </div>
  )
}

FishContinent.defaultProps = {
  imageAlt: 'image',
  image:
    'https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1000',
  rootClassName: '',
  city: 'EUROPE',
}

FishContinent.propTypes = {
  imageAlt: PropTypes.string,
  image: PropTypes.string,
  rootClassName: PropTypes.string,
  city: PropTypes.string,
}

export default FishContinent
