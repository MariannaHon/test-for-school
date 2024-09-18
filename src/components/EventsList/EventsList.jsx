
import Event from "../Event/Event.jsx";

const EventsList = () => {
    return (
        <div>
            {/* <ul>
                {events.map(event => (
                    <li key={event.id}>
                        <Event event={event} />
                    </li>
                ))}
            </ul> */}
            <ul>
                <li>
                    <Event />
                </li>
            </ul>
        </div>
    )
}

export default EventsList
