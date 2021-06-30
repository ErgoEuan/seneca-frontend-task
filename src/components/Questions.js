import React, {Component} from 'react';
import Question from './Question';
import PropTypes from 'prop-types';

// Separate each question in the dataset  
export default class Questions extends Component {
    render() {
        return this.props.questions.map((question, i) => (
            <Question key={i} question={question} questionNumber={i}/>
        ));
    }
}

Questions.propTypes = {
    questions: PropTypes.array.isRequired,
}
