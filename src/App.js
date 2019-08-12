import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import About from './components/pages/About';
import uuid from 'uuid';


class App extends React.Component {
  state = {
      todos: [
        {
          id: uuid.v4(),
          title: 'take out trash',
          completed: false
        },
        {
          id: uuid.v4(),
          title: 'dinner with husband',
          completed: false
        },
        {
          id: uuid.v4(),
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

    //delTodo delete todo item

    // return only the todos that dont match the ID passed in because we want to delete that one
    // for each todos filter out any/return todo where the id is NOT = to the id that passed in here (delTodo = (id in here) => {} )
    delTodo = (id) => {
      this.setState({ todos: [...this.state.todos.filter(todo => todo.id !==id)] });
    }

    //add todo item

    addTodo = (title) => {
      const newTodo = {
        id: uuid.v4(),
        title: title,
        completed: false
      }
      this.setState({todos: [...this.state.todos, newTodo]});
    }

  render(){
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
              </React.Fragment>
            )}
            />
            <Route path="/about" component={About}

            />
          </div>
        </div>
      </Router>
    );
  }
}


export default App;
