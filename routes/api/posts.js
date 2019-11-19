const express = require("express");
const router = express.Router();
const passport = require('passport');
const validatePostInput = require('../../validation/validate_post');
const Post = require("../../models/Post");


// GET all posts
router.get("/", (req, res) => {
    Post
        .find()
        .sort( {date: -1} ) // 'asc' 
        .then( posts => res.json(posts))
        .catch(err => res.status(400).json(err));
})


// POST a post
router.post("/", passport.authenticate("jwt", { session: false }), (req, res) => {
    console.log(req);
    const { errors, isValid } = validatePostInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }   
    debugger
    const newPost = new Post({
        author: req.user.id,
        body: req.body.body,
        title: req.body.title,
    });

    newPost.save()
        .then(post => res.json(post));
})

//DELETE a post
// router.delete('/:postId', (req, res) => {
//     Post.findByIdAndRemove(req.params.postId)
//         .then(post => {
//             if(!post) {
//                 return res.status(404).json( {msg: "Post cannot be found"});
//             }
//             return res.json({msg: "Post deleted"});
//         })
//         .catch(err => console.log(err));
// });


module.exports = router;