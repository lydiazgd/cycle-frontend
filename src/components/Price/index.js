import React, {Component} from 'react';
import './style.css';

export default class Price extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className = 'price'>
				<div>
					<p>转 卖 价</p><span>: &#165;300</span>
				</div>
				<div>
					<p>原    价</p><span>: &#165;800</span>
				</div>
			</div>
		);
	}
}