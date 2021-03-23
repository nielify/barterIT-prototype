const express = require('express');
const router = express.Router()
const Post = require('../models/Post');

router.get('/', (req, res) => {
  Post.find()
  .then(result => {
    res.render('marketplace', { title: 'Marketplace', posts: result });
  })
  .catch(err => {
    console.log(err);
  })
}); 

router.post('/', (req, res) => {
  const post = req.body;
 
  post.save()
  .then(result => console.log("Post saved!"))
  .catch(err => console.log(err)) 
});

module.exports = router