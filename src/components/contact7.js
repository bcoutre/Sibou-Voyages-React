import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact7.css'

const Contact7 = (props) => {
  return (
    <div className="contact7-container1 thq-section-padding">
      <div className="contact7-max-width thq-section-max-width">
        <div className="contact7-content1 thq-flex-row">
          <div className="contact7-content2"></div>
        </div>
        <div className="contact7-content3 thq-flex-row">
          <div className="contact7-container2">
            <h3 className="contact7-text1 thq-heading-3">
              {props.location1 ?? (
                <Fragment>
                  <span className="contact7-text2">Bucharest</span>
                </Fragment>
              )}
            </h3>
            <div className="contact7-container3">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-body-small thq-button-flat"
              >
                Get directions
              </a>
            </div>
          </div>
          <div className="contact7-container4">
            <div className="contact7-container5">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-body-small thq-button-flat"
              >
                Get directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact7.defaultProps = {
  location1: undefined,
}

Contact7.propTypes = {
  location1: PropTypes.element,
}

export default Contact7
