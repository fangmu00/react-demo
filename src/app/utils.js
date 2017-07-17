import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';// AppContainer 是一个 HMR 必须的包裹(wrapper)组件

export const render = (Component, Id, dir) => {
  ReactDOM.render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    document.getElementById(Id)
  );
    // 模块热替换的 API
  if (module.hot) {
    module.hot.accept(dir, () => {
      render(Component, Id)
    });
  }
};
