import React, {Component} from 'react';
import './style.css';

export default class GalleryItem extends Component {
	constructor(props) {
		super(props);
	}
	width = 100/this.props.count+'%';
	render(){
		
		return (
			<li style={{width:this.width}}>
				<img 
				className = 'mainpic'
				src = {this.props.item.src} alt = {this.props.item.alt} />
			</li>
		);
	}
}