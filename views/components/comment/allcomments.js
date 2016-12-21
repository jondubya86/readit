import React from 'react';
import $ from 'jquery';

const Allcomments = React.createClass({
  getInitialState() {
    return {comments: null}
  },
  componentDidMount() {
    let that = this;
    let id = this.props.id
    $.ajax({
      //This Ajax call will be using the params retrieved from the post url to get all comments related to the post`
      url: "/api/comment/" + id,
      success: function(data) {
        that.setState({comments: data})
      }
    })
  },
  render() {
    if(!this.state.comments) {
      return (<div>Loading...</div>)
    } else {
      let count = this.state.comments.count
      let comments = this.state.comments.rows.map((comment, idx) => (
           <li key={idx}>{comment.comment}</li>
         )
      )
      return (
        <div>
          <h1>Top {count} comment(s):</h1>
          <hr />
          <ul>{comments}</ul>
        </div>
      )
    }
  }
})

export default Allcomments;
