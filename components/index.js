import React,{Component} from 'react';
export default class Slider extends Component{
	render(){
		return (
			<div>
				<SliderItems images={this.props.images}/>
				<SliderArrows />
				<SliderDots images={this.props.images}/>
			</div>
		)
	}
}