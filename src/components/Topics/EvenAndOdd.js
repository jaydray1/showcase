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
    render() {
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input 
                type="text" 
                className="inputLine"
                onChange={(e) => this.handleChange(e.target.value)}
                />
                <button className="confirmationButton"></button>
                <span className="resultsBox"></span>
                <span className="resultsBox"></span>
            </div>
        )
    }
}