const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
    title: {
        type: String
    },

    date: {
        type: String
    },

    address: {
        type: String
    },

    body: {
        type: String
    },
    authorId: {
        type: Schema.Types.ObjectId, 
        ref: 'users'
    }
});

const Event = mongoose.model('events', EventSchema);
module.exports = Event;