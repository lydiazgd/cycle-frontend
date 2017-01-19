import React,{Component} from 'react';
import './style.css';

export default class DropDown extends Component {
	constructor(props) {
		super(props);
	}
	items= [{name:'出售中',value:'0'},{name:'交易中',value:'0'},{name:'新留言',value:'0'},{name:'新会话',value:'0'}];
	listDots = [];
	
	render(){
		for(var i=0;i<this.items.length;i++){
			this.listDots[i]=(
				<li>{this.items[i].name}<span>{this.items[i].value}</span></li>
			);
		}
		return(
		<div className={'dropdown'+(this.props.show?'show':'')}>
			<ul>
				{this.listDots}
			</ul>
		</div>
		);
	}
}