import { Component } from 'react';
import Selections from './Selections';
import PropTypes from 'prop-types';

// Component for a question
export default class Question extends Component {

    constructor() {
        super();
        // Default state of the component
        this.state = {
          color1: '#F6B868',
          color2: '#EE6B2D',
          complete: 'incorrect'
        };
    }

    // Updating the background gradient 
    getStyle = () => {
        return {
            background: 'linear-gradient(180deg, ' + this.state.color1 
            + ' 0%, ' + this.state.color2 + ' 100%)',
        }
    }

    // Determining the completion level of the question and updating accordingly  
    completion = (percent) => {
        if (percent >= 0.5 && percent < 1){
            this.setState({
                color1: '#F1B496',
                color2: '#EA806A',
                complete: 'incorrect'
            });
        } 
        else if (percent === 1){
            this.setState({
                color1: '#76E0C2',
                color2: '#59CADA',
                complete: 'correct!'
            });
        }
        else {
            this.setState({
                color1: '#F6B868',
                color2: '#EE6B2D',
                complete: 'incorrect'
            });
        }
    }

    render() {
        return (
            <div style={this.getStyle()} className='questionContainer'>
                <h1 className='questionName'>
                    {this.props.question.Question}
                </h1>
                <div>
                    <Selections 
                        questionNumber={this.props.questionNumber} 
                        selections={this.props.question.Selections}
                        completion={this.completion}
                    />
                </div>
                <h2 className='completeText'>
                    The answer is {this.state.complete}
                </h2>
            </div>
        )
    }
}

Question.propTypes = {
    question: PropTypes.object.isRequired,
    questionNumber: PropTypes.number.isRequired,
}
