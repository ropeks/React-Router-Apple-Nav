import React from 'react';
import { Route } from 'react-router-dom';
import dummyData from './data';
import NavHeader from './components/NavHeader/NavHeader';
import SubNav from './components/SubNav/SubNav';
import isActiveTab from './components/HOCs/isActiveTab';
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
        <NavHeader data={this.state.data} select={this.props.select} />
        {
          this.props.active &&
          <Route exact path="/" component={SubNav} />
        }
        
      </div>
    );
  }
}

export default isActiveTab(App);
