const express = require('express')
const path = require('path')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Post = require('./models/post');

const port = process.env.PORT || 3000;
const app = express();
const router = express.Router();

// serve static assets normally
app.use(express.static('build'));

app.use(bodyParser.urlencoded({ extended: true}));


router.route('/api/posts')
  .get(function(req, res) {
    Post.find(function(err, posts) {
      if (err)
        res.send(err);
      res.json(posts);
    });
  })
  .post(function(req, res) {
    const post = new Post();
    post.title = req.body.title;
    post.content = req.body.content;

    post.save(function(err) {
      if (err)
        res.send(err);
      res.json({message: 'Post created'});
    });
  });

router.route('/api/posts/:id')
  .get(function(req, res) {
    Post.findById(req.params.id, function(err, post) {
      if (err)
        res.send(err);
      res.json(post);
    });
  });
// Handles all routes so you do not get a not found error
router.route('*')
  .get(function(req, res) {
    res.sendFile(path.resolve('build', 'index.html'));
  });
  
app.use(router);

mongoose.connect('mongodb://localhost/posts');

app.listen(port);
console.log("server started on port " + port);