import React, { Component } from "react";
import PropTypes from 'prop-types';

export default class RadioGroup extends Component {

    state = { 
        selectedOption: false,
    }

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
                />
            </>
        );
    }
}

const Group = (props) => {
    return (
        <div className="radioGroup">
            <div className={`selectedSlider ${props.selectedOption}`}></div>
            <Radio
                id={`${props.groupNumber}firstRadio`}
                group={props.groupNumber}
                value={props.groupNumber + "0left"}
                label={props.options[0].text}
                isSelected={props.selectedOption === "left"}
                handleInputChange={props.handleInputChange}
            />
            <Radio
                id={`${props.groupNumber}SecondRadio`}
                group={props.groupNumber}
                value={props.groupNumber + "1right"}
                label={props.options[1].text}
                isSelected={props.selectedOption === "right"}
                handleInputChange={props.handleInputChange} 
            />
        </div>
    )
}

const Radio = (props) =>  {
    return(
      <>
        <input 
            type="radio" 
            id={props.id} 
            name={props.group}
            value={props.value}  
            onChange={() => props.handleInputChange(props.value)}
            checked={props.isSelected} 
        />
        <label htmlFor={props.id}>
            {props.label}
        </label>
      </>
    );
}

RadioGroup.propTypes = {
    groupNumber: PropTypes.string.isRequired,
    selection: PropTypes.object.isRequired,
}