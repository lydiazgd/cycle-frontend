import React,{Component} from 'react';
import {Link} from 'react-router';
import './style.css';

export default class PublishCommodity extends Component {
	constructor(props) {
		super(props);
	}
	render(){
		return(
			<div className='publishcommodity'>
				<ul>
					<li><Link to='/Publishment'>发布宝贝</Link></li>
				</ul>
			</div>
		);
	}
}