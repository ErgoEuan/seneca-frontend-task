import React, {Component} from 'react';
import Question from './Question';

export default class Questions extends Component {

    render() {
        // console.log(this.props)
        return this.props.questions.map((question, i) => (
            <Question key={i} question={question}/>
        ));
    }
}