import React from 'react'
import { Router, Route, hashHistory } from 'react-router'

import Indexpage from './containers/Indexpage'
import Manage from './containers/Manage'
import User from './containers/User'
import Maps from './containers/Maps'

const App = () => (
    <Router history={hashHistory}>
        <Router path="/" component={Indexpage} />
        <Router path="/manage" component={Manage} />
        <Router path="/user" component={User} />        
        <Router path="/maps" component={Maps} />
    </Router>
)

export default App