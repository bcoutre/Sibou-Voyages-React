import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './hero8.css'

const Hero8 = (props) => {
  return (
    <div className="hero8-header26 thq-section-padding">
      <div className="hero8-max-width thq-flex-column thq-section-max-width">
        <div className="hero8-column">
          <div className="hero8-content">
            <p className="hero8-text1 thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="hero8-text2">
                    Plan your dream vacation with us
                  </span>
                </Fragment>
              )}
            </p>
            <img
              alt={props.imageAlt}
              src={props.imageSrc}
              className="hero8-image"
            />
            <div className="hero8-actions"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

Hero8.defaultProps = {
  imageAlt: 'image',
  content1: undefined,
  imageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
}

Hero8.propTypes = {
  imageAlt: PropTypes.string,
  content1: PropTypes.element,
  imageSrc: PropTypes.string,
}

export default Hero8
