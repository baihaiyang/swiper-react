import React,{Component} from 'react';
export default class Slider extends Component{
	constructor(){
		super();
		this.state = {index: 0};
	}
	componentDidMount(){
		if(this.props.auto){
			this.go();
		}
	}
	go = ()=>{
		this.timer = setInterval(()=>{
			this.turn(1);
		},this.props.delay * 1000);
	}
	turn = (step)=>{
		let index = this.state.index;
		index += step;
		this.setState({index});
	}
	render(){
		return (
			<div>
				<SliderItems index={this.state.index} images={this.props.images}/>
				{this.props.arrow ? <SliderArrows /> : null}
				{this.props.dots ? <SliderDots images={this.props.images}/> : null}
			</div>
		)
	}
}