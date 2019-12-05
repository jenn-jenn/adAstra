const express = require("express");
const router = express.Router();
const passport = require("passport");
const Image = require('../../models/Image');
const upload = require('./image_upload_aws');
const singleUpload = upload.single('image');

router.get('/', (req,res) => {
    Image
        .find()
        .sort( {date: 'asc'} )
        .then( images => {
            let payload = {};
            images.map( image => payload[image._id] = image);
            return res.json(payload);
        })
        .catch(err => res.status(400).json(err));
})

router.get("/posts/:post_id", (req, res) => {
    Image
        .find({ postId: req.params.post_id })
        .then(images => res.json(images))
        .catch(err => res.status(400).json(err));
});


router.post('/uploadImage', passport.authenticate("jwt", { session: false }), (req, res) => {
    singleUpload(req, res, function(err) {
        if(err) {
            return res.status(422).json({errors: err.message});
        }    
        return res.json({'imageUrl': req.file.location, 'postId': req.body.postId, 'fileName': req.file.originalname});
    })   
});

router.post('/uploadImageDB', (req, res) => {
    const newImage = new Image({
        postId: req.body.data.postId,
        fileName: req.body.data.fileName,
        src: req.body.data.imageUrl
    });
    newImage.save()
        .then(image => res.json(image));
      
});

module.exports = router;