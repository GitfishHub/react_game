import React from 'react'
import { HashRouter, Route, Switch, BrowserRouter } from 'react-router-dom'
import Home from './home.js'
import Game from './game/game.js'

const BasicRoute = () => (
  <HashRouter history={BrowserRouter}>
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/" component={Game} />
    </Switch>
  </HashRouter>
)

export default BasicRoute
