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

  handleDelete() {
    //console.log(this.props.doc._id)
    fetch(`/api/${this.props.doc._id}`, {
      method: 'DELETE',
    })
      //console.log('delete handled')
      .then(() => {
        console.log(this.props.index)
        this.props.del(this.props.index)
      })
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
      <div className="item">
        <input className="checker" type="checkbox" onChange={this.handleDone} checked={this.state.done} />
        <div className="infoItem">
          <h4>{this.state.name}</h4>
          <p id="priority"> * Priority:  {this.state.priority}</p>
        </div>
        <button className="deleteButton" onClick={this.handleDelete}>Delete</button>
      </div >
    )
  }
}

export default TodoItem;