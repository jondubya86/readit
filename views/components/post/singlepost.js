import React from 'react';
import $ from 'jquery';
import Commentform from '../comment/commentform';
import Vote from '../vote/vote';
import Allcomments from '../comment/allcomments';


const Singlepost = React.createClass({
  getInitialState() {
    return {post: null}
  },
  componentDidMount() {
    let that = this;
    $.ajax({
      url: "/api/post/" + that.props.params.id,
      success: function(data) {
        that.setState({post:data})
        console.log(data)
      }
    })
  },
  render() {
    if(!this.state.post) {
      return (<div>Loading...</div>)
    } else {
      let post = this.state.post
      let id = this.props.params.id
      return (
        <div>
          <h1>{post.title}</h1>
          <div>{post.body}</div>
          <Vote id={this.props.params.id}/>
          <Commentform id={id} />
          <Allcomments id={id} />
        </div>
      )
    }
  }
})

export default Singlepost;
