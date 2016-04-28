import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Diagram extends Component {
    render() {
        return (
            <div>
                Hello World!
            </div>
        );
    }
}

ReactDOM.render(<Diagram />, document.querySelector('#app'));