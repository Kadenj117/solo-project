import React, { Component } from 'react';

const ToDoCreator = ({ currName, currPriority, keyChange, valChange, post, update }) => {
  const handleClick = async () => {
    await post()
    update()
  }
  return (
    <div className="create">
      <input className="textint" type="text" onChange={keyChange} value={currName} placeholder="Enter your task here..." />
      <input className="numberint" type="number" onChange={valChange} value={currPriority} placeholder="1" />
      <button onClick={handleClick}>Create Task</button>
    </div>
  )
}

export default ToDoCreator;