import React from 'react'

import { Helmet } from 'react-helmet'

import './agenda.css'

const AGENDA = (props) => {
  return (
    <div className="agenda-container">
      <Helmet>
        <title>AGENDA - Sibou Voyages</title>
        <meta property="og:title" content="AGENDA - Sibou Voyages" />
      </Helmet>
      <iframe
        src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3A8KKyazdcXQ9WqXXdYYrFkvRfksDOhruEeEA2AFF3etExnTM7vsbzfs5efUHnZDw68mgSrmnc?gv=true"
        className="agenda-iframe"
      ></iframe>
    </div>
  )
}

export default AGENDA
