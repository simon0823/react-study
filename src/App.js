import React, {Component, Fragment} from 'react';
import Counter from './Counter';
import './App.css';

class App extends Component {
  render() {
    return (
        <Fragment>
          <div className="App"> Hello World! </div>
          <Counter/>
        </Fragment>
    )
  }
}

export default App;
