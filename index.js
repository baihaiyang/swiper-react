import React from 'react';
import ReactDOM from 'react-dom';
import Slider from 'components/index';
const images = {
	require("./images/1.jpg"),
	require("./images/2.jpg"),
	require("./images/3.jpg")
};
ReactDOM.render(
	<Slider images={images} arrow={true} dots={true} speed={1.2} auto={true}/>,
	document.querySelector('#root')
);