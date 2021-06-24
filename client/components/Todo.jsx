import React, { Component } from 'react';
import ToDoCreator from './toDoCreator';
import TodoItem from './TodoItem';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      currName: '',
      currPriority: 0,
    };

    this.handleKeyChange = this.handleKeyChange.bind(this);
    this.handleValChange = this.handleValChange.bind(this);
    this.postTodo = this.postTodo.bind(this);
    this.updateState = this.updateState.bind(this);
    this.deleteOne = this.deleteOne.bind(this);
  }

  componentDidMount() {
    fetch('/api')
      .then(res => res.json())
      .then(data => this.setState({ todos: data }))
    //.then(() => console.log(this.state.todos))
  }

  componentDidUpdate() {
    //console.log('todos', this.state.todos);
  }

  handleValChange(event) {
    this.setState({ currPriority: event.target.value })
  }

  handleKeyChange(event) {
    this.setState({ currName: event.target.value })
  }

  async postTodo() {
    let data = { name: this.state.currName, priority: this.state.currPriority, done: false };
    //console.log(data);
    await fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
  }

  updateState() {
    //console.log('here')
    fetch('/api')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        return data;
      })
      .then(data => this.setState({ todos: [...data] }))
  }

  deleteOne(index) {
    const todoList = [];
    this.state.todos.forEach((el, i) => {
      if (i !== index) {
        todoList.push(el)
      }
    })
    console.log(todoList)
    this.setState({ todos: [] })
    this.setState({ todos: [...todoList] })

  }

  render() {
    console.log(this.state.todos)
    let list = this.state.todos.map((el, i) => {
      //console.log(el);
      return (
        <TodoItem
          key={`item-${i}`}
          index={i}
          doc={el}
          del={this.deleteOne} />)
    })
    return (
      <div className="todo">
        <ToDoCreator name={this.props.currName}
          priority={this.props.currPriority}
          keyChange={this.handleKeyChange}
          valChange={this.handleValChange}
          post={this.postTodo}
          update={this.updateState} />
        <div className='inner'>

          {list}
        </div>
      </div>

    )
  };
}

export default Todo;