import React, { Component } from 'react';

const ToDoCreator = ({ currName, currPriority, keyChange, valChange, post, update }) => {
  const handleClick = async () => {
    await post()
    update()
  }
  return (
    <div>
      <input type="text" onChange={keyChange} value={currName} />
      <input type="number" onChange={valChange} value={currPriority} />
      <button onClick={handleClick}>Button</button>
    </div>
  )
}

export default ToDoCreator;