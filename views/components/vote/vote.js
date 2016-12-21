import React from 'react';
import $ from 'jquery';

const Vote = React.createClass({
  getInitialState() {
    return {upvote: null, downvote: null, vote: null}
  },
  componentDidMount() {
    let that = this;
    $.ajax({
      url: "/api/vote/" + that.props.id,
      type: "GET",
      success: function(data) {
        let upvote = []
        let downvote = []
        data.map((a)=>{
          if(a.vote==1){
            upvote.push(a.vote)
            console.log(a.vote)
          }else{
            downvote.push(a.vote)
          }
        })
        that.setState({upvote:upvote.length, downvote: downvote.length})
      }
    })
  },
  upVote(){
    $.ajax({
      url: "/api/vote/",
      type: "POST",
      data: {vote:1, postId: this.props.id},
      success:function(data){
        console.log('upvote posted!')
      }
    })
  },
  downVote(){
    $.ajax({
      url: "/api/vote/",
      type: "POST",
      data: {vote:-1, postId: this.props.id},
      success:function(data){
        console.log('downvote posted!')
      }
    })
  },
  render() {
    if(!this.state) {
      return (<div>Loading...</div>)
    } else {
      return (
        <div>
        <button onClick={this.upVote}><h1>Upvote: {this.state.upvote}</h1></button>
        <button onClick={this.downVote}><h1>Downvote: {this.state.downvote}</h1></button>
        </div>
      )
    }
  }
})

export default Vote;
