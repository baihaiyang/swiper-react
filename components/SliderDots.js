import React,{Component} from 'react';
export default class SliderDots extends Component{
	render(){
		return (
			<div>
				{
					this.props.iamges.map((image,index)=>(
						<span>{index+1}</span>
					))
				}
			</div>
		)
	}
}