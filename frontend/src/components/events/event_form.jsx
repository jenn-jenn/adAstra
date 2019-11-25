import React from "react";
import '../stylesheets/modal/event_modal.scss';

class EventForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            date: '',
            address: '',
            body: '',
            //connectionCode: props.connectionCode,
           // new: true
            //processed: false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        //this.handleEventModalClick = this.handleEventModalClick.bind(this);
    }
  
    
    update(field) {
        return(e) => {
            this.setState({ [field]: e.currentTarget.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        
        this.props.createNewEvent(this.state) 
           .then( () => this.props.history.push('/main'));
    }

    render() {
        return (
            <div className="eventCalendar">
                <h1>Welcome to the adAstra Event Form!</h1>
                 <div className="event-form-container">
                    <form className="event-form" >
                        <div className="fill-event-form">New Event</div>
                        <input type="text"
                            value={this.state.title}
                            onChange={this.update("title")}
                            placeholder="ex: Stargazing Night"
                            maxLength="50">
                        </input>
                        <br />
                        <input type="text"
                            value={this.state.date}
                            onChange={this.update("date")}
                            placeholder="ex: 11/22/2019"
                            maxLength="10">
                        </input>
                        <br />
                        <input type="text"
                            value={this.state.address}
                            onChange={this.update("address")}
                            placeholder="ex: S.F., CA"
                            maxLength="50">
                        </input>
                        <br />
                        <input type="text"
                            value={this.state.body}
                            onChange={this.update("body")}     
                            maxLength="50">
                        </input>
                        <br />
                        <input onClick={this.handleSubmit} className="input submit" type="submit" value="Submit" />       
                    </form>
                 </div>
            </div>
        )
    }
}

export default EventForm;
