import React,{Component} from 'react';
export default class SliderDots extends Component{
	render(){
		return (
			<div className="dots">
				{
					this.props.images.map((image,index)=>(
						<span className="dot" onClick={this.props.turn(index-this.props.index)}>{index+1}</span>
					))
				}
			</div>
		)
	}
}