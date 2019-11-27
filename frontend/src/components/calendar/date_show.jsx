//per event show form

import React from "react";

class DateShow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentDidMount() {
        this.props.fetchDateEvents(dateId)
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default DateShow;