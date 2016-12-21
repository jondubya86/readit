import React from 'react';
import $ from 'jquery';

const Commentform = React.createClass({
  getInitialState() {
    return {comment: null}
  },
  handleChange(e) {
    this.setState({comment: e.target.value})
  },
  handleSubmit() {
    let data = this.state
    let id = this.props.id
    $.ajax({
      //must contain the current post's id
      url: "/api/comment/" + id,
      type: "POST",
      data: data
    })
  },

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="comment"></label>
        <input type="text" name="comment" id="comment" placeholder="Comment" onChange={this.handleChange}></input><br />
        <input type="reset" value="Reset" id="reset"></input>
        <input type="submit" value="Submit" id="submit"></input>
      </form>
    )
  }
})

export default Commentform;
