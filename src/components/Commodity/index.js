import React,{Component} from 'react';
import { Link } from 'react-router';
import './style.css';

export default class Commodity extends Component {
	constructor(props){
		super(props);
	}
	width=(window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth)/6;
	render(){
	
		return (
		<div className = 'commodity'>
				<li
				style={{'width':this.width}}>
					<Link to = '/'><img src={this.props.item.src} alt={this.props.item.alt}/></Link>
					<div>
					<Link to = '/'>文字描述</Link>
					<span>&#165;199</span>
					</div>
				</li>
		</div>
		);
	}
}