import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import SolidButton from '../components/solid-button'
import Stats2 from '../components/stats2'
import Hero8 from '../components/hero8'
import Logos1 from '../components/logos1'
import Features1 from '../components/features1'
import './la-reunion.css'

const LAREUNION = (props) => {
  return (
    <div className="lareunion-container1">
      <Helmet>
        <title>LA-REUNION - Sibou Voyages</title>
        <meta property="og:title" content="LA-REUNION - Sibou Voyages" />
      </Helmet>
      <nav data-role="Header" className="lareunion-navbar">
        <img
          alt="image"
          src="/logo%20test-200h.jpg"
          className="lareunion-image"
        />
        <div className="lareunion-container2">
          <span className="lareunion-sibou-voyages1">
            <span>Sibou Voyages</span>
            <br></br>
          </span>
          <span className="lareunion-sibou-voyages2">
            <span>06 06 06 06 06</span>
            <br></br>
          </span>
        </div>
        <div data-role="BurgerMenu" className="lareunion-burger-menu1">
          <svg viewBox="0 0 1024 1024" className="lareunion-burger-menu2">
            <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
            <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
            <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
          </svg>
        </div>
        <div data-role="MobileMenu" className="lareunion-mobile-menu">
          <div className="lareunion-nav">
            <div className="lareunion-top">
              <h1>Travel</h1>
              <div data-role="CloseMobileMenu" className="lareunion-close-menu">
                <svg viewBox="0 0 1024 1024" className="lareunion-icon13">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="lareunion-right-side">
              <div className="lareunion-links-container">
                <span className="lareunion-text104">Home</span>
                <span className="lareunion-text105">About</span>
                <span className="lareunion-text106">Tour Packages</span>
                <span>Contact</span>
              </div>
              <SolidButton button="Explore places"></SolidButton>
            </div>
          </div>
          <div className="lareunion-follow-container">
            <div className="lareunion-icons-container">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer noopener"
                className="lareunion-link1"
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="lareunion-icon15"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer noopener"
                className="lareunion-link2"
              >
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="lareunion-icon17"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                className="lareunion-link3"
              >
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="lareunion-icon19"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
              </a>
            </div>
          </div>
          <h1 className="Content lareunion-text108">Sibou Voyages</h1>
        </div>
      </nav>
      <Stats2></Stats2>
      <Hero8
        content1={
          <Fragment>
            <span className="lareunion-text109">
              <br className="lareunion-text110"></br>
              <br className="lareunion-text111"></br>
              <span className="lareunion-text112">GEOLOGIE :</span>
              <br className="lareunion-text113"></br>
              <span className="lareunion-text114">
                La Réunion est une île issue d&apos;un volcan venu des
                profondeurs de l&apos;Océan Indien.
              </span>
              <br></br>
              <span>
                La Terre compte 4.5 milliards d&apos;années, La Réunion
                n&apos;en compte que 3 millions.
              </span>
              <br></br>
              <span>
                Le magma s&apos;est accumulé à partir du fonds de l&apos;océan,
                un volcan finit par émerger.
              </span>
              <br></br>
              <span>Il va donner naissance au Piton des Neiges.</span>
              <br></br>
              <span>
                Plus tard, s&apos;effondrant sur lui-même, il donnera naissance
                aux 3 cirques : Mafate, Salazie et Cilaos.
              </span>
              <br></br>
              <span>
                Un autre volcan a émergé il y a environ 500 000 ans au sud est
                de l&apos;île.
              </span>
              <br></br>
              <span>
                Il deviendra le Piton de la Fournaise, un des volcans le plus
                actifs au monde.
              </span>
              <br></br>
              <span>
                Alternant l&apos;un et l&apos;autre des phases d&apos;éruptions,
                de repos, d&apos;érosion ou encore d&apos;effondrements,
              </span>
              <br></br>
              <span>
                le Piton des Neiges cessera son activité il y a environ 30 000
                ans.
              </span>
              <br></br>
              <span>ajouter photo de chaque volcan</span>
              <br></br>
            </span>
          </Fragment>
        }
      ></Hero8>
      <Hero8
        content1={
          <Fragment>
            <span className="lareunion-text134">
              <br className="lareunion-text135"></br>
              <span className="lareunion-text136">GEOGRAPHIE :</span>
              <br className="lareunion-text137"></br>
              <span className="lareunion-text138">
                La Réunion mesure 2.512
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="lareunion-text139">km².</span>
              <br className="lareunion-text140"></br>
              <span className="lareunion-text141">
                Elle est située à 680 km au sud est de Madagascar et à 170 
              </span>
              <span className="lareunion-text142">
                km au sud ouest de l&apos;Ile Maurice,
              </span>
              <br className="lareunion-text143"></br>
              <span className="lareunion-text144">
                légèrement au-dessus du tropique du Capricorne.
              </span>
              <br className="lareunion-text145"></br>
              <span className="lareunion-text146">
                Le Piton des Neiges culmine à 3.070 m d&apos;altitude ; le Piton
                de la Fournaise à 2.632 m.
              </span>
              <br className="lareunion-text147"></br>
              <span className="lareunion-text148">
                Le décor : les 3 cirques entourent le Piton des Neiges au nord,
                une bande qu&apos;on appelle les Plaines relie l&apos;est à
                l&apos;ouest
              </span>
              <br className="lareunion-text149"></br>
              <span className="lareunion-text150">
                et le Piton de la Fournaise se dresse au sud.
              </span>
              <br className="lareunion-text151"></br>
              <span className="lareunion-text152">
                ajouter photo de chaque cirque
              </span>
              <br></br>
            </span>
          </Fragment>
        }
      ></Hero8>
      <Hero8
        content1={
          <Fragment>
            <span className="lareunion-text154">
              <br className="lareunion-text155"></br>
              <span className="lareunion-text156">HISTOIRE :</span>
              <br className="lareunion-text157"></br>
              <span className="lareunion-text158">
                La Réunion est une île issue d&apos;un volcan venu des
                profondeurs de l&apos;Océan Indien.
              </span>
              <br className="lareunion-text159"></br>
              <span className="lareunion-text160">
                La Terre compte 4.5 milliards d&apos;années, La Réunion ne
                compte que 3 millions d&apos;années.
              </span>
              <br className="lareunion-text161"></br>
              <span className="lareunion-text162">
                Le magma s&apos;accumule à partir du fonds de l&apos;océan, un
                volcan finit par émerger.
              </span>
              <br className="lareunion-text163"></br>
              <span className="lareunion-text164">
                Il va donner naissance au Piton des Neiges.
              </span>
              <br className="lareunion-text165"></br>
              <span className="lareunion-text166">
                Plus tard, s&apos;effondrant sur lui-même, il donnera naissance
                aux 3 cirques : Mafate, Salazie, et Cilaos.
              </span>
              <br className="lareunion-text167"></br>
              <span className="lareunion-text168">
                Un autre volcan a émergé il y a environ 500 000 ans au sud est
                de l&apos;île.
              </span>
              <br></br>
            </span>
          </Fragment>
        }
      ></Hero8>
      <Hero8
        content1={
          <Fragment>
            <span className="lareunion-text170">
              <br className="lareunion-text171"></br>
              <span className="lareunion-text172">DEMOGRAPHIE :</span>
              <br className="lareunion-text173"></br>
              <span className="lareunion-text174">
                La Réunion est une île issue d&apos;un volcan venu des
                profondeurs de l&apos;Océan Indien.
              </span>
              <br className="lareunion-text175"></br>
              <span className="lareunion-text176">
                La Terre compte 4.5 milliards d&apos;années, La Réunion ne
                compte que 3 millions d&apos;années.
              </span>
              <br className="lareunion-text177"></br>
              <span className="lareunion-text178">
                Le magma s&apos;accumule à partir du fonds de l&apos;océan, un
                volcan finit par émerger.
              </span>
              <br className="lareunion-text179"></br>
              <span className="lareunion-text180">
                Il va donner naissance au Piton des Neiges.
              </span>
              <br className="lareunion-text181"></br>
              <span className="lareunion-text182">
                Plus tard, s&apos;effondrant sur lui-même, il donnera naissance
                aux 3 cirques : Mafate, Salazie, et Cilaos.
              </span>
              <br className="lareunion-text183"></br>
              <span className="lareunion-text184">
                Un autre volcan a émergé il y a environ 500 000 ans au sud est
                de l&apos;île.
              </span>
              <br></br>
            </span>
          </Fragment>
        }
      ></Hero8>
      <Hero8
        content1={
          <Fragment>
            <span className="lareunion-text186">
              <br className="lareunion-text187"></br>
              <span className="lareunion-text188">FAUNE :</span>
              <br className="lareunion-text189"></br>
              <span className="lareunion-text190">
                La Réunion est une île issue d&apos;un volcan venu des
                profondeurs de l&apos;Océan Indien.
              </span>
              <br className="lareunion-text191"></br>
              <span className="lareunion-text192">
                La Terre compte 4.5 milliards d&apos;années, La Réunion ne
                compte que 3 millions d&apos;années.
              </span>
              <br className="lareunion-text193"></br>
              <span className="lareunion-text194">
                Le magma s&apos;accumule à partir du fonds de l&apos;océan, un
                volcan finit par émerger.
              </span>
              <br className="lareunion-text195"></br>
              <span className="lareunion-text196">
                Il va donner naissance au Piton des Neiges.
              </span>
              <br className="lareunion-text197"></br>
              <span className="lareunion-text198">
                Plus tard, s&apos;effondrant sur lui-même, il donnera naissance
                aux 3 cirques : Mafate, Salazie, et Cilaos.
              </span>
              <br className="lareunion-text199"></br>
              <span className="lareunion-text200">
                Un autre volcan a émergé il y a environ 500 000 ans au sud est
                de l&apos;île.
              </span>
              <br></br>
            </span>
          </Fragment>
        }
      ></Hero8>
      <Hero8
        content1={
          <Fragment>
            <span className="lareunion-text202">
              <br className="lareunion-text203"></br>
              <span className="lareunion-text204">FLORE :</span>
              <br className="lareunion-text205"></br>
              <span className="lareunion-text206">
                La Réunion est une île issue d&apos;un volcan venu des
                profondeurs de l&apos;Océan Indien.
              </span>
              <br className="lareunion-text207"></br>
              <span className="lareunion-text208">
                La Terre compte 4.5 milliards d&apos;années, La Réunion ne
                compte que 3 millions d&apos;années.
              </span>
              <br className="lareunion-text209"></br>
              <span className="lareunion-text210">
                Le magma s&apos;accumule à partir du fonds de l&apos;océan, un
                volcan finit par émerger.
              </span>
              <br className="lareunion-text211"></br>
              <span className="lareunion-text212">
                Il va donner naissance au Piton des Neiges.
              </span>
              <br className="lareunion-text213"></br>
              <span className="lareunion-text214">
                Plus tard, s&apos;effondrant sur lui-même, il donnera naissance
                aux 3 cirques : Mafate, Salazie, et Cilaos.
              </span>
              <br className="lareunion-text215"></br>
              <span className="lareunion-text216">
                Un autre volcan a émergé il y a environ 500 000 ans au sud est
                de l&apos;île.
              </span>
              <br></br>
            </span>
          </Fragment>
        }
      ></Hero8>
      <Hero8
        content1={
          <Fragment>
            <span className="lareunion-text218">
              <br className="lareunion-text219"></br>
              <span className="lareunion-text220">
                QUE FAIRE A LA REUNION :
              </span>
              <br className="lareunion-text221"></br>
              <span className="lareunion-text222">
                La Réunion est une île issue d&apos;un volcan venu des
                profondeurs de l&apos;Océan Indien.
              </span>
              <br className="lareunion-text223"></br>
              <span className="lareunion-text224">
                La Terre compte 4.5 milliards d&apos;années, La Réunion ne
                compte que 3 millions d&apos;années.
              </span>
              <br className="lareunion-text225"></br>
              <span className="lareunion-text226">
                Le magma s&apos;accumule à partir du fonds de l&apos;océan, un
                volcan finit par émerger.
              </span>
              <br className="lareunion-text227"></br>
              <span className="lareunion-text228">
                Il va donner naissance au Piton des Neiges.
              </span>
              <br className="lareunion-text229"></br>
              <span className="lareunion-text230">
                Plus tard, s&apos;effondrant sur lui-même, il donnera naissance
                aux 3 cirques : Mafate, Salazie, et Cilaos.
              </span>
              <br className="lareunion-text231"></br>
              <span className="lareunion-text232">
                Un autre volcan a émergé il y a environ 500 000 ans au sud est
                de l&apos;île.
              </span>
              <br></br>
            </span>
          </Fragment>
        }
      ></Hero8>
      <Logos1></Logos1>
      <Features1></Features1>
      <Link to="/agenda" className="lareunion-navlink1">
        <div className="lareunionrdv1">
          <span className="lareunionrdv2">RDV</span>
        </div>
      </Link>
      <Link to="/afrique" className="lareunion-navlink2 button">
        Retour Afrique
      </Link>
    </div>
  )
}

export default LAREUNION
