import React, { Component } from 'react';
import Square from './square';

class Board extends Component {
	constructor() {
		super();
		this.state = {
			squares: Array(9).fill(null),
			xIsNext: true,
		};
	}

	renderSquare(i) {
		return <Square name={i} value={this.state.squares[i]} onClick={() => this.handleClick(i)} />;
	}

	handleClick(i) {
		const squares = this.state.squares.slice();
		
		if(this.calculateWinner(squares) || squares[i]) {
			return;
		}

		squares[i] = this.state.xIsNext ? 'X' : 'O';
		this.setState({
			squares: squares,
			xIsNext: !this.state.xIsNext,
		});
	}

	refreshPage(e) {
		e.preventDefault();
		window.location.reload(true);
	}

	calculateWinner(squares) {
		const lines = [
			[0, 1, 2],
		    [3, 4, 5],
		    [6, 7, 8],
		    [0, 3, 6],
		    [1, 4, 7],
		    [2, 5, 8],
		    [0, 4, 8],
		    [2, 4, 6],		
		];

		for(let i = 0; i < lines.length; i++) {
			const [a, b, c] = lines[i];
			if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
				for(let j = 0; j < 3; j++) {
					document.getElementsByClassName("square" + lines[i][j])[0].style.backgroundColor = "#3CD070";
				}
				return squares[a];
			}
		}

		if(squares.every(x => x != null && (x === 'X' || x === 'O'))) {
			return 'D';	
		} else {
			return null;
		}
	}

	render() {
		const winner = this.calculateWinner(this.state.squares);
		let status;
		if(winner) {
			if(winner === 'D') {
				status = 'It was a draw!';
			} else {
				status = 'Winner is: ' + winner;
			}
		} else {
			status = 'Next Player to move is: ' + (this.state.xIsNext ? 'X' : 'O');
		}

		const x = 1;
		return (
			<div className="board">
				<div className="status">{status} \\ <a id="refresh" onClick={this.refreshPage.bind(this)}>Refresh (Click)</a></div>
				<div className="board-row">
					{this.renderSquare(x - 1)}
					{this.renderSquare(x)}
					{this.renderSquare(x + 1)}
				</div>
				<div className="board-row">
					{this.renderSquare(4 * x - 1)}
					{this.renderSquare(4 * x)}
					{this.renderSquare(4 * x + 1)}
				</div>
				<div className="board-row">
					{this.renderSquare(7 * x - 1)}
					{this.renderSquare(7 * x)}
					{this.renderSquare(7 * x + 1)}
				</div>
			</div>
		);
	}
}

export default Board;