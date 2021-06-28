import React, {Component} from 'react';
import Question from './Question';
import PropTypes from 'prop-types';

export default class Questions extends Component {
    render() {
        console.log(this.props.questions)
        return this.props.questions.map((question, i) => (
            <Question key={i} question={question} questionNumber={i}/>
        ));
    }
}

Questions.propTypes = {
    questions: PropTypes.array.isRequired,
}
