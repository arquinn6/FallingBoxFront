import React, {Component} from 'react'
import playerObject from '../GameSprites/PlayerCharacter.png'
import './Player.css'

class Player extends Component{
	constructor(props) {
		super(props)
		this.state = {
			left: false,
			right: false,
			up: false,
			player : {
				left: '50%',
				leftVelocity: 0,
				top: '90%',
				topVelocity: 0
			},
			//player: document.getElementsByClassName('Player')[0],
			
			
			// leftKey : {
				// counter : 0, 
			// },
			// rightKey : {
				// counter : 0, 
			// },
			// upKey : {
				// counter : 0, 
			// },
			// position : {
				// leftMargin : 50,
				// topMargin : 75,
			// }
		}
	}
	
	KeyChange = (e) => {
		var keyState = e.type === 'keydown' ? true : false
		switch (e.code) {
			case 'ArrowUp':
			case 'w':
				this.setState({up: keyState})
				break;
			case 'ArrowRight':
			case 'd':
				this.setState({right: keyState})
				break;
			case 'ArrowLeft':
			case 'a':
				this.setState({left: keyState})
				break;
			default: break;
		}
	}
	
	loop = () => {
		let copy = this.state
		//window.requestAnimationFrame(this.loop)
		if (copy.up && copy.player.style.jumping === false) {
			console.log(copy.player.style)
			console.log("Jump!")
			copy.player.style.topVelocity -= 20
			copy.player.style.jumping = true
		}
		if (copy.left) {
			copy.player.leftVelocity -= .5
			console.log("left")
		}
		if (copy.right) {
			copy.player.leftVelocity += .5
			console.log("right")
		}

		copy.player.style.topVelocity += 1.5
		copy.player.style.left = (copy.player.style.leftVelocity + copy.player.style.left) + '%'
		copy.player.style.top = (copy.player.style.topVelocity + copy.player.style.top) + '%'
		copy.player.style.leftVelocity *= .9
		copy.player.style.topVelocity *= .9
		
		
		this.setState(copy)
	}

	

	// onKeyDownHandler = (key) => {	
		// let copy = this.state
		// var el = document.getElementsByClassName('Player')[0]
		
		// switch (key) {
			// case ('ArrowLeft'):
			// case ('a'):
				// copy.leftKey.counter += 1
				// if (copy.position.leftMargin > 5) {
					// copy.position.leftMargin -= 5;
					// el.style.left = copy.position.leftMargin+'%';
				// }
				// break
			// case ('ArrowRight'):
			// case ('d'):
				// copy.rightKey.counter += 1
				
				// if (copy.position.leftMargin < 90) {
					// copy.position.leftMargin += 5
					// el.style.left = copy.position.leftMargin+'%'
				// }
				// break
			// case ('ArrowUp'):
			// case ('w'):
				// copy.upKey.counter += 1
				// if (copy.rightKey.counter > 0) {
					// this.jumpRight(el, copy)
				// }
				// if (copy.leftKey.counter > 0) {
					// this.jumpLeft(el, copy)
				// }
				// copy.position.topMargin -= 5
				// el.style.top = copy.position.topMargin*1+'%'
				// break
			// default: break
		// }
		// this.setState({ copy })
	// }

	// onKeyUpHandler = (key) => {
		// let copy = this.state
		
		// switch (key) {
			// case ('ArrowLeft'):
			// case ('a'):
				// copy.leftKey.counter = 0
				// break
			// case ('ArrowRight'):
			// case ('d'):
				// copy.rightKey.counter = 0
				// break
			// case ('ArrowUp'):
			// case ('w'):
				// copy.upKey.counter = 0
				// break
			// default: break
		// }
		
		// this.setState({ copy })
	// }

	
	// jumpRight = (el, copy) => {
		// var i = 0
		// setTimeout(function () {
			
			// if (i < 10) {
				// if (copy.position.leftMargin < 90) { copy.position.leftMargin += i }
				// copy.position.topMargin -= 5
				// el.style.top = copy.position.topMargin+'%'
				// el.style.left = copy.position.leftMargin+'%'
				
		// }i++}, 100)
		
	// }
	
	// jumpLeft = (el, copy) => {
		
		// // for (var i = 0; i < 5; i++) {
			// // console.log(i)
			// // el.style.pos
			// // if (copy.position.leftMargin > 5) { copy.position.leftMargin -= i}
			// // copy.position.topMargin -= 1
			// // el.style.left = copy.position.leftMargin+'%'
			// // el.style.top = copy.position.topMargin+'%'
		// // }
		
	// }
	
	componentDidMount() {
		window.addEventListener('keydown', this.KeyChange)
		window.addEventListener('keyup', this.KeyChange)
		window.requestAnimationFrame(this.loop)
		this.setState({player : document.getElementsByClassName('Player')[0]})
	}
	
    render () {
		return (
			<div className="Player" 
				style={{
					jumping: false,
					left:this.state.player.left, 
					top:this.state.player.top,
					leftVelocity:this.state.player.leftVelocity,
					topVelocity:this.state.player.topVelocity
				}}
				//onKeyChange={event => this.onKeyChange(event.key)}
				//onKeyDown={event => this.onKeyDownHandler(event.key)}
				//onKeyUp={event => this.onKeyUpHandler(event.key)}
				tabIndex="0">
				<img src={playerObject} className="playerObject" alt="playerObject"/>
			</div>
		)
	}
}

export default Player