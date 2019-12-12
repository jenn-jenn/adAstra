import React from "react";
import '../stylesheets/event/event.scss';

class EventForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            date: '',
            address: '',
            body: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    componentDidMount() {
        this.getLocation();
        const modal = document.querySelector('.event-form-modal');

        document.querySelector('.event-form-submit').addEventListener('click', () => {
            if (!modal.className.includes('hidden')) modal.classList.add('hidden');
        });

        document.querySelector('.event-form-cancel').addEventListener('click', () => {
            if (!modal.className.includes('hidden')) modal.classList.add('hidden');
        })

        document.querySelector('.fa.fa-times.eventx').addEventListener('click', () => {
            modal.classList.add('hidden');
        })
    }

    getLocation() {
        function success(pos) {
            const crd = pos.coords;
            this.props.fetchLocation(crd)
                .then(res => this.setState({address: res.data.features[0].place_name}));
            
        }
        navigator.geolocation.getCurrentPosition(success.bind(this));
    }
  
    
    update(field) {
        return(e) => {
            this.setState({ [field]: e.currentTarget.value });
        };
    }

    updateDate(field) {
        return(e) => {
            this.setState({ [field]: e.currentTarget.value.split(" ").join("-") })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createNewEvent(this.state)
            .then(() => this.props.history.push(`/events/${this.state.date}`));
    }

    handleCancel(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div className="eventCalendar">
                <h1>Welcome to the adAstra Event Form!</h1>
                    <div className="event-form-container">
                        <form className="event-form" >
                            <h2>Create Event</h2>
                            <div className="event-title">
                                <input type="text"
                                    value={this.state.title}
                                    onChange={this.update("title")}
                                    placeholder="Title (ex: Stargazing Night)"
                                    maxLength="50">
                                </input>
                            </div>

                            <div className="event-date">
                                <input type="date"
                                    value={this.state.date}
                                    onChange={this.updateDate("date")}
                                    >
                                </input>
                            </div>

                            <div className="event-address">
                                <input type="text"
                                    value={this.state.address}
                                    onChange={this.update("address")}
                                    placeholder="Location (ex: 825 Battery St, San Francisco, CA)"
                                    maxLength="50">
                                </input>
                            </div>

                            <div className="event-body">
                                <input type="text"
                                    value={this.state.body}
                                    onChange={this.update("body")}
                                    placeholder="Description (ex: Stargazing with friends in the city!)"
                                    maxLength="140">
                                </input>
                            </div>
                            <span className="event-form-buttons">
                                <input onClick={this.handleCancel} className="event-form-cancel" type="submit" value="Cancel" />
                                <input onClick={this.handleSubmit} className="event-form-submit" type="submit" value="Submit" />       
                            </span>
                        </form>
                    </div>
            </div>

        )
    }
}

export default EventForm;
