import React from 'react';
import dummyData from './data';
import NavHeader from './components/NavHeader/NavHeader';
import './App.css';

const data = dummyData;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: data
    }
  }

  render() {
    return (
      <div className="app">
        <NavHeader data={this.state.data} />
      </div>
    );
  }
}

export default App;
