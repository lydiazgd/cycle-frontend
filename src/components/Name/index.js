import React, {Component} from 'react';
import './style.css';

export default class Name extends Component {
	constructor(props) {
		super(props);
	}
	render(){
		return(
			<div className='name'>
				<span>我的名字</span>
			</div>
		);
	}
}