import React, {Component} from 'react';
import './style.css';


export default class extends Component {
	constructor(props) {
		super(props);
	}
	render(){
		return (
		<div className='publishment'>
			<form role='form' encType='multipart/form-data' method='POST'>
				<div>
					<label htmlFor='fieldPhoto'>发布商品</label>
					<input type='file' name='photo' />
				</div>
				<div>
					<label htmlFor='commodityprice'>宝贝价格</label>
					<input name='price' />
				</div>
				<label htmlFor='fineness'>宝贝成色</label>
				<div>
					<div><input type='radio' name='new' value='全新'/><span>全新</span></div>
					<div><input type='radio' name='old' value='非全新'/><span>非全新</span></div>
				</div>
		        <label>分类</label>	
			    <textarea placeholder='发布宝贝描述'></textarea>
			</form>
		</div>
		);
	}
}