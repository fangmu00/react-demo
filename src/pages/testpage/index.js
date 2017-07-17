import { render } from '../../app/utils';
import Test from './testpage';

render(Test, 'App');

// 模块热替换的 API
if (module.hot) {
  module.hot.accept('./testpage', () => {
    render(Test, 'App')
  });
}
