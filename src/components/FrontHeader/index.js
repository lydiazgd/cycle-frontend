import React, {Component} from 'react';
import Price from '../Price';
import './style.css';


export default class FrontHeader extends Component {
	constructor(props) {
		super(props);
	}
	render(){
		return (
			<div className = 'frontheader'>
				<h2>文字及商品描述</h2>
				<Price />
			</div>
		);
	}
}