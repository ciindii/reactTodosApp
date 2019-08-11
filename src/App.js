import React from 'react';
import './App.css';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
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
          completed: false
        },
        {
          id: 3,
          title: 'Meeting with boss',
          completed: false
        }
      ]
    }

    markComplete = (id) => {
      this.setState({ todos: this.state.todos.map(todo => {
        if(todo.id === id) {
          // !todo (whatever is oppisite)
          todo.completed = !todo.completed
        }
        return todo;
      }) });
    }
    // return only the todos that dont match the ID passed in because we want to delete that one
    // for each todos filter out any/return todo where the id is NOT = to the id that passed in here (delTodo = (id in here) => {} )
    delTodo = (id) => {
      this.setState({ todos: [...this.state.todos.filter(todo => todo.id !==id)] });
    }

  render(){
    return (
      <div className="App">
        <Header />
        <AddTodo />
        <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
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
