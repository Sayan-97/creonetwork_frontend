import { configureStore } from "@reduxjs/toolkit";
import userStateReducer from "./reducers/userStateReducer";

// Load the initial user state from localStorage (if available)
const loadState = () => {
    try {
        const serializedState = localStorage.getItem("reduxState");
        if (serializedState === null) {
            return undefined;
        }
        const parsedState = JSON.parse(serializedState);
        return parsedState; // Return the entire state object
    } catch (err) {
        console.error("Error loading state from localStorage:", err);
        return undefined;
    }
};


// Save the state to localStorage
const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("reduxState", serializedState);
    } catch (err) {
        // Handle errors here, if needed
        console.log(err);
    }
};

// Create the Redux store with the userStateReducer
const store = configureStore({
    reducer: {
        user: userStateReducer,
    },
    preloadedState: loadState(),
});

// Subscribe to store updates and save the state to localStorage
store.subscribe(() => {
    const state = store.getState();
    saveState(state); // Save the entire state object
});

export default store;