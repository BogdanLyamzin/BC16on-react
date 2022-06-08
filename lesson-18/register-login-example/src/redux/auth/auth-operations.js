import { createAsyncThunk } from "@reduxjs/toolkit";

import * as services from "../../shared/services/auth";

export const signup = createAsyncThunk(
    "auth/signup",
    async (data, {rejectWithValue}) => {
        try {
            const user = await services.signup(data);
            return user;
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const login = createAsyncThunk(
    "auth/login",
    async (data, {rejectWithValue}) => {
        try {
            const user = await services.login(data);
            return user;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)