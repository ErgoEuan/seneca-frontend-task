import { Component } from "react";

// Selection = () => {
//     return (
//         <div></div>
//     )
// }

const Selection = ({selections}) => {
    console.log(selections)
    return selections.map((selection, i) => (
        <div>{selection.Answer}</div>
    ));
}

export default class Question extends Component {

    getStyle = () => {
        const color1 = '#F6B868';
        const color2 = '#EE6B2D';
        return {
            background: 'linear-gradient(180deg, ' + color1 + ' 0%, ' + color2 + ' 100%)',
        }
    }

    render() {
        // console.log(this.props.question)
        const { Question } = this.props.question;
        const Complete = "Correct!";
        return (
            <div style={this.getStyle()} className="question-container">
                <h1 className="Question">
                    {Question}
                </h1>
                <Selection selections={this.props.question.Selections}/>
                {/* <div onChange={this.onChangeValue}>
                    <input type="radio" value="Male" name="gender" /> Male
                    <input type="radio" value="Female" name="gender" /> Female
                    <input type="radio" value="Other" name="gender" /> Other
                </div> */}
                <h2 className="Complete">
                    The answer is {Complete}
                </h2>
            </div>
        )
    }
}