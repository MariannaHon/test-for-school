
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from 'react-hot-toast';

axios.defaults.baseURL = "https://test-for-school-db.onrender.com/";

export const fetchEvents = createAsyncThunk("events/fetchAll", async (_, thunkAPI) => {
    try {
        const response = await axios.get("/events");
        return response.data.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message) && toast.error('Something went wrong :( Try to reload your page.');
    }
});

export const fetchEventById = createAsyncThunk(
    "events/fetchEvent",
    async (eventId, thunkAPI) => {
        try {
            const response = await axios.get(`/events/${eventId}`);
            return response.data.data && toast.success('A event was successfully fetched!');
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);


export const addEvent = createAsyncThunk(
    "events/addEvent",
    async ({ title, description }, thunkAPI) => {
        try {
            const response = await axios.post("/events", { title, description });
            thunkAPI.dispatch(fetchEvents());
            toast.success('A new event was successfully added!')
            return response.data;

        } catch (e) {
            return thunkAPI.rejectWithValue(e.message) && toast.error('You failed to add new event :(');
        }
    }
);

export const deleteEvent = createAsyncThunk(
    "events/deleteEvent",
    async (eventId, thunkAPI) => {
        try {
            const response = await axios.delete(`/events/${eventId}`);
            thunkAPI.dispatch(fetchEvents());
            return response.data && toast.success('Your event was successfully deleted!');
        } catch (e) {
            toast.error('You failed to delete your event :(');
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const patchEvent = createAsyncThunk(
    "events/patchEvent",
    async ({ _id, title, description }, thunkAPI) => {
        try {
            const response = await axios.patch(`/events/${_id}`, { title, description });
            thunkAPI.dispatch(fetchEvents());
            return response.data && toast.success('A event was successfully changed!');
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);