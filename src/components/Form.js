import React, { Component } from 'react';

class form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      comments: '',
      topic: 'react'
    }
  }

  handleUsernameChange = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  handleCommentsChange = (e) => {
    this.setState({
      comments: e.target.value
    })
  }

  handleTopicChange = (e) => {
    this.setState({
      topic: e.target.value
    })
  }

  render() {
    return (
      <form>
        <div>
          <label>Username</label>
          <input 
            type="text" 
            value={this.state.username} 
            onChange={this.handleUsernameChange}
          />
        </div>
        <div>
          <label>Comments</label>
          <textarea value={this.state.comments} onChange={this.handleCommentsChange}></textarea>
        </div>
        <div>
          <label>Topic</label>
          <select value={this.state.topic} onChange={this.state.handleTopicChange}>
            <option value="react">react</option>
            <option value="angular">angular</option>
            <option value="vue">vue</option>
          </select>
        </div>
      </form>
    );
  }
}

export default form;