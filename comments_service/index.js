const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const app = express();

app.use(bodyParser.json());

const commentsByPostId = {};

app.get('/posts/:id/comments', (req, res)=>{
    const postId = req.params.id;
    res.send(commentsByPostId[postId] || []);
});

app.post('/posts/:id/comments', (req, res)=>{
    const commentId = randomBytes(4).toString('hex');
    const { content} = req.body;
    
    const postId = req.params.id;
    const comments = commentsByPostId[postId] || [];
    comments.push({id: commentId, content});
    commentsByPostId[postId] = comments;

    res.status(201).send(comments);
});

app.listen(4001, ()=>{
    console.log("comments_service is listening on 4001");
});