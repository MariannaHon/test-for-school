
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from 'react-hot-toast';

axios.defaults.baseURL = "https://test-for-school-db.onrender.com/";

export const fetchParticipants = createAsyncThunk("participants/fetchAll", async (eventId, thunkAPI) => {
    try {
        const response = await axios.get(`/participants/${eventId}`);
        return response.data.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message) && toast.error('Something went wrong :( Try to reload your page.');
    }
});

export const fetchParticipantById = createAsyncThunk(
    "participants/fetchParticipant",
    async (participantId, thunkAPI) => {
        try {
            const response = await axios.get(`/participants/${participantId}`);
            return response.data.data && toast.success('A participant was successfully fetched!');
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);


export const addParticipant = createAsyncThunk(
    "participants/addParticipant",
    async ({ name, email, dateOfBirth, source, eventId }, thunkAPI) => {
        try {
            const response = await axios.post(`/participants/${eventId}`, { name, email, dateOfBirth, source });
            thunkAPI.dispatch(fetchParticipants(eventId));
            toast.success('A new participant was successfully added!')
            return response.data;

        } catch (e) {
            return thunkAPI.rejectWithValue(e.message) && toast.error('You failed to add new participant :(');
        }
    }
);

export const deleteParticipant = createAsyncThunk(
    "participants/deleteParticipant",
    async (participantId, thunkAPI) => {
        try {
            const response = await axios.delete(`/participants/${participantId}`);
            thunkAPI.dispatch(fetchParticipants());
            return response.data && toast.success('Your participant was successfully deleted!');
        } catch (e) {
            toast.error('You failed to delete your participant :(');
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const patchParticipant = createAsyncThunk(
    "participants/patchParticipant",
    async ({ _id, name, email, dateOfBirth, source }, thunkAPI) => {
        try {
            const response = await axios.patch(`/participants/${_id}`, { name, email, dateOfBirth, source });
            thunkAPI.dispatch(fetchParticipants);
            return response.data && toast.success('A participant was successfully changed!');
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);