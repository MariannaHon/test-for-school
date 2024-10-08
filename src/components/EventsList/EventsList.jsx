
import Event from "../Event/Event.jsx";

import { useSelector } from "react-redux";
import { selectFilteredEvents } from "../../redux/events/selectors.js";
// import css from './EventsList.module.css'

const EventsList = () => {

    const events = useSelector(selectFilteredEvents);

    return (
        <div>
            {events.length === 0 ? (
                <p>No events found</p>
            ) : (
                <ul>
                    {events.map(event => (
                        <li key={event._id}>
                            <Event event={event} />
                        </li>
                    ))}
                </ul>)}
        </div>
    )
}

export default EventsList
