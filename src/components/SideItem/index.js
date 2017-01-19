import React, {Component} from 'react';
import DropDown from '../DropDown';
import './style.css';


export default class SideItem extends Component {
	constructor(props) {
		super(props);
		
	}
	handleDropDown(){
		
		this.props.triggerDropDown();
	}
	render(){
	return(
			<ul>
				<li
				onClick={this.handleDropDown.bind(this)}><a href = "#">我的闲置</a></li>
				
			</ul>
		);
	}
}