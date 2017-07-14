import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';// AppContainer 是一个 HMR 必须的包裹(wrapper)组件
import Router from '../components/Router'

const render = (Component, Id) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById(Id)
  );
};

render(Router, 'App');

// 模块热替换的 API
if (module.hot) {
  module.hot.accept('../components/Router', () => {
    render(Router, 'App')
  });
}
