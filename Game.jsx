import React from 'react';

const Game=React.createClass({
	render(){
		let props=this.props;
		
		const displayTotalBlocks=props.totalBlocks.map(function(bl) {
			return(
				<div className={'blocks '+ (props.selected.indexOf(bl)!=-1 ? 'colors' : 'nocolor' )} key={bl}>{bl}</div>
			);
		})
		return(
			<div className='gameStart'>				
				{displayTotalBlocks}
			</div>
		);
	}

})


class GameContainer extends React.Component{
	
	constructor(props){		
		super(props);
		this.state={result:{}};
	}

	render(){
		// let totalBlocks=[{
		// 	display:1,
		// 	alpha:1
		// },{
		// 	display:2,
		// 	alpha:2
		// },{
		// 	display:3,
		// 	alpha:3
		// },{
		// 	display:4,
		// 	alpha:4
		// },{
		// 	display:5,
		// 	alpha:5
		// },{
		// 	display:6,
		// 	alpha:6
		// },{
		// 	display:7,
		// 	alpha:7
		// },{
		// 	display:8,
		// 	alpha:8
		// },{
		// 	display:9,
		// 	alpha:9
		// }];

		// let arraySelectedBoxes=[{
		// 	display:2,
		// 	alpha:2
		// },{
		// 	display:5,
		// 	alpha:5
		// },{
		// 	display:9,
		// 	alpha:9
		// }];

		let totalBlocks1=[1,2,3,4,5,6,7,8,9],arraySelectedBoxes1=[3,5,9];


		return(
			<div className='GameContainer'>
				<Game selected={arraySelectedBoxes1} totalBlocks={totalBlocks1}></Game>	
			</div>
		)
	}


}

export default GameContainer;