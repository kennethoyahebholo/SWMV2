import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { toast } from "react-toastify";
import { Register, Signin, ForgotPassword, Logout } from "../../services";
import { formatErrorResponse } from "../../utils/formatErrorResponse";
import { SWM_USER_DATA } from "../../services/CONSTANTS";

const user = JSON.parse(localStorage.getItem(SWM_USER_DATA));

export const register = createAsyncThunk(
  "auth/signup",
  async ({ email, phoneNumber, password }, thunkAPI) => {
    try {
      const resp = await Register({
        email,
        phoneNumber,
        password,
      });
      return resp;
    } catch (error) {
      const message = formatErrorResponse(error);
      toast.error(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const resp = await Signin({ email, password });
      // return { userId: DATA.id, email: DATA.email };
      return resp;
    } catch (error) {
      const message = formatErrorResponse(error);
      toast.error(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const forgotPassword = createAsyncThunk(
  "auth/forgotPassword",
  async (details, thunkAPI) => {
    try {
      const { DATA, MESSAGE } = await ForgotPassword(details);
      toast.success(MESSAGE);
      return { userId: DATA.id, email: DATA.email };
    } catch (error) {
      const message = formatErrorResponse(error);
      toast.error(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  try {
    await Logout();
  } catch (error) {
    const message = formatErrorResponse(error);
    toast.error(message);
  }
});

const initialState = user
  ? { isLoggedIn: true, user: null, isLoading: false, passwordReset: false }
  : { isLoggedIn: false, user: null, isLoading: false, passwordReset: false };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // register actions
    builder.addCase(register.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(register.fulfilled, (state) => {
      state.isLoggedIn = false;
      state.isLoading = false;
    });
    builder.addCase(register.rejected, (state) => {
      state.isLoggedIn = false;
      state.isLoading = false;
    });
    // login actions
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(login.rejected, (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.isLoading = false;
    });
    // forgot password actions
    // builder.addCase(forgotPassword.pending, (state) => {
    //   state.isLoading = true;
    // });
    // builder.addCase(forgotPassword.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.passwordReset = true;
    //   state.user = action.payload;
    // });
    // builder.addCase(forgotPassword.rejected, (state) => {
    //   state.isLoading = false;
    // });
    // reset password actions
    // builder.addCase(resetPassword.pending, (state) => {
    //   state.isLoading = true;
    // });
    // builder.addCase(resetPassword.fulfilled, (state) => {
    //   state.isLoading = false;
    // });
    // builder.addCase(resetPassword.rejected, (state) => {
    //   state.isLoading = false;
    // });
    // logout
    builder.addCase(logout.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.isLoading = false;
    });
    builder.addCase(logout.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

const { reducer } = authSlice;

export default reducer;