import React from 'react';
import $ from 'jquery';

const Postform = React.createClass({
  getInitialState() {
    return {title: null, body: null}
  },
  handleChange(e) {
    let name = e.target.name
    this.setState({[name]: e.target.value})
  },
  handleSubmit(e) {
    let data = this.state
    $.ajax({
      url: "/api/post",
      type: "POST",
      data: data
    })
  },

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="title"></label>
        <input type="text" name="title" id="title" placeholder="Title" onChange={this.handleChange}></input><br />
        <label htmlFor="body"></label>
        <input type="text" name="body" id="body" placeholder="Enter body of post here..." onChange={this.handleChange}></input><br />
        <input type="reset" value="Reset" id="reset"></input>
        <input type="submit" value="Submit" id="submit"></input>
      </form>
    )
  }
})

export default Postform;
