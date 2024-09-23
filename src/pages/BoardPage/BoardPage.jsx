
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEvents } from '../../redux/events/operations.js'
import { selectError, selectIsLoading } from '../../redux/events/selectors.js';


// import css from './BoardPage.module.css'


import EventsList from "../../components/EventsList/EventsList.jsx";

const BoardPage = () => {

    const dispatch = useDispatch();

    const error = useSelector(selectError);
    const isLoading = useSelector(selectIsLoading);

    useEffect(() => {
        dispatch(fetchEvents());
    }, [dispatch]);

    return (
        <div>
            {isLoading && <p>Loading events...</p>}
            {error && <p>{error}</p>}
            <h2>Events</h2>
            <EventsList />
        </div>
    )
}

export default BoardPage
