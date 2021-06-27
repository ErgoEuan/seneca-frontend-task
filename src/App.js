import { Component } from 'react';
import './App.scss';
import Questions from './components/Questions';

class App extends Component {
  state = {
    questions: [
      {
        "Question": "What are the ideal conditions inside an office?",
        Selections: [
          {
            Options: [
              {text: "Good Pay", isValid: true},
              {text: "Bad Pay", isValid: false}
            ],
          },
          { 
            Options: [
              {text: "Less Meetings", isValid: true},
              {text: "Lot of Meetings", isValid: false}
            ],
          },
          {
            Options: [
              {text: "Free Coffee", isValid: true},
              {text: "Expensive Coffee", isValid: false}
            ],
          },
          {
            Options: [
              {text: "Dog in Office", isValid: true},
              {text: "Bear in Office", isValid: false}
            ],
          },
        ]
      },
      {
        "Question": "Which are the best sports people & teams?",
        Selections: [
          {
            Options: [
              {text: "Liverpool", isValid: true},
              {text: "Chelsea", isValid: false},
              {text: "Man Utd", isValid: false}
            ],
          },
          { 
            Options: [
              {text: "Serena Williams", isValid: true},
              {text: "Naomi Osaka", isValid: false}
            ],
          },
        ]
      },
    ]
  }

  render(){
    return (
      <div className="App">
        <header className="App-container">
          <Questions questions={this.state.questions}/>
        </header>
      </div>
    );
  }
}

export default App;
