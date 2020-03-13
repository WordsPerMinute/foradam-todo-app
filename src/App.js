import React, { Component } from 'react';
import './App.css';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

class App extends Component {

  state = {
    todos: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/api/v1/todos')
    .then(response => response.json())
    .then(todos => this.setState({todos}))
  }

  deleteTodo = id => {
    const todos = this.state.todos.filter(todo => todo.id !== id)
    this.setState({ todos })
  }

  addTodo = (newTodo) => {
    this.setState({
      todos: [...this.state.todos]
      // todos: [...this.state.todos, {...newTodo, id: this.state.count+1}]
    })

    fetch('url', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTodo)
    })
  }

  render() {
    console.log(this.state)
    return (
      <main>
        <h1>Todo App</h1>
        <TodoForm addTodo={this.addTodo} />
        <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo}/>
      </main>
    );
  }

}

export default App;
