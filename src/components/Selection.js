import React, { Component } from "react";

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