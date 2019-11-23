import React from "react";

class EventForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            authorId: props.authorId,
            date: '',
            connectionCode: props.connectionCode
        };
    }

    update(field) {
        return (e) => this.setState({
            [field]: e.target.value
        });
    }

    handleSubmit() {
        return (e) => {
            let obj = this.state;
            this.props.createNewEvent(obj);
            this.props.getEvents(this.props.authorId);
        };
    }

    render() {
        return (
            <form className="event-form" onClick={e => e.stopPropagation()} onSubmit={this.handleSubmit()}>
                <div className="create-event-header">Create Event</div>
                <input value={this.state.title} onChange={this.update("title")} placeholder="ex: Stargazing Night" maxLength="50"></input>
                <input type="datetime-local" value={this.state.date} onChange={this.update("event")} ></input>
                <div className="create-date">
                    <button>Create<i class="far fa-calendar-alt"></i></button>
                </div>
            </form>
        )
    }
}

export default EventForm;