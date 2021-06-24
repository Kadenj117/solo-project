import React, { Component } from 'react';

class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: this.props.doc.name,
      priority: this.props.doc.priority,
      done: this.props.doc.done,
    }
    this.handleDelete = this.handleDelete.bind(this);
    this.handleDone = this.handleDone.bind(this)
  }

  async handleDelete() {
    //console.log(this.props.doc._id)
    await fetch(`/api/${this.props.doc._id}`, {
      method: 'DELETE',
    })
    //console.log('delete handled')
    this.props.del()
  }

  handleDone() {
    //console.log(this.props.doc);
    const obj = { _id: this.props.doc._id, done: this.props.doc.done }
    fetch(`/api/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
    })
    this.setState({ done: !this.state.done })
  }

  render() {
    //console.log('hello', this.props.doc)
    return (
      <div>
        <input type="checkbox" onChange={this.handleDone} checked={this.state.done} />
        <div>
          <h4>{this.state.name}</h4>
          <p>{this.state.priority}</p>
        </div>
        <button onClick={this.handleDelete}>Delete</button>
      </div >
    )
  }
}

export default TodoItem;