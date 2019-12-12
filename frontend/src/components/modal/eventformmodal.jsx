import React from 'react';
import EventFormContainer from '../events/event_form_container';


class EventFormModal extends React.Component {

    componentDidMount() {
        document.getElementsByClassName("event-modal-container")[0].addEventListener('click', () => {
            document.getElementsByClassName("event-modal-container")[0].classList.add('hidden');
            document.getElementsByClassName("event-form-modal")[0].classList.add('hidden');
            // console.log('am i closing?')
        })
        // document.querySelectorAll(".event-modal-container :not(.event-form-modal)").addEventListener('click', () =>{
        //     document.querySelector(".event-modal-container").classList.add('hidden');
        // })
    }

    render() {
        return (
            <>
                <div className="event-modal-container hidden">
                </div>
                <div className="event-form-modal hidden">
                    <i className="fa fa-times eventx" />
                    <EventFormContainer />
                </div>
            
            </>
        )
    }
}

export default EventFormModal;