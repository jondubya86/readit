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
          }else{
            downvote.push(a.vote)
          }
        })
        that.setState({upvote:upvote.length, downvote: -Math.abs(downvote.length)})
      }
    })
  },
  upVote(){
    $.ajax({
      url: "/api/vote/",
      type: "POST",
      data: {vote:1, postId: this.props.id}
      }).done(()=>this.setState({upvote:this.state.upvote+1}))
  },
  downVote(){
    $.ajax({
      url: "/api/vote/",
      type: "POST",
      data: {vote:-1, postId: this.props.id}
    }).done(()=>this.setState({downvote:this.state.downvote-1}))
  },
  render() {
    if(!this.state) {
      return (<div>Loading...</div>)
    } else {
      return (
        <div>
        <button id='upvote-btn' onClick={this.upVote}><h3>{this.state.upvote}</h3></button>
        <button id='downvote-btn' onClick={this.downVote}><h3>{this.state.downvote}</h3></button>
        </div>
      )
    }
  }
})

export default Vote;
