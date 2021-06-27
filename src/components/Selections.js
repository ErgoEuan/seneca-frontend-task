import React, { Component } from "react";
import Selection from './Selection';

export default class Selections extends Component {

    constructor() {
        super();
        this.state = {
          };
    }

    componentDidMount() {
        this.buildState(this.props)
    }

    buildState() {
        const questionNumber = this.props.questionNumber;
        const amountOptions = (this.props.selections).length;
        for ( let i = 0; i < amountOptions; i++) {
            const selectionKey = "sKey" + questionNumber + i;
            this.setState({
                [selectionKey]: null,
            });
        }
    }

    onChangeValue = (event) => {
        const key = (event.target.value);
        const question = key.substring(0, 1);
        const group = key.substring(1, 2);
        const option = key.substring(2, 3);
        const selectionKey = "sKey" + question + group;
        const value = this.props.selections[group].Options[option].isValid

        this.setState({
            [selectionKey]: value,
        }, () => {this.checkCompletion()});
    }

    checkCompletion = () => {
        console.log((this.props.selections).length);
        // console.log(this.state.sKey00);
        this.props.completion(0);
        
    }

    render() {  
        return this.props.selections.map((selection, i) => (
            <div className="selection-container" key={i}>
                <div className="selection" onChange={this.onChangeValue}>
                    <Selection groupNumber={"" + this.props.questionNumber + i} 
                    selection={selection}/>
                </div>
            </div>
        ));
    }
}