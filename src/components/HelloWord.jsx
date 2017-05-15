import React from 'react';
import ReactDOM from 'react-dom';

import styles from './HelloWord.css';

class HelloWord extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Hello Word1'
        }
    }
    render() {
        return (
            <div>
                <h1 className={styles.app}>
                    {this.state.text}
                </h1>
            </div>
        )
    }
}

export default HelloWord;
