import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Component for a radio group toggle
export default class RadioGroup extends Component {

    constructor() {
        super();
        // Default state of the component
        this.state = {
            selectedOption: null,
          };
    }

    componentDidMount() {
        // Function required on componentDidMount
        this.togglePreSelector()
    }

    // Function for random toggle selection 
    togglePreSelector = () => {
        const selection = Math.floor(Math.random() * 2)
        const key = this.props.groupNumber + selection

        // Updates the state to the selected toggle position
        if (selection === 0) {
            this.setState({
                selectedOption: 'left',
            });
        }
        else {
            this.setState({
                selectedOption: 'right',
            });
        }

        // Prop function call to update the state in the parent component in
        // correspondence with the random toggle selection 
        this.props.updateSelection(key)
    }

    // Updates the toggle position
    handleInputChange = (value) => {
        const state = (value).substring(3, 8)
        this.setState({
            selectedOption: state
        });
    };

    render() {
        return (
            <>
                <Group
                    groupNumber={this.props.groupNumber}
                    selectedOption={this.state.selectedOption}
                    handleInputChange={this.handleInputChange} 
                    options={this.props.selection.Options}
                    lock={this.props.lock}
                />
            </>
        );
    }
}

// Radio group for the two options in the toggle
const Group = (props) => {
    return (
        <div className='radioGroup'>
            <div className={`selectedSlider ${props.selectedOption}`}></div>
            <Radio
                id={`${props.groupNumber}firstRadio`}
                group={props.groupNumber}
                value={props.groupNumber + '0left'}
                label={props.options[0].text}
                isSelected={props.selectedOption === 'left'}
                handleInputChange={props.handleInputChange}
                lock={props.lock}
            />
            <Radio
                id={`${props.groupNumber}SecondRadio`}
                group={props.groupNumber}
                value={props.groupNumber + '1right'}
                label={props.options[1].text}
                isSelected={props.selectedOption === 'right'}
                handleInputChange={props.handleInputChange} 
                lock={props.lock}
            />
        </div>
    )
}

const Radio = (props) =>  {
    return(
      <>
        <input 
            type='radio' 
            id={props.id} 
            name={props.group}
            value={props.value}  
            onChange={() => props.handleInputChange(props.value)}
            checked={props.isSelected} 
            disabled={props.lock}
        />
        <label htmlFor={props.id} style={{ cursor: [props.lock ? 'default' : 'pointer']}}>
            {props.label}
        </label>
      </>
    );
}

RadioGroup.propTypes = {
    groupNumber: PropTypes.string.isRequired,
    selection: PropTypes.object.isRequired,
    lock: PropTypes.bool.isRequired,
    updateSelection: PropTypes.func.isRequired,
}