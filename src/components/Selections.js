import React, { Component } from 'react';
import RadioGroup from './RadioGroup';
import PropTypes from 'prop-types';

// Component for all the selections in a question
export default class Selections extends Component {

    constructor() {
        super();
        // Default state of the component
        this.state = {
            lock: false,
          };
    }

    // Prop called function to update the state in correspondence with the 
    // random toggle selection within the child component
    updateSelection = (key) => {
        const question = key.substring(0, 1);
        const group = key.substring(1, 2);
        const option = key.substring(2, 3);
        const selectionKey = 'sKey' + question + group;
        const value = this.props.selections[group].Options[option].isValid
        this.setState({
            [selectionKey]: value,
        }, () => {this.checkCompletion()});
    }

    // Function to update the state in result to an onChange of a toggle
    onChangeValue = (event) => {
        const key = (event.target.value).substring(0, 3);
        const question = key.substring(0, 1);
        const group = key.substring(1, 2);
        const option = key.substring(2, 3);
        const selectionKey = 'sKey' + question + group;
        const value = this.props.selections[group].Options[option].isValid
        this.setState({
            [selectionKey]: value,
        }, () => {this.checkCompletion()});
    }

    // Function to determine the completion of a question
    // Passing props to update gradient and lock selections accordingly
    checkCompletion = () => {
        const amountOptions = (this.props.selections).length;
        const question = this.props.questionNumber;
        let counter = 0;
        for ( let i = 0; i < amountOptions; i++) {
            let key = 'sKey' + question + i;
            if (this.state[key] === true) {
                counter = counter + 1;
            }
        }
        let percent = counter/amountOptions;
        this.props.completion(percent);
        if (percent === 1) {
            this.setState({
                lock: true,
            });
        }
    }

    render() {  
        return this.props.selections.map((selection, i) => (
            <div className='selectionContainer' onChange={this.onChangeValue} key={i}>
                <RadioGroup 
                    groupNumber={'' + this.props.questionNumber + i}
                    selection={selection}
                    lock={this.state.lock}
                    updateSelection={this.updateSelection}
                />
            </div>
        ));
    }
}

Selections.propTypes = {
    questionNumber: PropTypes.number.isRequired,
    selections: PropTypes.array.isRequired,
    completion: PropTypes.func.isRequired,
}
