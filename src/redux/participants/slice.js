

import { createSlice } from "@reduxjs/toolkit";
import { fetchParticipants, fetchParticipantById, addParticipant, patchParticipant, deleteParticipant } from "./operations";


const participantsInitialState = {
    items: [],
    loading: false,
    error: null
};

const handlePending = state => {
    state.isLoading = true;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const participantsSlice = createSlice({
    name: "participants",
    initialState: participantsInitialState,
    extraReducers: builder => {
        builder
            .addCase(fetchParticipants.pending, handlePending)
            .addCase(fetchParticipants.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items = action.payload;
            })
            .addCase(fetchParticipants.rejected, handleRejected)
            .addCase(fetchParticipantById.pending, handlePending)
            .addCase(fetchParticipantById.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items = action.payload;
            })
            .addCase(fetchParticipantById.rejected, handleRejected)
            .addCase(addParticipant.pending, handlePending)
            .addCase(addParticipant.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items.push(action.payload);
            })
            .addCase(addParticipant.rejected, handleRejected)
            .addCase(deleteParticipant.pending, handlePending)
            .addCase(deleteParticipant.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items = state.items.filter(
                    event => event.id !== action.payload.id
                );
            })
            .addCase(deleteParticipant.rejected, handleRejected)
            .addCase(patchParticipant.pending, handlePending)
            .addCase(patchParticipant.fulfilled, (state, action) => {
                const index = state.items.findIndex(
                    event => event._id === action.payload._id
                );
                if (index !== -1) {
                    state.items[index] = action.payload;
                }
            })
            .addCase(patchParticipant.rejected, handleRejected)
    },
});


export const participantsReducer = participantsSlice.reducer;