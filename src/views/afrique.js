import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import FishContinent1 from '../components/fish-continent1'
import FishContinent from '../components/fish-continent'
import './afrique.css'

const AFRIQUE = (props) => {
  return (
    <div className="afrique-container">
      <Helmet>
        <title>AFRIQUE - Sibou Voyages</title>
        <meta property="og:title" content="AFRIQUE - Sibou Voyages" />
      </Helmet>
      <div id="AFRIQUE" className="afriqueafrique">
        <h1 className="afrique-text">AFRIQUE</h1>
        <div className="afrique-cards-container">
          <Link to="/la-reunion" className="afrique-navlink">
            <FishContinent1
              city="LA REUNION"
              image="/drapeau%20la%20reuinon-300h.webp"
              rootClassName="fish-continent1root-class-name3"
              className="afrique-component1"
            ></FishContinent1>
          </Link>
          <FishContinent
            city="MADAGASCAR"
            image="/drapeau%20madagascar-300w.jpg"
            rootClassName="fish-continentroot-class-name3"
          ></FishContinent>
        </div>
        <div className="afrique-retour-mes-destinations">
          <Link to="/landing-page" className="afrique-retour-mes-destionations">
            Retour accueil / mes destinations
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AFRIQUE
