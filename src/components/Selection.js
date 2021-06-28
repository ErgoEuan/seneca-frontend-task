import React, { Component } from "react";
import PropTypes from 'prop-types';

export default class Selection extends Component {
    render() { 
        return this.props.selection.Options.map((option, i) => (
            <label key={i} className="radio-label">
                <input className="radio-input" type="radio"
                value={this.props.groupNumber + i} 
                name={this.props.groupNumber}/>
                {option.text}
            </label>
        ));
    }
}

Selection.propTypes = {
    groupNumber: PropTypes.string.isRequired,
    selection: PropTypes.object.isRequired,
}
