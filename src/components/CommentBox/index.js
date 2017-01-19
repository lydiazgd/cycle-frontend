import React, {Component} from 'react';
import Comment from '../Comment';
import './style.css';

export default class CommentBox extends Component {
	constructor(props) {
		super(props);
		this.state = {
			comments: [],
			input_author: '',
			input_text: '',
		};
	}

	handleAuthorChange(e) {
		this.setState({ input_author: e.target.value});
	}

	handleTextChange(e) {
		this.setState({ input_text: e.target.value});
	}

	handleSubmit(){
		this.setState({ 
			comments: [...this.state.comments, { author: this.state.input_author, text: this.state.input_text }] ,
			input_text: ''
		});
	}
	
	render() {
		
		return (
			<div className='commentbox'>
				<div className='tipTag'><p>评论区</p></div>
				<div className ='comment'>
					{
						this.state.comments.map((elem, idx) => 
							<Comment key={'comment_' + idx} author={elem.author} text={elem.text} />
						)
					}
				</div>
				<input value={this.state.input_author} onChange={this.handleAuthorChange.bind(this)} type = 'text' placeholder = '输入您的用户名' />
				<textarea value={this.state.input_text} onChange={this.handleTextChange.bind(this)} placeholder = '说点什么吧'></textarea>
			    <button onClick={this.handleSubmit.bind(this)}>提交</button>
				
			</div>
		);
	}
}