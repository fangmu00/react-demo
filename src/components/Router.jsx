import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import HelloWord from '../components/HelloWord';

export default React.createClass({
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route path="/" component={HelloWord} />
        </BrowserRouter>
      </div>
    )
  }
})

