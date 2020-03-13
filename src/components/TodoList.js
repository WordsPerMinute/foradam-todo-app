import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({ todos, deleteTodo }){

  const showTodos = todos.map(todo => <TodoItem key={todo.id} deleteTodo={deleteTodo} {...todo}/>)

  
  return (
    <ul className="todo-list">
      {showTodos}
    </ul>
  )
}
