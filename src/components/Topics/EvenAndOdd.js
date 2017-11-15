import React, { Component } from 'react';

export default class EvenAndOdd extends Component {
    constructor() {
        super();

        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }
    handleChange(val){
        this.setState({userInput: val})
    }
    solveArrays() {
        var stringToArray = this.state.userInput.split(",").map(Number);
        var odds = [];
        const evens = stringToArray.filter((e) => {
            if(e % 2 === 0) {
                return true;
            } else {
                odds.push(e)
            }
            return evens;
        })
        this.setState({evenArray: evens, oddArray: odds})
    }
    render() {
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input 
                type="text" 
                className="inputLine"
                onChange={(e) => this.handleChange(e.target.value)}
                />
                <button 
                className="confirmationButton"
                onClick={() => this.solveArrays()}
                >Split</button>
                <span className="resultsBox"> Evens: {JSON.stringify(this.state.evenArray)} </span>
                <span className="resultsBox"> Odds: {JSON.stringify(this.state.oddArray)} </span>
            </div>
        )
    }
}