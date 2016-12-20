import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router';

const Allposts = React.createClass({
  getInitialState() {
    return {posts: null}
  },
  componentDidMount() {
    let that = this;
    $.ajax({
      url: "/api/post",
      success: function(data) {
        that.setState({posts: data})
      }
    })
  },
  // getPost() {
  //
  // },
  render() {
    if(!this.state.posts) {
      return (<div>Loading...</div>)
    } else {
      let posts = this.state.posts.map((post, idx) => (
           <li key={idx}><Link to={'/post/'+post.id}>{post.title}</Link></li>
         )
      )
      return (
        <div>
          <center><h1>POSTS</h1></center>
          <ul className="posts">{posts}</ul>
        </div>
      )
    }
  }
})

export default Allposts;
