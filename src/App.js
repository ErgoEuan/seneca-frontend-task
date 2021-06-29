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
              {text: "Lot of Meetings", isValid: false},
              {text: "Less Meetings", isValid: true}
            ],
          },
          {
            Options: [
              {text: "Expensive Coffee", isValid: false},
              {text: "Free Coffee", isValid: true}
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
        "Question": "What is better?",
        Selections: [
          {
            Options: [
              {text: "Dogs", isValid: true},
              {text: "Cats", isValid: false},
            ],
          },
          { 
            Options: [
              {text: "Pizza", isValid: false},
              {text: "Sushi", isValid: true}
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
