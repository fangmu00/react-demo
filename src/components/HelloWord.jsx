import React from 'react';
import { Button, Modal } from 'antd';

class HelloWord extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Hello Word'
        }
    }
    info() {
      Modal.info({
        title: 'Message',
        content: (
          <div>
            <p>{ this.state.text }</p>
          </div>
        ),
        onOk() {}
      });
    }
    render() {
        return (
          <div>
            <Button type="primary" onClick={this.info.bind(this)} >{ 'Click me1' }</Button>
          </div>
        )
    }
}

export default HelloWord;
