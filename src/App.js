import React, {Component, Fragment} from 'react';
import Name from './props/Name';
import Counter from './state/Counter';
import './App.css';

class App extends Component {
  render() {
    return (
        <Fragment>
          <div className="App"> Hello World! </div>
          <Name name='Ryu'/>
          <Counter/>
        </Fragment>
    );
  }
}

export default App;
