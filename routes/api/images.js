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

router.post('/uploadImage', passport.authenticate("jwt", { session: false }), (req, res) => {
    debugger

    let src = null;
    // save to AWS
    singleUpload(req, res, function(err) {
        if(err) {
            return res.status(422).json({errors: err.message});
        }    
        src = req.file.location;
        return res.json({'imageUrl': req.file.location});
    })   
    
    // save postId and file name to MongoDB
    const newImage = new Image({
        postId: req.body.postId,
        src: req.file.location
    });
    newImage.save()
        .then( image => res.json(image));

});

module.exports = router;