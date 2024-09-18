
import { useLocation, Link } from "react-router-dom"

const Event = () => {

    const location = useLocation();

    return (
        <div>
            <h3>Title</h3>
            <p>Description</p>
            <ul>
                <li>
                    <Link to="register" state={{ from: location.state?.from }}>Registration</Link>
                </li>
                <li>
                    <Link to="view" state={{ from: location.state?.from }}>View</Link>
                </li>
            </ul>
        </div>
    )
}

export default Event
