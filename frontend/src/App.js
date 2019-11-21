import React from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from "react-dom";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

moment.locale("en-GB");
const localizer = momentLocalizer(moment);
const myEventsList = {} //empty object for now


class App extends Component {
  constructor() {
    //We will populate this function later
  }
  constructor(props) {
    super(props)
    this.state = {
      cal_events: this.state
    }
  }
  componentDidMount() {
    axios.get('http://localhost:3001/events')
      .then(response => {

        let appointments = response.data;

        for (let i = 0; i < appointments.length; i++) {
          appointments[i].start = moment.utc(appointments[i].start).toDate();
          appointments[i].end = moment.utc(appointments[i].end).toDate();

        }
        self.setState({
          cal_events: appointments
        })

      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    return (
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
      />
    )
  }
}

//   function App() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

export default App;
