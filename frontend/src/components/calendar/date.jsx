import React from "react";

class DateObj extends React.Component {

    handleDeleteDate() {
        return (e) => {
            this.props.deleteDate(this.props.date.id)
        };
    }

    showUserButton() {
        if (this.props.date.authorId === this.props.user.id) {
            return (
                <i className="fas fa-trash-alt" onClick={this.handleDeleteDate()}></i>
            );
        } else {
            return null;
        }
    }

    fetchDate(date) {
        let arr = date.split("-");
        const event_month = months[parseInt(arr[1], 10) - 1];
        const event_yr = arr[0];
        const event_day = arr[2].substring(0, 2);

        const months = ["January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"];
        
        const convertedHours = {
            "13": "1", "14": "2", "15": "3", "16": "4", "17": "5", "18": "6", 
            "19": "7", "20": "8", "21": "9", "22": "10", "23": "11", "24": "12" 
        };

        let dateHours;
        let meridiem;
        if (new Date(date).getHours() < 13) {
            dateHours = new Date(date).getHours();
            meridiem = "AM";
        } else {
            dateHours = convertedHours[new Date(date).getHours()];
            meridiem = "PM";
        }

        let dateMinutes;
        if (new Date(date).getMinutes() === 0) {
            dateMinutes = "00";
        } else {
            dateMinutes = new Date(date).getMinutes();
        }

        return (
            <div>
                {event_month + " " + event_day + " " + event_yr + ",   " + dateHours + ":" + dateMinutes + meridiem}
            </div>
        )
    }
    render() {
        let { date, title } = this.props.date;
     
        return (
            <div className="tile">
                <div className="container-right">
                    <div className="event-">
                        <div className="event">
                            <div className="event-date">
                                {this.props.date.date}
                            </div>
                            {this.showUserButton()}
                        </div>
                        <div className="event-title">
                            {title}
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default DateObj;


