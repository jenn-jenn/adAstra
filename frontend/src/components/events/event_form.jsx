import React from "react";
import '../stylesheets/event/event.scss';

class EventForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            date: '',
            address: '',
            body: '',
            connectionCode: props.connectionCode
        }
        this.handleSubmit = this.handleSubmit.bind(this);
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
            .then(() => this.props.history.push('/main'));
    }

    render() {
        return (
            <div className="eventCalendar">
                <h1>Welcome to the adAstra Event Form!</h1>
                    <div className="event-form-container">

                        <form className="event-form" >
                            <div className="event-title">
                                <h3>Event Title:</h3>
                                <input type="text"
                                    value={this.state.title}
                                    onChange={this.update("title")}
                                    placeholder="ex: Stargazing Night"
                                    maxLength="50">
                                </input>
                                <br />
                            </div>

                            <div className="event-date">
                                <h3>Event Date:</h3>
                                <input type="text"
                                    value={this.state.date}
                                    onChange={this.updateDate("date")}
                                    placeholder="ex: December-5-2019"
                                    >
                                </input>
                                <br />
                            </div>

                            <div className="event-address">
                                <h3>Event Address:</h3>
                                <input type="text"
                                    value={this.state.address}
                                    onChange={this.update("address")}
                                    placeholder="ex: S.F., CA"
                                    maxLength="50">
                                </input>
                                <br />
                            </div>

                            <div className="event-body">
                                <h3>Event Body:</h3>
                                <input type="text"
                                    value={this.state.body}
                                    onChange={this.update("body")}  
                                    placeholder="ex: Stargazing with friends in the city!"   
                                    maxLength="140">
                                </input>
                                <br />
                            </div>
                            <div className="event-form-buttons">
                                <input onClick={this.handleSubmit} className="event-form-update" type="submit" value="Update" />
                                <input onClick={this.handleSubmit} className="event-form-submit" type="submit" value="Submit" />       
                            </div>
                        </form>
                    </div>
            </div>

        )
    }
}

export default EventForm;
