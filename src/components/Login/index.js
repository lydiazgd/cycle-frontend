import React,{Component} from 'react';
import './style.css';

export default class Login extends Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  item = {src:require('./image/shirt.jpg'),alt:'你好'};

  handleUsername(e) {
    this.setState({ username: e.target.value });
  }

  handlePassword(e) {
    this.setState({ password: e.target.value });
  }

  handleLogin() {
    fetch('/api/auth/login', {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      })
    })
    .then((resp) => {
      return resp.json();
    })
    .then((json) => {
      if (json.user) {
        console.log('login success', json);
        this.context.router.goBack();
      }
      else {
        console.log('login fail:', json);
      }
    })
    .catch((err) => {
      console.log('login error:', err);
    });
  }

  render() {
    return (
      <div>
        <div><p>Cycle</p></div>
        <hr/>
        <img src={this.item.src}/>
        <div className='tip'><p>Cycle</p><p>旧货交易</p></div>
        <div className="login">
          <label>用户名</label>
          <input type='text' value={this.state.username} onChange={this.handleUsername} placeholder='请输入用户名'/>
          <label>密码</label>
          <input type='password' value={this.state.password} onChange={this.handlePassword} placeholder='请输入密码'/>
          <button onClick={this.handleLogin}>登录</button>
        </div>
      </div>
      );
    }

  }