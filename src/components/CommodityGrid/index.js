import React, {Component} from 'react';
import Commodity from '../Commodity';
import './style.css';

	export default class CommodityGrid extends Component {
		constructor(props){
			super(props);
		}
		items = [{src:require('./image/shirt.jpg'),alt:'你好'},{src:require('./image/7.jpeg'),alt:'你好'},{src:require('./image/8.jpeg'),alt:'你好'},{src:require('./image/9.jpeg'),alt:'你好'},{src:require('./image/10.jpeg'),alt:'你好'},{src:require('./image/shirt.jpg'),alt:'你好'},{src:require('./image/7.jpeg'),alt:'你好'}];
	    imgs=this.items.map((item)=>{
	    	return <Commodity item = {item} />;
	    });
		render(){
			
			return (
				<div className = 'list'>
					<ul>
					{this.imgs}
					</ul>
				</div>
		   );
		}
	}