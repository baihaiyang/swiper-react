import React,{Component} from 'react';
export default class SliderItems extends Component{
	render(){
		return (
			<ul>
				{
					this.props.iamges.map((image,index)=>(
						<li><img src={image}/></li>
					))
				}
			</ul>
		)
	}
}