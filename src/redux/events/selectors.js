
import { selectTitleFilter } from "../filters/selectors";
import { createSelector } from "@reduxjs/toolkit";


export const selectEvents = state => state.events.items;
export const selectIsLoading = state => state.events.isLoading;
export const selectError = state => state.events.error;

export const selectFilteredEvents = createSelector(
    [selectEvents, selectTitleFilter], (events, filter) => {
        if (!Array.isArray(events)) {
            return [];
        }
        return events.filter(event =>
            (typeof event.title === 'string' &&
                event.title.toLowerCase().includes(filter.toLowerCase())) ||
            (typeof event.description === "string" &&
                event.description.includes(filter))
        );
    }
);