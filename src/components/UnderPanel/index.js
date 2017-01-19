import React, {Component} from 'react';
import './style.css';

export default class UnderPanel extends Component {
	constructor(props) {
		super(props);
	}
	render(){
		return (
		<div className = 'underpanel'>
			<div>
				<p>成 色:</p><span> 非全新</span>
			</div>
			<div>
				<p>所在地:</p><span> 北京昌平 昌平区</span>
			</div>
			<div>
				<p>联系方式: </p><span></span>
			</div>
			<div>
				<p>交易方式: </p><span></span>
			</div>
			
		</div>
		);
	}
}