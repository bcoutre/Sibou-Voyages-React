import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import LAREUNION from './views/la-reunion'
import AGENDA from './views/agenda'
import AFRIQUE from './views/afrique'
import TEMP from './views/temp'
import LandingPage1 from './views/landing-page1'
import LandingPage from './views/landing-page'
import CGV from './views/cgv'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={LAREUNION} exact path="/la-reunion" />
        <Route component={AGENDA} exact path="/agenda" />
        <Route component={AFRIQUE} exact path="/afrique" />
        <Route component={TEMP} exact path="/" />
        <Route component={LandingPage1} exact path="/landing-page1" />
        <Route component={LandingPage} exact path="/landing-page" />
        <Route component={CGV} exact path="/cgv" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
