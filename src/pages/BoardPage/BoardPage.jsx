
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEvents } from '../../redux/events/operations.js'
import { selectError, selectIsLoading } from '../../redux/events/selectors.js';


// import css from './BoardPage.module.css'


import EventsList from "../../components/EventsList/EventsList.jsx";

const BoardPage = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(10);

    const dispatch = useDispatch();

    const error = useSelector(selectError);
    const isLoading = useSelector(selectIsLoading);

    useEffect(() => {
        dispatch(fetchEvents({ page: currentPage, perPage }));
    }, [dispatch, currentPage, perPage]);

    return (
        <div>
            {isLoading && <p>Loading events...</p>}
            {error && <p>{error}</p>}
            <h2>Events</h2>
            <EventsList />
            <div>
                <button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}>Previous</button>
                <span>Page {currentPage}</span>
                <button onClick={() => setCurrentPage(prev => prev + 1)}>Next</button>
            </div>
        </div>
    )
}

export default BoardPage
