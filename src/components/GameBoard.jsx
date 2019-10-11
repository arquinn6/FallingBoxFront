import React, { Component } from 'react'
import board from '../GameSprites/GameBoard.png'
console.log(board);

class GameBoard extends Component{
    constructor(props){
        super(props)
        this.state={
            boardHeight: 0,
            boardWidth: 0
        }
    }
}