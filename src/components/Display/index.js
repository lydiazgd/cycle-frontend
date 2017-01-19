import React, {Component} from 'react';
import './style.css';

export default class Display extends Component {
	constructor(props) {
		super(props);
	}
	item = [{src:require('./image/7.jpeg')},{src:require('./image/8.jpeg'),alt:'ab'},{src:require('./image/9.jpeg'),alt:'ab'},{src:require('./image/10.jpeg'),alt:'ab'}];
	handlePlay(n){
		var option = n-this.props.nowLocal;
		this.props.play(option);
		
	}
	dots = [];
	render(){
		
		for(var i=0;i<this.item.length;i++){
			this.dots[i] = (
				<li
				key = {'dot'+i}
				onClick = {this.handlePlay.bind(this,i)}>
					<img src = {this.item[i].src} alt = {this.item[i].alt} />
				</li>
			);
		}
		return (
			<div className = 'display'>
				<ul>
					{this.dots}
				</ul>
			</div>
		);
	}
}