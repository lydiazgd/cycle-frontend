import React, {Component} from 'react';
import './style.css';


export default class Comment extends Component {
	
	render(){
		return(
			<div className='each-comment'> <div><p>{this.props.author}</p></div> <div><p>{this.props.text}</p></div></div>
		);
	}
}