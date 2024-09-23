import { configureStore } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { eventsReducer } from "./events/slice";
import { participantsReducer } from "./participants/slice";
import { filtersReducer } from "./filters/slice";

const eventsPersistConfig = {
    key: 'events',
    storage,
};


export const store = configureStore({
    reducer: {
        // auth: persistReducer(authPersistConfig, authReducer),
        events: persistReducer(eventsPersistConfig, eventsReducer),
        participants: participantsReducer,
        filters: filtersReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});



export const persistor = persistStore(store);