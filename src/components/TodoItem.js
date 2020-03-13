import React from 'react'


export default ({id, title, content, urgent, deleteTodo}) => {

  const handleClick = () => {
    console.log(id)
    console.log(deleteTodo)
    deleteTodo(id)
  }

  return (
    <li className={urgent ? "todo-item urgent" : "todo-item"}>
      <h2>{title} {urgent ? <span className="urgent-title">urgent</span> : null}</h2>
      <p>{content}</p>
      <button className="delete" onClick={handleClick}>X</button>
    </li>
  )
}
