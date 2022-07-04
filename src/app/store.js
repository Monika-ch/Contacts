import { combineReducers, configureStore, createStore } from "@reduxjs/toolkit";
import { ContactListReducer } from "./contactListReducer";
export const store = configureStore({ reducer: ContactListReducer });
