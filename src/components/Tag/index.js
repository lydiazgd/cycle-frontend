import React, {Component} from 'react';
import DetailPanel from '../DetailPanel';
import MessagePanel from '../MessagePanel';
import './style.css';

export default class Tag extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nowLocal:'first',
		}
	}
	
	handleFirstPanel(){
		this.setState({nowLocal:'first'});
	}
	handleSecondPanel(){
		this.setState({nowLocal:'second'});
		
	}
	render(){
		return (
	<div>
		<div className = 'tag'>
			<ul>
				<li
				onClick={this.handleFirstPanel.bind(this)}
				className={this.state.nowLocal =='first'?'first':null}>宝贝详情</li>
				<li
				onClick={this.handleSecondPanel.bind(this)}
				className={this.state.nowLocal =='second'?'second':null}>留言</li>
			</ul>
			
		</div>
		<div className = 'panel'>
			{this.state.nowLocal=='first'?<DetailPanel />:<MessagePanel /> }
		</div>
	</div>
		);
	}
}