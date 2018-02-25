import React, { Component } from 'react';

// a controlled component that is used by Board
class Square extends Component {
	// class has no state as it's parent handles the state
	//     which then passes each state on render to this as props
	render() {
		return (
			<button className={"square" + this.props.name} onClick={() => this.props.onClick()}>
				{this.props.value}
			</button>
		)
	}
}

export default Square;