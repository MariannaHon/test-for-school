
import { createSlice } from "@reduxjs/toolkit";
import { fetchEvents, fetchEventById, addEvent, deleteEvent, patchEvent } from "./operations";


const eventsInitialState = {
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

const eventsSlice = createSlice({
    name: "events",
    initialState: eventsInitialState,
    extraReducers: builder => {
        builder
            .addCase(fetchEvents.pending, handlePending)
            .addCase(fetchEvents.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items = action.payload;
            })
            .addCase(fetchEvents.rejected, handleRejected)
            .addCase(fetchEventById.pending, handlePending)
            .addCase(fetchEventById.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items = action.payload;
            })
            .addCase(fetchEventById.rejected, handleRejected)
            .addCase(addEvent.pending, handlePending)
            .addCase(addEvent.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items.push(action.payload);
            })
            .addCase(addEvent.rejected, handleRejected)
            .addCase(deleteEvent.pending, handlePending)
            .addCase(deleteEvent.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items = state.items.filter(
                    event => event.id !== action.payload.id
                );
            })
            .addCase(deleteEvent.rejected, handleRejected)
            .addCase(patchEvent.pending, handlePending)
            .addCase(patchEvent.fulfilled, (state, action) => {
                const index = state.items.findIndex(
                    event => event._id === action.payload._id
                );
                if (index !== -1) {
                    state.items[index] = action.payload;
                }
            })
            .addCase(patchEvent.rejected, handleRejected)
    },
});

export const eventsReducer = eventsSlice.reducer;

