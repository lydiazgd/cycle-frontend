import React,{Component} from 'react';
import './style.css';

export default class Photo extends Component {
	constructor(props) {
		super(props);
	}
	pic =  {src:require('./image/7.jpeg'),alt:'nihao'};
	render(){
		return(
		<div className='photo'>
			<img src = {this.pic.src} alt = {this.pic.alt} />
		</div>
		);
	}
}