import React, { Component } from 'react';
import { Link } from 'react-router';

import './style.css';

export default class Nav extends Component {
  constructor(props){
      super(props);
    }
  items = ['书籍','电子产品','衣服','自行车'];
 
  render() {
    let itemNodes = this.items.map((item,idx)=>
       <li>
        <Link to="/">{item}</Link>
      </li>
    );
    return (
      <nav>
       <h1>Cycle</h1>
        <ul>
            {itemNodes} 
        </ul>
      </nav>
    );
  }
}
