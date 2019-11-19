import React from "react";
import { withRouter } from 'react-router-dom';
import '../stylesheets/calendar/calendar.scss';

class CalendarForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            authorId: props.authorId, 
            date: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e =>
            this.setState({
                [field]: e.currentTarget.value
            });
    }

    handleSubmit() {
        return (e) => {
            let obj = this.state;
            this.props.createDate(obj);
            this.props.getAllDates(this.props.authorId);
        };
    }

    render() {
        return (
            <form className="calendar-form" onClick={e => e.stopPropagation()} onSubmit={this.handleSubmit()}>
                <div className="create-date">Create Date</div>
                <input value={this.state.title} onChange={this.update("title")} placeholder="stargazing"></input>
                <input type="datetime-local" value={this.state.date} onChange={this.update("date")}></input>

                <div className="new-date">
                    <button>Create Date</button>
                </div>
            </form>
        );
    }
}


export default withRouter(CalendarForm);
