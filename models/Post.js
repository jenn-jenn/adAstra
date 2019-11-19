const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    author_id: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    date: {
        type: Date, 
        default: Date.now
    }
});

const Post = mongoose.model('post', PostSchema);
module.exports = Post;