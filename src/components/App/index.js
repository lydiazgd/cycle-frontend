import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from '../Nav';
import UserAuth from '../UserAuth';
import Register from '../Register';
import Login from '../Login';
import Commodity from '../Commodity';
import CommodityGrid from '../CommodityGrid';
import Gallery from '../Gallery';
import Slider from '../Slider';
import FrontHeader from '../FrontHeader';
import PersonalPage from '../PersonalPage';
import Publishment from '../Publishment';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <UserAuth location={this.props.location}/>
          <Nav />
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
