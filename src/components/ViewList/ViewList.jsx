
import Participant from "../Participant/Participant"

import { useSelector } from "react-redux";
import { selectFilteredParticipants } from "../../redux/participants/selectors.js";

const ViewList = () => {

    const participants = useSelector(selectFilteredParticipants);

    return (
        <div>
            <ul>
                {participants.map(participant => (
                    <li key={participant._id}>
                        <Participant participant={participant} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ViewList
