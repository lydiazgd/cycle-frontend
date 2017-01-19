import React, { Component } from 'react';
import { Link } from 'react-router';
import './style.css';

class UserAtuh extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    }
    this.getStatus = this.getStatus.bind(this);
    this.logout = this.logout.bind(this);
  }

  getStatus() {
    fetch('/api/auth/status', {
      credentials: 'same-origin'
    })
    .then((resp) => {
      return resp.json();
    })
    .then((json) => {
      this.setState({ user: json.user});
    })
  }

  logout() {
    fetch('/api/auth/logout',{
      method:'GET',
      credentials:'same-origin',
    })
    .then((resp) =>{
      return resp.json();
    })
    .then((json) =>{
      if(json.status=='success')
        this.setState({user:null});
    })
    .catch((err) => {
      console.log('logout',err)
    });
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.location);
    if (nextProps.location !== this.props.location && this.props.location.pathname === '/login') {
      this.getStatus();
    }
  }

  componentDidMount() {
    this.getStatus();
  }

  render() {
    return (
        <div className='outline'>
          <div>
            <p>您好，欢迎光临 Cycle</p>
            {
              this.state.user ? 
              [ 
                <p key="user"><Link to={"/user/" + this.state.user}> {this.state.user} </Link></p>,
                <p key="logout" onClick={this.logout}><Link>退出</Link></p>
              ]
              : [ 
                <p key="login"><Link to="/login">登录</Link></p> ,
                <p key="register"><Link to="/register">注册</Link></p>
              ] 
            }
          </div>
        </div>
        );
    }
}

export default UserAtuh;
