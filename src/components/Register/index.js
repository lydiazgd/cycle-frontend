import React, {Component} from 'react';
import './style.css';

export default class Register extends Component{
	static contextTypes = {
		router: React.PropTypes.object.isRequired
	}
	constructor(props){
		super(props);
		this.state = {
			username:'',
			password:'',
			repassword:'',
			email:'',
		}
		this.handleUsername=this.handleUsername.bind(this);
		this.handlePassword=this.handlePassword.bind(this);
		this.handleRepassword=this.handleRepassword.bind(this);
		this.handleEmail=this.handleEmail.bind(this);
		this.handleRegister=this.handleRegister.bind(this);
	}
	item = {src :require('./image/shirt.jpg'),alt:'你好'};
	
	handleUsername(e){
		this.setState({username:e.target.value});
	}
	handlePassword(e){
		this.setState({password:e.target.value});
	}
	handleRepassword(e){
		this.setState({repassword:e.target.value});
	}
	handleEmail(e){
		this.setState({email:e.target.value});
	}

	handleRegister(){
		if(this.state.password!==this.state.repassword)
			console.log('your password is not the same');
		fetch('/api/auth/register',{
			method:'POST',
			credentials:'same-origin',
			headers: {
				'Content-Type':'application/json'
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
			if(json.status==='success') {
				console.log('register success',json);
				this.context.router.push('/');
			}
			else {
				console.log('register fail',json);
			}
		})
		.catch((err) =>{
			console.log('register err',err);
		});
	}
	render(){
		return (
			<div>
				<div><h1>Cycle</h1></div>
				<hr/>
				<img src={this.item.src} alt={this.item.alt}/>
				<div className='tip'>
					<p>Cycle</p>
					<p>旧货交易</p>
				</div>
				<div className='register'>
					<input type='text' value={this.state.username} onChange={this.handleUsername}placeholder='请输入用户名'/>
					<input type='email' value={this.state.email} onChange={this.handleEmail}placeholder='请输入邮箱'/>
					<input type='password' value={this.state.password} onChange={this.handlePassword} placeholder='请输入密码'/>
					<input type='password' value={this.state.repassword} onChange={this.handleRepassword} placeholder='请再次输入密码'/>
					<button onClick={this.handleRegister}>注册</button>
				</div>

			</div>
		);
	}
}