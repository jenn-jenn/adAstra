// import React, { Component } from 'react';
// import logo from './logo.svg';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Icon from './icon';
// import { Form, Input, FormGroup, Container, Label } from 'reactstrap';
// import 'react-dates/initialize';
// import 'react-dates/lib/css/_datepicker.css';
// import { SingleDatePicker } from 'react-dates';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       date: null,
//       focused: null
//     }
//   }
//   render() {
//     return (
//       <div>
//         <Container>
//           <Form>
//             <FormGroup>
//               <Label for="firstname">Name: </Label>
//               <Input type="text" name="firstname" />
//             </FormGroup>
//             <FormGroup>
//               <Label for="lastname">Last Name: </Label>
//               <Input type="text" name="lastname" />
//             </FormGroup>
//             <FormGroup>
//               <SingleDatePicker
//                 // showClearDate={true}
//                 customInputIcon={
//                   <svg className="icon icon-small">
//                     <Icon
//                       icon="ICON_CALENDER"
//                       className="icon icon-large"
//                     />
//                   </svg>
//                 }
//                 inputIconPosition="after"
//                 small={true}
//                 block={false}
//                 numberOfMonths={1}
//                 date={this.state.date}
//                 onDateChange={date => this.handleDateChange(date)}
//                 focused={this.state.focused}
//                 onFocusChange={({ focused }) =>
//                   this.setState({ focused })
//                 }
//                 openDirection="up"
//                 hideKeyboardShortcutsPanel={true}
//               />
//             </FormGroup>
//           </Form>
//         </Container>
//       </div>
//     );
//   }
// }

// export default App;



// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import { render } from "react-dom";
// import { Calendar, momentLocalizer } from "react-big-calendar";
// import moment from "moment";
// import "react-big-calendar/lib/css/react-big-calendar.css";

// moment.locale("en-GB");
// const localizer = momentLocalizer(moment);
// const myEventsList = {} //empty object for now


// class App extends Component {
//   constructor() {
//     //We will populate this function later
//   }
//   constructor(props) {
//     super(props)
//     this.state = {
//       cal_events: this.state
//     }
//   }
//   componentDidMount() {
//     axios.get('http://localhost:3001/events')
//       .then(response => {

//         let appointments = response.data;

//         for (let i = 0; i < appointments.length; i++) {
//           appointments[i].start = moment.utc(appointments[i].start).toDate();
//           appointments[i].end = moment.utc(appointments[i].end).toDate();

//         }
//         self.setState({
//           cal_events: appointments
//         })

//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   }
//   render() {
//     return (
//       <Calendar
//         localizer={localizer}
//         events={myEventsList}
//         startAccessor="start"
//         endAccessor="end"
//       />
//     )
//   }
// }

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
