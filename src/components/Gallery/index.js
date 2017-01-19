import React, { Component } from 'react';
import GalleryItem from '../GalleryItem';
import Display from '../Display';
import FrontHeader from '../FrontHeader';
import UnderPanel from '../UnderPanel';
import Tag from '../Tag';
import CommentBox from '../CommentBox';
import './style.css';

export default class Gallery extends Component {
	constructor(props) {
		super(props);
		this.state={
			nowLocal:0,
		};
	}
	items = [{src:require('./image/7.jpeg')},{src:require('./image/8.jpeg'),alt:'ab'},{src:require('./image/9.jpeg'),alt:'ab'},{src:require('./image/10.jpeg'),alt:'ab'}];
	count = this.items.length;
	autoPlay = true;
	autoPlayFlag = null;
	play(n){
		var _n = this.state.nowLocal+n;
		if(_n<0)
			_n=_n+this.items.length;
		if(_n>=this.items.length)
			_n = _n-this.items.length;
		this.setState({nowLocal:_n});
	}
	goPlay(){
		if(this.autoPlay){
			this.autoPlayFlag = setInterval(()=>{
				this.play(1);
			},2000);
		}
	}
	pausePlay(){
		clearInterval(this.autoPlayFlag);
	}
	itemNodes = this.items.map((item)=>{
		return <GalleryItem play={this.play.bind(this)} count = {this.count} item = {item} />;
	});
	
	render(){
		
		return(
		<div>
			<div
				className = 'gallery'
				onMouseOver={this.pausePlay.bind(this)}
				>
				<ul
				style = {{
					left:-100*this.state.nowLocal+'%',
					transitionDuration:1+'s',
					width:this.items.length*100+'%',

                }}>
					{this.itemNodes}
				</ul>
			</div>
		<div>
			<Display play = {this.play.bind(this)} pausePlay ={this.pausePlay.bind(this)} nowLocal = {this.state.nowLocal}/>
		</div>
		<div>
			<FrontHeader />;
		</div>
		<div>
			<UnderPanel />
		</div>
		<div>
			<Tag />
		</div>
		<div>
			<CommentBox />
		</div>
	</div>
		);
	}
}
