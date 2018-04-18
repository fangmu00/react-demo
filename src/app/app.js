import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router'

const render = (Component) => {
  ReactDOM.render(
    <Component />,
    document.getElementById('App')
  );
};

render(Router);

