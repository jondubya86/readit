const express = require('express');
const app = express();
const router = express.Router();
const Post = require('../models').Post;
const Comment = require('../models').Comment;
const Vote = require('../models').Vote;

//ROUTES USED TO HANDLE THE POST MODEL
router.route('/api/post')
//gets all posts
.get((req, res) => {
  Post.findAll()
  .then((posts) => {
    res.send(posts)
  })
})

//creates a post
.post((req, res) => {
  var data = req.body;
  Post.create({
    title: data.title,
    body: data.body
  })
  .then(() => {
    res.send('Your post has been created!')
  })
})

router.route('/api/post/:id')
//gets single posts
.get((req, res) => {
  var id = req.params.id;
  Post.findById(id)
  .then((post) => {
    res.send(post)
  })
})

//deletes a post
.delete((req, res) => {
  var id = req.params.id;
  Post.destroy({
    where: {id: id}
  })
  .then(() => {
    res.send('Your post has been deleted!')
  })
})


//ROUTES USED TO HANDLE THE COMMENT MODEL
router.route('/api/comment/:id')
//gets all comments associated with a particular post
.get((req, res) => {
  var id = req.params.id;
  Comment.findAndCountAll({
    where: {
      PostId: id
    }
  })
  .then((comments) => {
    res.send(comments)
  })
})

//creates a comment
.post((req, res) => {
  var comment = req.body.comment;
  var postId = req.params.id;
    Comment.create({
      comment: comment
    })
  .then((comment) => {
    comment.setPost(postId)
    res.send('Your comment has been created!')
  })
})


router.route('/api/comment/:id')
//gets single comment
.get((req, res) => {
  var id = req.params.id;
  Comment.findById(id)
  .then((comment) => {
    res.send(comment)
  })
})

//deletes a comment
.delete((req, res) => {
  var id = req.params.id;
  Comment.destroy({
    where: {id: id}
  })
  .then(() => {
    res.send('Your comment has been deleted!')
  })
})

//ROUTES USED TO HANDLE THE VOTE MODEL
router.route('/api/vote')
//gets all votes
.get((req, res) => {
  Vote.findAll()
  .then((votes) => {
    res.send(votes)
  })
})

//creates a vote
.post((req, res) => {
  var vote = req.body.vote;
  var postId = req.body.postId;
  Vote.create({
    vote: vote,
  })
  .then((vote) => {
    vote.setPost(postId)
    res.send('Your vote has been created!')
  })
})

router.route('/api/vote/:id')
//gets single vote
.get((req, res) => {
  var id = req.params.id;
  Vote.findAll({
    where: {
      PostId: id
    }
  })
  .then((vote) => {
    res.send(vote)
  })
})

//deletes a vote
.delete((req, res) => {
  var id = req.params.id;
  Vote.destroy({
    where: {id: id}
  })
  .then(() => {
    res.send('Your vote has been deleted!')
  })
})


module.exports = router;
