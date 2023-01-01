import React, { Component } from 'react';
import Board from './board';

class TicTacToe extends Component {

	// create the initial state filled with elements
	constructor(props) {
		super(props);
		this.state = {}
	}

	// main render function used to display the logic of the app
	render() {
		return (
			<div id="wrapper">
				<div id="header">
	                <h2>Tic Tac Toe!</h2>
	                <div className="returnLink">
	                	<a id="link" href="https://luicrowie.me/portfolio/apps">&lt;-- return to app central</a>
                	</div>
	            </div>
				<Board />
				<div id="footer">Everything is Created, Updated and Written by Lui Crowie - all rights reserved</div>
			</div>
		)
	}
}

export default TicTacToe;