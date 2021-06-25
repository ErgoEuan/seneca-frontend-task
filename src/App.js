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
            Answer: "Good Pay",
            Alt1: "Bad Pay",
          },
          { 
            Answer: "Less Meetings",
            Alt1: "Lot of Meetings",
          },
          {
            Answer: "Free Coffee",
            Alt1: "Expensive Coffee",
          },
          {
            Answer: "Dog in Office",
            Alt1: "Bear in Office",
          },
        ]
      },
      {
        "Question": "Which are the best sports people & teams?",
        Selections: [
          {
            Answer: "Liverpool",
            Alt1: "Chelsea",
            Alt2: "Man Utd"
          },
          { 
            Answer: "Serena Williams",
            Alt1: "Naomi Osaka",
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
