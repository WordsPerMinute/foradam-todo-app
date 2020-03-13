import React, { Component } from 'react'

export default class TodoForm extends Component {

  state = {
    title: "",
    content: "",
    urgent: false
  }

  handleChange = (event) => {
    let {name, checked, value} = event.target
    value = name === 'urgent' ? checked : value
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addTodo(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="todo-form">
        <h2>Add New Todo</h2>
        <label>Title</label>
        <input name='title' value={this.state.title} onChange={this.handleChange} />
        <label>Content</label>
        <input name='content' value={this.state.content} onChange={this.handleChange} />
        <label>Urgent</label>
        <input type="checkbox" name='urgent' value={this.state.urgent} onChange={this.handleChange} />
        <input type="submit" />
      </form>
    )
  }
}
