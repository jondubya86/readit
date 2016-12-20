import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router';

const Allcomments = React.createClass({
  getInitialState() {
    return {comments: null}
  },
  componentDidMount() {
    let that = this;
    $.ajax({
      url: "/api/comment",
      success: function(data) {
        that.setState({comments: data})
      }
    })
  },
  render() {
    if(!this.state.comments) {
      return (<div>Loading...</div>)
    } else {
      let comments = this.state.comments.map((comment, idx) => (
           <li key={idx}><Link to={'/comment/'+comment.id}>{comment.title}</Link></li>
         )
      )
      return (
        <div>
          <h1>COMMENTS:</h1>
          <ul>{comments}</ul>
        </div>
      )
    }
  }
})

export default Allcomments;
