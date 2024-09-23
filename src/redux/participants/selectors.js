
import { selectNameFilter } from "../filters/selectors";
import { createSelector } from "@reduxjs/toolkit";


export const selectParticipants = state => state.participants.items;
export const selectIsLoading = state => state.participants.isLoading;
export const selectError = state => state.participants.error;

export const selectFilteredParticipants = createSelector(
    [selectParticipants, selectNameFilter], (participants, filter) => {
        if (!Array.isArray(participants)) {
            return [];
        }
        return participants.filter(participant =>
            (typeof participant.name === 'string' &&
                participant.name.toLowerCase().includes(filter.toLowerCase())) ||
            (typeof participant.email === "string" &&
                participant.email.includes(filter))
        );
    }
);