import React from 'react';
import ReactDOM from 'react-dom';

import Game from './Game.js';
import DifficultyScreen from './DifficultyScreen.js'

class Home extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			row_number: null,
			column_number: null,
			mine_number: null
		};
	}

	handleClick = (difficulty) => {
		let { row_number, column_number, mine_number } = difficulty;
		this.setState({ row_number, column_number, mine_number });
	};

	updateDimensions = () =>
		this.setState({
			width: window.innerWidth,
			height: window.innerHeight
		});

	componentWillMount() {
		this.updateDimensions();
	}

	componentDidMount() {
		window.addEventListener('resize', this.updateDimensions);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateDimensions);
	}

	render() {
		return (
			<div className="Home">
				{!(this.state.row_number && this.state.column_number && this.state.mine_number)
					? <DifficultyScreen
						onClick={this.handleClick} />
					: <Game
						row_number={this.state.row_number}
						column_number={this.state.column_number}
						mine_number={this.state.mine_number}
						width={this.state.width}
						height={this.state.height} />
				}
			</div>
		);
	}
}

ReactDOM.render(
	<Home />,
	document.getElementById('root')
);
