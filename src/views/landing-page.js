import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import SolidButton from '../components/solid-button'
import FishContinent1 from '../components/fish-continent1'
import FishContinent from '../components/fish-continent'
import './landing-page.css'

const LandingPage = (props) => {
  return (
    <div className="landing-page-container1">
      <Helmet>
        <title>Landing-Page - Sibou Voyages</title>
        <meta property="og:title" content="Landing-Page - Sibou Voyages" />
      </Helmet>
      <div className="landing-page-pagedaccueil">
        <nav data-role="Header" className="landing-page-navbar">
          <img
            alt="image"
            src="/logo%20test-200h.jpg"
            className="landing-page-image"
          />
          <div id="Contacts" className="landing-page-container2">
            <span className="landing-page-sibou-voyages1">
              <span>Sibou Voyages</span>
              <br></br>
            </span>
            <span className="landing-page-sibou-voyages2">
              <span>06 06 06 06 06</span>
              <br></br>
            </span>
            <span className="landing-page-sibou-voyages3">
              <a
                href="mailto:sibouvoyages@gmail.com?subject=DEMANDE D'INFORMATIONS"
                className="landing-page-link10"
              >
                sibouvoyages@gmail.com
              </a>
              <br></br>
            </span>
          </div>
          <div data-role="BurgerMenu" className="landing-page-burger-menu1">
            <svg viewBox="0 0 1024 1024" className="landing-page-burger-menu2">
              <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="landing-page-mobile-menu">
            <div className="landing-page-nav">
              <div className="landing-page-top">
                <h1>Travel</h1>
                <div
                  data-role="CloseMobileMenu"
                  className="landing-page-close-menu"
                >
                  <svg viewBox="0 0 1024 1024" className="landing-page-icon13">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="landing-page-right-side">
                <div className="landing-page-links-container1">
                  <span className="landing-page-text15">Home</span>
                  <span className="landing-page-text16">About</span>
                  <span className="landing-page-text17">Tour Packages</span>
                  <span>Contact</span>
                </div>
                <SolidButton button="Explore places"></SolidButton>
              </div>
            </div>
            <div className="landing-page-follow-container1">
              <div className="landing-page-icons-container1">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="landing-page-link11"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="landing-page-icon15"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="landing-page-link12"
                >
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="landing-page-icon17"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="landing-page-link13"
                >
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="landing-page-icon19"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <h1 className="Content landing-page-heading1">Sibou Voyages</h1>
          </div>
        </nav>
        <div className="landing-page-hero1">
          <div className="landing-page-content-container1">
            <h1 className="landing-page-text19 Heading">Qui suis-je ?</h1>
            <h1 className="landing-page-heading2">
              Qu&apos;est-ce qu&apos;un travel planner (organisateur de voyages)
              ?
            </h1>
            <a href="#DESTINATIONS" className="landing-page-link14">
              <h1 className="landing-page-text20">Mes destinations</h1>
            </a>
          </div>
        </div>
      </div>
      <div className="landing-page-qui-suis-je">
        <div className="landing-page-hero2">
          <div className="landing-page-content-container2">
            <h1 id="quisuisje" className="landing-page-text21">
              <span className="Heading">
                Qui
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>suis</span>
              <span className="Heading">-je ?</span>
            </h1>
          </div>
        </div>
        <span className="landing-page-text25">
          <span className="landing-page-text26">
            Je m&apos;appelle Christophe.
          </span>
          <br className="landing-page-text27"></br>
          <span className="landing-page-text28">
            Ceux qui me connaissent m&apos;appellent Sibou.
          </span>
          <br className="landing-page-text29"></br>
          <span className="landing-page-text30">
            Ardéchois coeur fidèle, je suis tombé amoureux de La Réunion en
            2001.
          </span>
          <br className="landing-page-text31"></br>
          <span className="landing-page-text32">
            J&apos;y organise des randos pour et avec des Ami(e)s.
          </span>
          <br className="landing-page-text33"></br>
          <br className="landing-page-text34"></br>
          <span className="landing-page-text35">
            Envie de visiter simplement cette ile et de profiter des panoramas ?
          </span>
          <br className="landing-page-text36"></br>
          <span className="landing-page-text37">
            Envie de découvrir puis de s&apos;immerger au coeur de l&apos;île ?
          </span>
          <br className="landing-page-text38"></br>
          <span className="landing-page-text39">
            Envie de flâner puis de traverser l&apos;île à pied ?
          </span>
          <br className="landing-page-text40"></br>
          <br className="landing-page-text41"></br>
          <span className="landing-page-text42">
            Fraîchement installé comme organisateur de voyages (travel planner),
          </span>
          <br className="landing-page-text43"></br>
          <span className="landing-page-text44">
            je propose de vous accompagner dans la création et la préparation de
            votre séjour réunionnais.
          </span>
          <br className="landing-page-text45"></br>
          <br className="landing-page-text46"></br>
          <span className="landing-page-text47">
            Vous manquez de temps pour l&apos;organisation de votre voyage ?
          </span>
          <br className="landing-page-text48"></br>
          <span className="landing-page-text49">
            Vous n&apos;aimez pas ceux qui sont organisés ?
          </span>
          <br></br>
          <span className="landing-page-text51">
            Vous voulez un voyage sur mesure ?
          </span>
          <br></br>
          <br></br>
          <span className="landing-page-text54">
            Pas de panique, je suis là pour en discuter.
          </span>
          <br className="landing-page-text55"></br>
          <span className="landing-page-text56">
            Vos envies, vos projets, vos désirs, votre budget...
          </span>
          <br></br>
          <br></br>
        </span>
        <Link to="/landing-page" className="landing-page-navlink1">
          <div className="landing-page-page-daccueil1">
            <span className="landing-page-text59">Page d&apos;accueil</span>
          </div>
        </Link>
        <Link to="/agenda" className="landing-page-navlink2">
          <div className="landing-page-rdv1">
            <span className="landing-page-rdv2">RDV</span>
          </div>
        </Link>
      </div>
      <div id="Travel planner" className="landing-page-travel-planner">
        <div className="landing-page-content-container3">
          <h1 id="quisuisje" className="landing-page-text60 Heading">
            Qu&apos;est-ce qu&apos;un travel planner ?
          </h1>
        </div>
        <Link to="/landing-page" className="landing-page-navlink3">
          <div className="landing-page-page-daccueil2">
            <span className="landing-page-text61">Page d&apos;accueil</span>
          </div>
        </Link>
        <Link to="/agenda" className="landing-page-navlink4">
          <div className="landing-page-rdv3">
            <span className="landing-page-rdv4">RDV</span>
          </div>
        </Link>
        <span className="landing-page-text62">
          <span className="landing-page-text63">
            Un travel planner ou organisateur de voyages vous aide à préparer
            votre voyage,
          </span>
          <br></br>
          <span className="landing-page-text65">
            vous conseille dans vos choix.
          </span>
          <br></br>
        </span>
      </div>
      <div id="DESTINATIONS" className="landing-page-destinations">
        <h1 className="landing-page-text67">Mes destinations</h1>
        <div className="landing-page-cards-container1">
          <a href="#AFRIQUE" className="landing-page-link15">
            <FishContinent1
              image="https://images.unsplash.com/photo-1655102718560-19dd4971f87b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fGNhcnRlJTIwYWZyaXF1ZXxlbnwwfHx8fDE3NTMyNzI2MjB8MA&amp;ixlib=rb-4.1.0&amp;h=1100"
              rootClassName="fish-continent1root-class-name"
              className="landing-page-component2"
            ></FishContinent1>
          </a>
          <a href="#DESTINATIONS" className="landing-page-link16">
            <FishContinent
              city="EUROPE"
              image="https://images.unsplash.com/photo-1608817576203-3c27ed168bd2?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDR8fGV1cm9wZXxlbnwwfHx8fDE3NTMyNzIwODV8MA&amp;ixlib=rb-4.1.0&amp;h=1100"
              rootClassName="fish-continentroot-class-name"
              className="landing-page-component3"
            ></FishContinent>
          </a>
        </div>
      </div>
      <div id="AFRIQUE" className="landing-page-afrique">
        <h1 className="landing-page-text68">AFRIQUE</h1>
        <div className="landing-page-cards-container2">
          <Link to="/la-reunion" className="landing-page-navlink5">
            <FishContinent1
              city="LA REUNION"
              image="/drapeau%20la%20reuinon-300h.webp"
              rootClassName="fish-continent1root-class-name1"
              className="landing-page-component4"
            ></FishContinent1>
          </Link>
          <FishContinent
            city="MADAGASCAR"
            image="/drapeau%20madagascar-300w.jpg"
            rootClassName="fish-continentroot-class-name1"
          ></FishContinent>
        </div>
        <div className="landing-page-retour-mes-destinations">
          <a
            href="#DESTINATIONS"
            className="landing-page-retour-mes-destionations"
          >
            Retour mes destinations
          </a>
        </div>
      </div>
      <div className="landing-page-footer">
        <div className="landing-page-menu">
          <div className="landing-page-links-container2">
            <div className="landing-page-container3">
              <a
                href="mailto:sibouvoyages@gmail.com?subject=REMARQUES SUR LE SITE"
                className="landing-page-link17"
              >
                Vos remarques sur le site
              </a>
              <a
                href="https://g.page/r/CUHdWBjFMRahEAE/review"
                target="_blank"
                rel="noreferrer noopener"
                className="landing-page-link18"
              >
                L&apos;avis des voyageurs
              </a>
              <Link to="/cgv" className="landing-page-navlink6">
                CGV
              </Link>
              <a href="#Contacts" className="landing-page-link19">
                Contact
              </a>
            </div>
          </div>
          <div className="landing-page-follow-container2">
            <span className="landing-page-text69">Suivez-moi</span>
            <div className="landing-page-icons-container2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer noopener"
                className="landing-page-link20"
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="landing-page-icon21"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/christophe.boussit"
                target="_blank"
                rel="noreferrer noopener"
                className="landing-page-link21"
              >
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="landing-page-icon23"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
