const express = require("express");
const router = express.Router();
const passport = require('passport');
const Post = require("../../models/Post");


// GET all posts
router.get("/posts", (req, res) => {
    Post
        .find()
        .sort( {date: -1} )
        .then( posts => res.json(posts))
        .catch(err => res.status(400).json(err));
})

router.post("/", passport.authenticate("jwt", { session: false }), (req, res) => {
    const { errors, isValid } = validateTweetInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    const newTweet = new Tweet({
        user: req.user.id,
        text: req.body.text
    });
    newTweet.save()
        .then(tweet => res.json(tweet));
})

