import React from 'react';
import { Button, Modal } from 'antd';

// import styles from './HelloWord.css';

class HelloWord extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Hello Word111'
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
            <Button type="primary" onClick={this.info.bind(this)} >Click me</Button>
          </div>
        )
    }
}

export default HelloWord;
