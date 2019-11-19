const express = require("express");
const router = express.Router();
const Comment = require('../../models/Comment');
const validateCommentInput = require('../../validation/comment');
const passport = require("passport");

router.get("/test", (req, res) => {
    res.json({ msg: "This is the comments route" });
});

router.get("/", (req, res) => {
    Comment
    .find()
    .sort({ date: -1})
    .then( comments => res.json(comments))
    .catch( err => res.status(400).json(err));
});

router.get("/posts/:post_id", (req, res) => {
    Comment
    .find({ postId: req.params.post_id})
    .then( comments => res.json(comments))
    .catch( err => res.status(400).json(err));
});

router.post("/new", 
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
    const { isValid, errors } = validateCommentInput(req.body);
    if (!isValid) {
        return res.status(400).json(errors);
    }
    const newComment = new Comment({
            body: req.body.body,
            userId: req.user.id,
            postId: req.body.postId
    });
    newComment.save()
    .then(comment => res.json(comment));
});

module.exports = router;