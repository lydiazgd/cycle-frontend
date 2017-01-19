import React, {Component} from 'react'


export default class SliderDots extends Component {
	constructor(props) {
		super(props);
	}

	handleDotClick(i){
		var option=i-this.prop.nowLocal;
		this.prop.turn(option);
	}
	render(){
		let dotNotes=[];
		let {count,nowLocal} = this.props;
		for(let i=0;i<count;i++){
			dotNotes[i]=(
				<span
					key={'dot'+i}
					className={"slide-dot"+(i===this.props.nowLocal?" slider-dot-selected":"")}
					onClick={this.handleDotClick.bind(this,i)}>
				</span>
			);
		}
		return (
			<div className="slider-dot-wrap">
				{dotNotes}
			</div>
		);
	}
}