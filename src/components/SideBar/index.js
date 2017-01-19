import React, {Component} from 'react';
import SideItem from '../SideItem';
import PublishCommodity from '../PublishCommodity';
import DropDown from '../DropDown';
import './style.css';

export default class SideBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			show:false,
		};
		this.overDropDown=this.overDropDown.bind(this);
	}
	triggerDropDown(){
		console.log('a');
		this.setState({show:true});
		document.addEventListener('click',this.overDropDown);
	}
	overDropDown(){
		this.setState({show:false});
		document.removeEventListener('click',this.overDropDown);
	}
	
	render(){
		return (
			<div className = 'sidebar'>
				<SideItem  overDropDown={this.overDropDown.bind(this)} triggerDropDown={this.triggerDropDown.bind(this)} show={this.state.show}/>
				<DropDown show={this.state.show}/>
				<PublishCommodity />
				
			</div>
		);
	}
}