import React, { Component } from 'react';
import classnames from 'classnames';

import './style.css';

class About extends Component {
  static propTypes = {}
  static defaultProps = {}
  state = {}

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('About', className)} {...props}>
        <h1>
          About
        </h1>
        <p> Built by Lydiazgd </p>
      </div>
    );
  }
}

export default About;