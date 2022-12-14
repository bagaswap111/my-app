import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       username: '',
       comments: '',
       topic: ''
    }
  }

  handleUsernameChange = (event) => {
    this.setState({
        username: event.target.value
    })
  }
  handleCommentChange = event => {
    this.setState({
        comments: event.target.value
    })
  }
  handleTopicChange = event => {
    this.setState({
        topic: event.target.value
    })
  }
  handleSubmitChange = event => {
    alert(`${this.state.username} | ${this.state.comments} | ${this.state.topic}`)
    event.preventDefault()
  }
    render() {
        const { username, comments, topic } = this.state
    return (
        <form onSubmit={this.handleSubmitChange}>
            <div>
                <label> Username </label>
                <input type={'text'} value={username} onChange={this.handleUsernameChange} />
            </div>
            <div>
                <label> Comments </label>
                <textarea type={'text'} value={comments} onChange={this.handleCommentChange}></textarea>
            </div>
            <div>
                <label> Topic </label>
                <select value={topic} onChange={this.handleTopicChange}>
                    <option value={''}>-</option>
                    <option value={'React'}>React</option>
                    <option value={'Vue'}>Vue</option>
                    <option value={'Angular'}>Angular</option>
                </select>
            </div>
            <div>
                <button type='submit'>Submit</button>
            </div>

        </form>
    )
  }
}

export default Form