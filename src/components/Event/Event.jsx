
import { useLocation, Link } from "react-router-dom"

// import { deleteEvent } from "../../redux/events/operations.js";
// import css from './Event.module.css'


const Event = ({ event: { _id, title, description } }) => {



    const location = useLocation();

    return (
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
            <ul>
                <li>
                    <Link to="register" state={{ eventId: _id, from: location.state?.from }}>Registration</Link>
                </li>
                <li>
                    <Link to="view" state={{ eventId: _id, from: location.state?.from }}>View</Link>
                </li>
            </ul>
        </div>
    )
}

export default Event
