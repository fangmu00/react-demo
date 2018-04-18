import React from 'react'
import { Provider } from 'react-redux';
import { BrowserRouter as Router,Route,Link } from 'react-router-dom'

import store from './store';
import Home from '../pages/home';
import Page1 from '../pages/page1';
import Page2 from '../pages/page2';

const Basic = () => (
  <Provider store={store}>
    <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/page1">Page1</Link></li>
          <li><Link to="/page2">Page2</Link></li>
        </ul>

        <hr  />

        <Route exact path="/" component={Home}  />
        <Route path="/page1" component={Page1}  />
        <Route path="/page2" component={Page2}  />
      </div>
    </Router>
  </Provider>
)

export default Basic;
