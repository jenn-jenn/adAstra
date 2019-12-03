const express = require("express");
const router = express.Router();
const passport = require("passport");
const validateEventInput = require('../../validation/event');
const Event = require("../../models/Event");

//GET all events
router.get('/', (req, res) => {
    Event.find()
        .sort({ date: -1 })
        .then(events => res.json(events))
        .catch(err => res.status(404).json({ noeventsfound: 'No events found' }));
});

//get an event by user
router.get('/user/:user_id', (req, res) => {
    Event.find({ user: req.params.user_id })
        .then(events => res.json(events))
        .catch(err =>
            res.status(404).json({ noeventsfound: 'No events found from that user' }
            )
        );
});

//get an event by event id
// router.get('/:id', (req, res) => {
//     Event.findById(req.params.id)
//         .then(event => res.json(event))
//         .catch(err =>
//             res.status(404).json({ noeventfound: 'No event found with that ID' })
//         );
// });

//get events by date
router.get("/:date", (req, res) => {
    Event.find({ date: req.params.date })
        .then(events => res.json(events))
        .catch(err =>
            res.status(404).json({ noeventsfound: 'No events found on that date' })
        );
});


//create an event
router.post('/new',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {

        const newEvent = new Event({
            title: req.body.title,
            date: req.body.date,
            author: req.user.id,
            body: req.body.body,
        });

        newEvent.save().then(event => res.json(event));
    }
);

//edit an event by event id
router.patch('/:id', (req, res) => {
    Event.findById(req.params.id)
        .then(event => {
            event.title = validText(req.body.title) ? req.body.title : event.title;
            event.date = (req.body.date === undefined) ? event.date : req.body.date;
            event.authorId = validText(req.body.authorId) ? req.body.authorId : event.authorId;

            event.save().then(event => res.json(event));
        });
});

//delete an event by id
router.delete('/:id', (req, res) => {
    Event.findById(req.params.id)
        .then(event => {
            event.remove().then(event => res.json(event));
        })
        .catch(err =>
            res.status(404).json({ noeventfound: 'No event found with that ID' })
        );
});

module.exports = router;