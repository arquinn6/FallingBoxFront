import React, {Component} from 'react'

class Player extends Component{
	constructor(props) {
		super(props)
		this.state = {
			leftKey : {
				counter : 0, 
			},
			rightKey : {
				counter : 0, 
			},
			upKey : {
				counter : 0, 
			},
			position : {
				leftMargin : 2.5,
				topMargin : 90,
			}
		}
	}
	
	onKeyDownHandler = (key) => {	
		let copy = this.state
		var el = document.getElementsByClassName('Player')
		console.log(el[0])
		switch (key) {
			case ('ArrowLeft'):
			case ('a'):
				copy.leftKey.counter += 1
				
				if (copy.position.leftMargin*2 > 5) {
					copy.position.leftMargin -= 1;
					el[0].style.left = copy.position.leftMargin*2+'%';
				}
				break
			case ('ArrowRight'):
			case ('d'):
				copy.rightKey.counter += 1
				
				if (copy.position.leftMargin*2 < 85) {
					copy.position.leftMargin += 1
					el[0].style.left = copy.position.leftMargin*2+'%'
				}
				break
			case ('ArrowUp'):
			case ('w'):
				copy.upKey.counter += 1
				if (copy.rightKey.counter > 0) {
					console.log("Jump Right");
					this.jumpRight();
				}
				if (copy.leftKey.counter > 0) {console.log("Jump Left");}
				copy.position.topMargin -= 1
				el[0].style.top = copy.position.topMargin*1+'%'
				break
			default: break
		}
		this.setState({ copy })
	}

	onKeyUpHandler = (key) => {
		let copy = this.state
		
		switch (key) {
			case ('ArrowLeft'):
			case ('a'):
				copy.leftKey.counter = 0
				break
			case ('ArrowRight'):
			case ('d'):
				copy.rightKey.counter = 0
				break
			case ('ArrowUp'):
			case ('w'):
				copy.upKey.counter = 0
				break
			default: break
		}
		
		this.setState({ copy })
	}
	
	jumpRight = () => {
		
	}
	
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