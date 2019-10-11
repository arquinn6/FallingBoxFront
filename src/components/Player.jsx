import React, {Component} from 'react'

class Player extends Component{
    render () {
		return (
			<div
				tabIndex={-1}
				onKeyDown={event => this.onKeyDownHandler(event.key)}
				onKeyUp={event => this.onKeyUpHandler(event.key)}>
			</div>
		)
	}
}

export default Player