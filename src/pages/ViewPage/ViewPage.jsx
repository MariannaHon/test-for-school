
import ViewList from "../../components/ViewList/ViewList"

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchParticipants } from '../../redux/participants/operations.js'
import { selectError, selectIsLoading } from '../../redux/participants/selectors.js';

import { useLocation } from "react-router-dom"

const ViewPage = () => {

    const location = useLocation();
    const eventId = location.state?.eventId;

    const dispatch = useDispatch();

    const error = useSelector(selectError);
    const isLoading = useSelector(selectIsLoading);

    useEffect(() => {
        if (eventId) {
            dispatch(fetchParticipants(eventId));
        }
    }, [dispatch, eventId]);

    return (
        <div>
            {isLoading && <p>Loading participants...</p>}
            {error && <p>{error}</p>}
            <h2>Awesome Event participants</h2>
            <ViewList />
        </div>
    )
}

export default ViewPage
