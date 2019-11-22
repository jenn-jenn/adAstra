const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
    title: {
        type: String, 
        required: true
    },

    date: {
        type: Date, 
        default: Date.now
    },

    body: {
        type: String,
        required: true
    },
    authorId: {
        type: Schema.Types.ObjectId, 
        ref: 'users'
    }
});

const Event = mongoose.model('events', EventSchema);
module.exports = Event;