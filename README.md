# adAstra
__**ad astra** *“to the stars” (latin)*__

[Live Link](http://ad--astra.herokuapp.com/#/)

adAstra is an event planning app to help users geolocate the best sites for cosmic shows.

## Background and Overview:

adAstra is a cosmic event planning app, built to reconnect us with the ebb and flow of space and to rebuild an awareness of Earth as an interconnected system. It helps users geolocate the best sites for stargazing and meteor showers. The application also creates a community for users to plan gatherings.

## Technologies

### MERN Stack

* Backend - MongoDB, Express
* Frontend - React
* Node.js

### API Integration
 
 * React Native Calendar API Library
 * [Mapbox](https://www.mapbox.com/)
 * [AWS S3](https://aws.amazon.com/s3/)
 * [OpenWeatherMap](https://openweathermap.org/)
 * [Strudel Lookup](http://www.strudel.org.uk/lookUP/)


## Code Snippets

Users are able to upload images which is stored in AWS S3. Our decision to implement an external storage is to maximize scalability. We handled the integration between the external storage site and our frontend by invoking a middleware storage engine, Multer S3, in our routes API.

```javascript
const upload = require('./image_upload_aws');
const singleUpload = upload.single('image'); // Multer-S3

router.post('/uploadImage', passport.authenticate("jwt", { session: false }), (req, res) => {
    singleUpload(req, res, function(err) {
        if(err) {
            return res.status(422).json({errors: err.message});
        }    
        return res.json({'imageUrl': req.file.location, 'postId': req.body.postId, 'fileName': req.file.originalname});
    })   
});
```
We allowed users to delete their own comments. The below handles this logic as well as prevents users from deleting other users' comments.

```javascript 
let deletebutton = this.props.currentUser.id === this.props.comment.userId ? 
    <i onClick={this.handleDelete}
    id={this.props.comment._id}
    className="fa fa-trash"/>
    : "";
```

When user clicks on a calendar date, they are directed to the specific date's event show page to see that date's event listing.
```javascript 
// Frontend
render() {        
        if (this.props.events === undefined) return null;

        return (
            <div className="date-events">
                <h1>{this.props.date}</h1>
                <div className="event-container">
                    <ul className="event-list">
                        {this.props.events.map((event, i) => (
                            <li key={i} className="event">
                                <h2>{event.title}</h2>
                                <div className="event-info">
                                    <a className="fas fa-map-marked-alt"
                                        href={`https://www.google.com/maps/place/${event.address}`} />
                                    <p>{event.body}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
```

```javascript
// Backend
router.get("/:date", (req, res) => {
    Event.find({ date: req.params.date })
        .then(events => res.json(events))
        .catch(err =>
            res.status(404).json({ noeventsfound: 'No events found on that date' })
        );
});
```

We seeded cosmic objects into our database through an axios call to the Strudel Lookup API.
```javascript
// Backend
  constellationList.map(cons => {
    let cosmicobject;
    axios
      .get(`http://www.strudel.org.uk/lookUP/json/?name=${cons}`)
      .then(res => {
        cosmicobject = new CosmicObject (res.data)
      })
      .then(res => {
        cosmicobject.save()
      })
      .catch(err => console.log(err))
  });
```

## Screenshots

### Demo Login
![demo-login](https://user-images.githubusercontent.com/16752858/70012713-0e3e6000-152a-11ea-8801-8b80b4a927d5.gif)

### Constellation Map
![adAstra_map](https://user-images.githubusercontent.com/52211990/70002926-623f4980-1516-11ea-8129-8b0a76a87ba6.gif)

## Technical Challenges
1. We weren't able to show a date's event show page on click, so we used vanilla DOM to fetch all calendar tiles. We looked inside the HTML abbreviation (ABBR) element for date information. We then searched through all events and found the information about dates. We matched the events to tiles through their shared identical date information to show the event listing for a specific date.
2. Searching through our pre-fetched cosmicObject slice of state to populate the stars index page. 
3. To imporve the post search efficiency from post slice of state, we returned a payload from our post route with the id as the index.

