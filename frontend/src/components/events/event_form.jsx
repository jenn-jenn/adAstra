import React from "react";

class EventForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            date: '',
            address: '',
            body: '',
            connectionCode: props.connectionCode,
            processed: false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEventModalClick = this.handleEventModalClick.bind(this);
    }

    update(field) {
        return(e) => {
            this.setState({ [field]: e.currentTarget.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        let data = {
            title: this.state.title,
            date: this.state.date,
            address: this.state.address,
            body: this.state.body,
            author: this.props.currentUser.id,
        }
        this.props.createNewEvent(data)
            .then( () => this.props.fetchEvents());
        this.setState({
            title: '',
            date: '',
            address: '',
            body: '',
            processed: true
        })
    }

    handleEventModalClick() {
        this.props.history.push('/main')
        this.props.closeModal()
    }
    render() {
        return (
            <div className="eventCalendar">
                <form className="event-form" onClick={this.handleEventModalClick} onSubmit={this.handleSubmit()}>
                    <div className="fill-event-form">Fill In Event</div>
                    <input type="text"
                        value={this.state.title}
                        onChange={this.update("title")}
                        placeholder="ex: Stargazing Night"
                        maxLength="50">
                    </input>
                    <input type="text"
                        value={this.state.date}
                        onChange={this.update("date")}
                        placeholder="ex: 11/22/2019"
                        maxLength="10">
                    </input>
                    <input type="text"
                        value={this.state.address}
                        onChange={this.update("address")}
                        placeholder="ex: S.F., CA"
                        maxLength="50">
                    </input>
                    <input type="text"
                        value={this.state.body}
                        onChange={this.update("body")}     
                        maxLength="50">
                    </input>
                </form>
            </div>
        )
    }
}

export default EventForm;
