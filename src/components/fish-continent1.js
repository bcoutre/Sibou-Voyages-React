import React from 'react'

import PropTypes from 'prop-types'

import OutlineButton from './outline-button'
import './fish-continent1.css'

const FishContinent1 = (props) => {
  return (
    <div className={`fish-continent1-container1 ${props.rootClassName} `}>
      <img
        alt={props.imageAlt}
        src={props.image}
        className="fish-continent1-image"
      />
      <div className="fish-continent1-container2">
        <span className="fish-continent1-text">{props.city}</span>
        <OutlineButton button1="A découvrir"></OutlineButton>
      </div>
    </div>
  )
}

FishContinent1.defaultProps = {
  city: 'AFRIQUE',
  rootClassName: '',
  image:
    'https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1000',
  imageAlt: 'image',
}

FishContinent1.propTypes = {
  city: PropTypes.string,
  rootClassName: PropTypes.string,
  image: PropTypes.string,
  imageAlt: PropTypes.string,
}

export default FishContinent1
