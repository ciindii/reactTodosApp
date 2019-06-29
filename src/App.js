import React from 'react';
import './App.css';
import Todos from './components/Todos';

class App extends React.Component {
  state = {
      todos: [
        {
          id: 1,
          title: 'take out trash',
          completed: false
        },
        {
          id: 2,
          title: 'dinner with husband',
          completed: true
        },
        {
          id: 3,
          title: 'Meeting with boss',
          completed: false
        }
      ]
    }
  render(){
    return (
      <div className="App">
        <h1>hello world</h1>
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

// function App() {
//   state = {
//     todos: [
//       {
//         id: 1,
//         title: 'take out trash',
//         completed: false
//       },
//       {
//         id: 2,
//         title: 'dinner with husband',
//         completed: false
//       },
//       {
//         id: 3,
//         title: 'Meeting with boss',
//         completed: false
//       }
//     ]
//   }
//
//   return (
//     <div className="App">
//       <h1>hello world</h1>
//       <Todos todos={this.state.todos}/>
//     </div>
//   );
// }

export default App;
