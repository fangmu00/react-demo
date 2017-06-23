import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';// AppContainer 是一个 HMR 必须的包裹(wrapper)组件

export const render = (Component, Id) => {
  ReactDOM.render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    document.getElementById(Id)
  );
};
