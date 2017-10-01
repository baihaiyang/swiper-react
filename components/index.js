import React,{Component} from 'react';
export default class Slider extends Component{
	render(){
		return (
			<div>
				<SliderItems images={this.props.images}/>
				{this.props.arrow ? <SliderArrows /> : null}
				{this.props.dots ? <SliderDots images={this.props.images}/> : null}
			</div>
		)
	}
}