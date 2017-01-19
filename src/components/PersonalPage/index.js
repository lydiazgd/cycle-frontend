import React, {Component} from 'react';
import SideBar from '../SideBar';
import Photo from '../Photo';
import Name from '../Name';
import CommentBox from '../CommentBox';
import './style.css';

export default class extends Component {
	constructor(props) {
		super(props);
	}
	render(){
		return(
		<div>
			<div className='personalpage'>
				<Photo />
				<Name />
				<SideBar />
			</div>
			<div className='buyerComment'>
				<CommentBox />
			</div>
		</div>

		);
	}
}